"use client";

import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Chip from "@mui/material/Chip";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import HistoryIcon from "@mui/icons-material/History";
import RestoreIcon from "@mui/icons-material/Restore";
import { HistoryEntry, LANGUAGE_FLAGS } from "@/types";
import { motion } from "framer-motion";

interface HistoryPanelProps {
  history: HistoryEntry[];
  onRestore: (entry: HistoryEntry) => void;
  activeId?: string;
}

function timeAgo(timestamp: number): string {
  const secs = Math.floor((Date.now() - timestamp) / 1000);
  if (secs < 60) return "just now";
  const mins = Math.floor(secs / 60);
  if (mins < 60) return `${mins}m ago`;
  const hrs = Math.floor(mins / 60);
  return `${hrs}h ago`;
}

export default function HistoryPanel({ history, onRestore, activeId }: HistoryPanelProps) {
  if (history.length < 2) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: "easeOut" as const }}
    >
      <Accordion
        variant="outlined"
        disableGutters
        sx={{ borderRadius: "12px !important", mt: 3, "&:before": { display: "none" } }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          sx={{
            borderRadius: "12px",
            bgcolor: "#f8fafc",
            "& .MuiAccordionSummary-content": { alignItems: "center", gap: 1 },
          }}
        >
          <HistoryIcon sx={{ fontSize: 20, color: "text.secondary" }} />
          <Typography fontWeight={700} variant="subtitle2">
            Analysis History
          </Typography>
          <Chip
            label={`${history.length} entries`}
            size="small"
            sx={{ ml: 1, height: 20, fontSize: "0.68rem" }}
          />
        </AccordionSummary>

        <AccordionDetails sx={{ p: 2 }}>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5 }}>
            {history.map((entry, idx) => {
              const { result } = entry;
              const isActive = entry.id === activeId;
              const pct = Math.round(result.cyberbullyingScore * 100);
              const preview = result.text.length > 80
                ? result.text.slice(0, 80) + "…"
                : result.text;
              const lang = result.detectedLanguages[0] ?? "English";
              const flag = LANGUAGE_FLAGS[lang] ?? "🌐";

              return (
                <motion.div
                  key={entry.id}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.05, duration: 0.3 }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 2,
                      p: 1.75,
                      borderRadius: 2,
                      border: "1px solid",
                      borderColor: isActive ? "#6366f1" : result.isBullying ? "#fca5a5" : "#86efac",
                      bgcolor: isActive ? "#f0f4ff" : result.isBullying ? "#fff5f5" : "#f0fdf4",
                      flexWrap: "wrap",
                    }}
                  >
                    {/* Verdict icon */}
                    <Typography fontSize="1.25rem">
                      {result.isBullying ? "⚠️" : "✅"}
                    </Typography>

                    {/* Content */}
                    <Box sx={{ flex: 1, minWidth: 0 }}>
                      <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 0.25 }}>
                        <Chip
                          label={`${pct}%`}
                          size="small"
                          sx={{
                            height: 18,
                            fontSize: "0.65rem",
                            fontWeight: 700,
                            bgcolor: result.isBullying ? "#fee2e2" : "#dcfce7",
                            color: result.isBullying ? "#991b1b" : "#14532d",
                            border: "none",
                          }}
                        />
                        <Typography variant="caption" sx={{ color: "text.secondary" }}>
                          {flag} {lang}
                        </Typography>
                        <Typography variant="caption" color="text.disabled" sx={{ ml: "auto" }}>
                          {timeAgo(entry.timestamp)}
                        </Typography>
                      </Box>
                      <Typography
                        variant="body2"
                        sx={{
                          color: "text.secondary",
                          fontSize: "0.78rem",
                          whiteSpace: "nowrap",
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                        }}
                      >
                        {preview}
                      </Typography>
                    </Box>

                    {/* Restore button */}
                    {!isActive && (
                      <Button
                        size="small"
                        variant="outlined"
                        startIcon={<RestoreIcon sx={{ fontSize: "14px !important" }} />}
                        onClick={() => onRestore(entry)}
                        sx={{
                          textTransform: "none",
                          fontSize: "0.7rem",
                          py: 0.3,
                          px: 1,
                          borderRadius: 2,
                          flexShrink: 0,
                        }}
                      >
                        View
                      </Button>
                    )}
                    {isActive && (
                      <Chip label="Viewing" size="small" color="primary" sx={{ fontSize: "0.65rem", height: 20 }} />
                    )}
                  </Box>
                </motion.div>
              );
            })}
          </Box>
        </AccordionDetails>
      </Accordion>
    </motion.div>
  );
}
