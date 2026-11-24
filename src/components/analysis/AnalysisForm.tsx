"use client";

import { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";
import Typography from "@mui/material/Typography";
import CircularProgress from "@mui/material/CircularProgress";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import SearchIcon from "@mui/icons-material/Search";
import ClearIcon from "@mui/icons-material/Clear";
import LightbulbOutlinedIcon from "@mui/icons-material/LightbulbOutlined";
import TranslateIcon from "@mui/icons-material/Translate";
import { analyzeText } from "@/services/analysis";
import { AnalysisResult, AnalysisStatus } from "@/types";
import { motion } from "framer-motion";

interface AnalysisFormProps {
  onResult: (result: AnalysisResult) => void;
  onStatusChange: (status: AnalysisStatus) => void;
}

const MAX_CHARS = 3000;

const SAMPLE_TEXTS = [
  {
    label: "✅ Friendly",
    text: "Hey! Great work on the project today. I really enjoyed collaborating with everyone — let's do it again soon!",
  },
  {
    label: "😐 Neutral",
    text: "The meeting has been rescheduled to Thursday at 3 PM. Please make sure to bring the quarterly reports.",
  },
  {
    label: "⚠️ English",
    text: "You're so stupid and annoying. Nobody likes you and everyone thinks you're a loser. Just go away.",
  },
  {
    label: "🇮🇳 Hinglish",
    text: "Tu bilkul bekaar aur nalayak hai. Saare log tujhse nafrat karte hain. Nikal yahan se, kamine.",
  },
  {
    label: "🌐 Mixed",
    text: "You absolute chutiya, teri wajah se sab kuch barbaad hua. Everyone hates you, saala harami.",
  },
];

function getBarColor(pct: number): string {
  if (pct < 50) return "#4f46e5";
  if (pct < 80) return "#f59e0b";
  return "#ef4444";
}

function countSentences(t: string): number {
  const matches = t.match(/[^.!?]*[.!?]+/g);
  return matches ? matches.length : t.trim() ? 1 : 0;
}

export default function AnalysisForm({ onResult, onStatusChange }: AnalysisFormProps) {
  const [text, setText] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const trimmed = text.trim();
    if (trimmed.length < 2) { setError("Please enter at least 2 characters."); return; }
    setError(null);
    setLoading(true);
    onStatusChange("loading");
    try {
      const result = await analyzeText(trimmed);
      onResult(result);
      onStatusChange("success");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Analysis failed. Please try again.");
      onStatusChange("error");
    } finally {
      setLoading(false);
    }
  }

  const charPct = Math.round((text.length / MAX_CHARS) * 100);
  const barColor = getBarColor(charPct);
  const wordCount = text.trim() ? text.trim().split(/\s+/).filter(Boolean).length : 0;
  const sentences = countSentences(text);

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ width: "100%" }}>

      {/* Multilingual badge */}
      <motion.div
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1,
            mb: 2,
            p: 1.25,
            borderRadius: 2,
            background: "linear-gradient(90deg, #ede9fe, #e0e7ff)",
            border: "1px solid #c4b5fd",
          }}
        >
          <TranslateIcon sx={{ fontSize: 16, color: "#7c3aed", flexShrink: 0 }} />
          <Typography variant="caption" sx={{ color: "#4c1d95", lineHeight: 1.4 }}>
            <strong>Multilingual:</strong> English, Hindi/Hinglish, Punjabi, Bengali, Tamil, Arabic, Spanish, French, German &amp; more.
          </Typography>
        </Box>
      </motion.div>

      {/* Sample buttons */}
      <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 1.5, flexWrap: "wrap" }}>
        <Box sx={{ display: "flex", alignItems: "center", gap: 0.5, flexShrink: 0 }}>
          <LightbulbOutlinedIcon sx={{ fontSize: 14, color: "text.secondary" }} />
          <Typography variant="caption" color="text.secondary">Try a sample:</Typography>
        </Box>
        {SAMPLE_TEXTS.map((s) => (
          <motion.div key={s.label} whileTap={{ scale: 0.94 }}>
            <Button
              size="small"
              variant="outlined"
              onClick={() => { setText(s.text); setError(null); }}
              sx={{ textTransform: "none", fontSize: "0.7rem", borderRadius: 3, py: 0.2, px: 1, minWidth: "auto" }}
            >
              {s.label}
            </Button>
          </motion.div>
        ))}
      </Box>

      {/* Textarea */}
      <Box sx={{ position: "relative", mb: 1.5 }}>
        <TextField
          multiline
          rows={7}
          fullWidth
          placeholder="Paste or type text in any language — English, Hindi, Hinglish, Arabic, Spanish, or mixed…"
          value={text}
          onChange={(e) => setText(e.target.value)}
          inputProps={{ maxLength: MAX_CHARS }}
          error={!!error}
          helperText={error}
          disabled={loading}
          sx={{
            "& .MuiOutlinedInput-root": {
              borderRadius: 2.5,
              fontSize: "0.95rem",
              bgcolor: "white",
              pr: text ? 5 : undefined,
              transition: "box-shadow 0.2s",
              "&.Mui-focused": {
                boxShadow: "0 0 0 3px rgba(79,70,229,0.15)",
              },
            },
          }}
        />
        {text && !loading && (
          <Tooltip title="Clear">
            <IconButton
              size="small"
              onClick={() => { setText(""); setError(null); }}
              sx={{ position: "absolute", top: 10, right: 10, color: "text.secondary" }}
            >
              <ClearIcon fontSize="small" />
            </IconButton>
          </Tooltip>
        )}
      </Box>

      {/* Character progress bar */}
      <Box sx={{ mb: 2 }}>
        <Box sx={{ display: "flex", justifyContent: "space-between", mb: 0.5, alignItems: "center" }}>
          <Box sx={{ display: "flex", gap: 2 }}>
            <Typography variant="caption" color="text.secondary">
              {wordCount} {wordCount === 1 ? "word" : "words"}
            </Typography>
            {sentences > 0 && (
              <Typography variant="caption" color="text.secondary">
                {sentences} {sentences === 1 ? "sentence" : "sentences"}
              </Typography>
            )}
          </Box>
          <Typography
            variant="caption"
            fontWeight={600}
            sx={{ color: charPct > 80 ? barColor : "text.secondary" }}
          >
            {text.length} / {MAX_CHARS}
          </Typography>
        </Box>
        <LinearProgress
          variant="determinate"
          value={charPct}
          sx={{
            height: 5,
            borderRadius: 3,
            bgcolor: "#f1f5f9",
            "& .MuiLinearProgress-bar": {
              bgcolor: barColor,
              borderRadius: 3,
              transition: "background-color 0.3s ease, width 0.2s ease",
            },
          }}
        />
      </Box>

      {/* Submit */}
      <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
        <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }}>
          <Button
            type="submit"
            variant="contained"
            size="large"
            disabled={loading || text.trim().length < 2}
            startIcon={loading ? <CircularProgress size={18} color="inherit" /> : <SearchIcon />}
            sx={{
              textTransform: "none",
              fontWeight: 700,
              borderRadius: 2.5,
              px: 5,
              py: 1.25,
              fontSize: "0.95rem",
              background: "linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%)",
              boxShadow: "0 4px 14px rgba(79,70,229,0.35)",
              "&:hover": {
                background: "linear-gradient(135deg, #4338ca 0%, #6d28d9 100%)",
                boxShadow: "0 6px 20px rgba(79,70,229,0.45)",
              },
              "&:disabled": { background: "#e2e8f0", boxShadow: "none" },
            }}
          >
            {loading ? "Analyzing…" : "Analyze Text"}
          </Button>
        </motion.div>
      </Box>
    </Box>
  );
}
