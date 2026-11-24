"use client";

import { useState, useCallback } from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";
import ShieldIcon from "@mui/icons-material/Shield";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import AnalysisForm from "@/components/analysis/AnalysisForm";
import AnalysisResults from "@/components/analysis/AnalysisResults";
import RecommendationPanel from "@/components/analysis/RecommendationPanel";
import HistoryPanel from "@/components/analysis/HistoryPanel";
import { AnalysisResult, AnalysisStatus, HistoryEntry } from "@/types";
import { motion, AnimatePresence } from "framer-motion";

/* ── Stat chip used in the session bar ────────────────── */
function StatChip({
  icon,
  label,
  value,
  color,
}: {
  icon: string;
  label: string;
  value: string | number;
  color?: string;
}) {
  return (
    <Box sx={{ textAlign: "center" }}>
      <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 0.5 }}>
        <Typography fontSize="0.9rem">{icon}</Typography>
        <Typography
          variant="h6"
          fontWeight={900}
          sx={{ color: color ?? "#e0e7ff", lineHeight: 1, fontSize: "1.1rem" }}
        >
          {value}
        </Typography>
      </Box>
      <Typography variant="caption" sx={{ color: "rgba(255,255,255,0.5)", fontSize: "0.65rem" }}>
        {label}
      </Typography>
    </Box>
  );
}

/* ── Page ──────────────────────────────────────────────── */
export default function AnalyzePage() {
  const [history, setHistory] = useState<HistoryEntry[]>([]);
  const [activeResult, setActiveResult] = useState<AnalysisResult | null>(null);
  const [activeId, setActiveId] = useState<string | null>(null);
  const [status, setStatus] = useState<AnalysisStatus>("idle");

  /* Derived session stats */
  const total = history.length;
  const bullyingCount = history.filter((h) => h.result.isBullying).length;
  const safeCount = total - bullyingCount;
  const avgScore =
    total > 0
      ? Math.round(
          (history.reduce((s, h) => s + h.result.cyberbullyingScore, 0) / total) * 100
        )
      : 0;

  const handleResult = useCallback((result: AnalysisResult) => {
    const id = Date.now().toString();
    const entry: HistoryEntry = { id, timestamp: Date.now(), result };
    setHistory((prev) => [entry, ...prev].slice(0, 15));
    setActiveResult(result);
    setActiveId(id);
  }, []);

  const handleRestore = useCallback((entry: HistoryEntry) => {
    setActiveResult(entry.result);
    setActiveId(entry.id);
    setStatus("success");
    // Scroll to results
    setTimeout(() => {
      document.getElementById("results-section")?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 100);
  }, []);

  return (
    <Box sx={{ bgcolor: "background.default", minHeight: "calc(100vh - 64px)" }}>

      {/* ── Session stats bar (appears after first analysis) ── */}
      <AnimatePresence>
        {total > 0 && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" as const }}
          >
            <Box sx={{ bgcolor: "#1e1b4b", py: 2, borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
              <Container maxWidth="md">
                <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 1 }}>
                  <TrendingUpIcon sx={{ fontSize: 14, color: "rgba(255,255,255,0.4)" }} />
                  <Typography variant="caption" sx={{ color: "rgba(255,255,255,0.4)" }}>
                    Session Statistics
                  </Typography>
                </Box>
                <Grid container spacing={3}>
                  <Grid size={{ xs: 3 }}>
                    <motion.div
                      key={total}
                      initial={{ scale: 1.2 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring" as const, stiffness: 400 }}
                    >
                      <StatChip icon="🔍" label="Analyzed" value={total} />
                    </motion.div>
                  </Grid>
                  <Grid size={{ xs: 3 }}>
                    <motion.div
                      key={`b${bullyingCount}`}
                      initial={{ scale: 1.2 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring" as const, stiffness: 400 }}
                    >
                      <StatChip icon="⚠️" label="Bullying" value={bullyingCount} color={bullyingCount > 0 ? "#f87171" : "#e0e7ff"} />
                    </motion.div>
                  </Grid>
                  <Grid size={{ xs: 3 }}>
                    <motion.div
                      key={`s${safeCount}`}
                      initial={{ scale: 1.2 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring" as const, stiffness: 400 }}
                    >
                      <StatChip icon="✅" label="Safe" value={safeCount} color={safeCount > 0 ? "#4ade80" : "#e0e7ff"} />
                    </motion.div>
                  </Grid>
                  <Grid size={{ xs: 3 }}>
                    <StatChip icon="📊" label="Avg Score" value={`${avgScore}%`} color={avgScore > 50 ? "#f87171" : avgScore > 25 ? "#fbbf24" : "#4ade80"} />
                  </Grid>
                </Grid>
              </Container>
            </Box>
          </motion.div>
        )}
      </AnimatePresence>

      <Container maxWidth="md" sx={{ py: 5 }}>

        {/* ── Page header ── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <Box sx={{ display: "flex", alignItems: "flex-start", gap: 2, mb: 4 }}>
            <Box
              sx={{
                p: 1.5,
                borderRadius: 2,
                background: "linear-gradient(135deg, #4f46e5, #7c3aed)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
              }}
            >
              <ShieldIcon sx={{ color: "white", fontSize: 28 }} />
            </Box>
            <Box>
              <Typography variant="h4" fontWeight={800} sx={{ letterSpacing: "-0.5px", lineHeight: 1.2 }}>
                Text Analyzer
              </Typography>
              <Typography variant="body2" color="text.secondary" mt={0.5}>
                Detect cyberbullying in any language — English, Hindi/Hinglish, Arabic, Spanish &amp; more.
              </Typography>
            </Box>
          </Box>
        </motion.div>

        {/* ── Analyzer card ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.08 }}
        >
          <Paper
            variant="outlined"
            sx={{
              p: { xs: 3, sm: 4 },
              borderRadius: 3,
              bgcolor: "white",
              boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
              borderColor: "#e2e8f0",
            }}
          >
            <AnalysisForm onResult={handleResult} onStatusChange={setStatus} />

            {/* Loading animation */}
            <AnimatePresence mode="wait">
              {status === "loading" && (
                <motion.div
                  key="loading"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.25 }}
                >
                  <Divider sx={{ my: 3 }} />
                  <Box sx={{ textAlign: "center", py: 5 }}>
                    <motion.div
                      animate={{ scale: [1, 1.12, 1], opacity: [0.6, 1, 0.6] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                      style={{ display: "inline-block", marginBottom: 14 }}
                    >
                      <ShieldIcon sx={{ fontSize: 52, color: "primary.main" }} />
                    </motion.div>
                    <Typography color="text.secondary" variant="body2" mb={2}>
                      AI is analyzing content across all languages…
                    </Typography>
                    <Box sx={{ display: "flex", justifyContent: "center", gap: 0.75 }}>
                      {[0, 1, 2].map((i) => (
                        <motion.div
                          key={i}
                          animate={{ y: [0, -10, 0] }}
                          transition={{ duration: 0.7, repeat: Infinity, delay: i * 0.18, ease: "easeInOut" }}
                          style={{
                            width: 9, height: 9, borderRadius: "50%",
                            background: "linear-gradient(135deg,#4f46e5,#7c3aed)",
                          }}
                        />
                      ))}
                    </Box>
                  </Box>
                </motion.div>
              )}
            </AnimatePresence>
          </Paper>
        </motion.div>

        {/* ── Results ── */}
        <AnimatePresence>
          {status === "success" && activeResult && (
            <motion.div
              id="results-section"
              key={activeId ?? "result"}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              <Paper
                variant="outlined"
                sx={{
                  p: { xs: 3, sm: 4 },
                  borderRadius: 3,
                  bgcolor: "white",
                  mt: 3,
                  boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
                  borderColor: "#e2e8f0",
                }}
              >
                <AnalysisResults result={activeResult} />
              </Paper>

              {/* Recommendation panel */}
              <RecommendationPanel isBullying={activeResult.isBullying} />
            </motion.div>
          )}
        </AnimatePresence>

        {/* ── History ── */}
        <HistoryPanel history={history} onRestore={handleRestore} activeId={activeId ?? undefined} />

      </Container>
    </Box>
  );
}
