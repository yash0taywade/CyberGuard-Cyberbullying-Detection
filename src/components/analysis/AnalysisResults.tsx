"use client";

import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Chip from "@mui/material/Chip";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import FlagIcon from "@mui/icons-material/Flag";
import TextSnippetIcon from "@mui/icons-material/TextSnippet";
import WarningAmberIcon from "@mui/icons-material/WarningAmber";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import PsychologyIcon from "@mui/icons-material/Psychology";
import ScoreBar from "@/components/ui/ScoreBar";
import SeverityBadge from "@/components/ui/SeverityBadge";
import ToxicityGauge from "@/components/ui/ToxicityGauge";
import HighlightedText from "@/components/analysis/HighlightedText";
import TranslateIcon from "@mui/icons-material/Translate";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import PrintIcon from "@mui/icons-material/Print";
import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import { useState } from "react";
import {
  AnalysisResult,
  PERSPECTIVE_ATTRIBUTES,
  ATTRIBUTE_LABELS,
  ATTRIBUTE_DESCRIPTIONS,
  ATTRIBUTE_ICONS,
  LANGUAGE_FLAGS,
  PerspectiveAttribute,
  getSentimentLabel,
  generateReport,
} from "@/types";
import { motion, type Variants } from "framer-motion";

interface AnalysisResultsProps {
  result: AnalysisResult;
}

const sectionAnim = (i: number) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: "easeOut" as const, delay: i * 0.12 },
});

const chipContainer: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06 } },
};

const chipItem: Variants = {
  hidden: { scale: 0.6, opacity: 0 },
  visible: { scale: 1, opacity: 1, transition: { type: "spring" as const, stiffness: 360, damping: 22 } },
};

function wordCount(text: string) {
  return text.trim().split(/\s+/).filter(Boolean).length;
}

export default function AnalysisResults({ result }: AnalysisResultsProps) {
  const {
    attributeScores,
    isBullying,
    cyberbullyingScore,
    overallScore,
    text,
    flaggedWords,
    contextAnalysis,
    detectedLanguages,
  } = result;
  const words = wordCount(text);
  const sentiment = getSentimentLabel(cyberbullyingScore);

  const [copied, setCopied] = useState(false);

  function handleCopy() {
    navigator.clipboard.writeText(generateReport(result)).then(() => {
      setCopied(true);
    });
  }

  function handlePrint() {
    window.print();
  }

  return (
    <Box sx={{ width: "100%", mt: 4 }}>

      {/* Action bar */}
      <motion.div {...sectionAnim(0)}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mb: 2,
            flexWrap: "wrap",
            gap: 1,
          }}
        >
          {/* Sentiment label */}
          <Box
            sx={{
              display: "inline-flex",
              alignItems: "center",
              gap: 1,
              px: 2,
              py: 0.75,
              borderRadius: 3,
              bgcolor: "#f8fafc",
              border: "1px solid #e2e8f0",
            }}
          >
            <Typography fontSize="1.2rem">{sentiment.emoji}</Typography>
            <Typography variant="body2" fontWeight={700} sx={{ color: sentiment.color }}>
              {sentiment.label}
            </Typography>
          </Box>

          {/* Copy + Print */}
          <Box sx={{ display: "flex", gap: 1 }}>
            <Button
              size="small"
              variant="outlined"
              startIcon={<ContentCopyIcon sx={{ fontSize: "15px !important" }} />}
              onClick={handleCopy}
              sx={{ textTransform: "none", fontSize: "0.75rem", borderRadius: 2, py: 0.5 }}
            >
              Copy Report
            </Button>
            <Button
              size="small"
              variant="outlined"
              startIcon={<PrintIcon sx={{ fontSize: "15px !important" }} />}
              onClick={handlePrint}
              sx={{ textTransform: "none", fontSize: "0.75rem", borderRadius: 2, py: 0.5 }}
            >
              Print
            </Button>
          </Box>
        </Box>
      </motion.div>

      {/* 1 – Verdict banner */}
      <motion.div {...sectionAnim(1)}>
        <motion.div
          animate={
            isBullying
              ? { boxShadow: ["0 0 0 0 rgba(239,68,68,0.4)", "0 0 0 16px rgba(239,68,68,0)", "0 0 0 0 rgba(239,68,68,0)"] }
              : {}
          }
          transition={{ duration: 1.8, repeat: isBullying ? 2 : 0, delay: 0.3 }}
          style={{ borderRadius: 16 }}
        >
          <Box
            sx={{
              borderRadius: 3,
              p: 3,
              mb: 3,
              display: "flex",
              alignItems: "center",
              gap: 2,
              background: isBullying
                ? "linear-gradient(135deg, #fee2e2 0%, #fecaca 100%)"
                : "linear-gradient(135deg, #dcfce7 0%, #bbf7d0 100%)",
              border: `2px solid ${isBullying ? "#fca5a5" : "#86efac"}`,
            }}
          >
            {isBullying ? (
              <motion.div
                animate={{ rotate: [0, -8, 8, -8, 0] }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <WarningAmberIcon sx={{ fontSize: 44, color: "#dc2626" }} />
              </motion.div>
            ) : (
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 300, delay: 0.3 }}
              >
                <CheckCircleOutlineIcon sx={{ fontSize: 44, color: "#16a34a" }} />
              </motion.div>
            )}
            <Box>
              <Typography
                variant="h5"
                fontWeight={800}
                sx={{ color: isBullying ? "#991b1b" : "#14532d" }}
              >
                {isBullying ? "⚠ Cyberbullying Detected" : "✓ Content Appears Safe"}
              </Typography>
              <Typography
                variant="body2"
                sx={{ color: isBullying ? "#b91c1c" : "#166534", mt: 0.25 }}
              >
                {isBullying
                  ? `Cyberbullying score: ${Math.round(cyberbullyingScore * 100)}% — This text shows signs of targeted harmful content.`
                  : `Cyberbullying score: ${Math.round(cyberbullyingScore * 100)}% — No significant cyberbullying indicators found.`}
              </Typography>
            </Box>
          </Box>
        </motion.div>
      </motion.div>

      {/* 2 – AI context analysis */}
      {contextAnalysis && (
        <motion.div {...sectionAnim(1)}>
          <Card
            variant="outlined"
            sx={{
              mb: 3,
              borderRadius: 3,
              borderColor: "#e0e7ff",
              background: "linear-gradient(135deg, #f0f4ff 0%, #faf5ff 100%)",
            }}
          >
            <CardContent sx={{ py: 2, px: 3 }}>
              <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 0.75 }}>
                <PsychologyIcon sx={{ fontSize: 18, color: "#6366f1" }} />
                <Typography variant="caption" fontWeight={700} color="#6366f1">
                  AI CONTEXT ANALYSIS
                </Typography>
              </Box>
              <Typography variant="body2" color="text.secondary" sx={{ fontStyle: "italic" }}>
                {contextAnalysis}
              </Typography>
            </CardContent>
          </Card>
        </motion.div>
      )}

      {/* 3 – Gauge + Stats */}
      <motion.div {...sectionAnim(2)}>
        <Grid container spacing={3} sx={{ mb: 3 }}>
          <Grid size={{ xs: 12, sm: 4 }}>
            <Card
              variant="outlined"
              sx={{
                borderRadius: 3,
                height: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                py: 3,
              }}
            >
              <ToxicityGauge score={cyberbullyingScore} />
            </Card>
          </Grid>

          <Grid size={{ xs: 12, sm: 8 }}>
            <Card variant="outlined" sx={{ borderRadius: 3, height: "100%" }}>
              <CardContent sx={{ p: 3 }}>
                <Typography variant="subtitle1" fontWeight={700} mb={2}>
                  Analysis Summary
                </Typography>
                <Grid container spacing={2}>
                  {[
                    { label: "Words", value: words, icon: "📝" },
                    { label: "Characters", value: text.length, icon: "🔤" },
                    {
                      label: "Flagged Terms",
                      value: flaggedWords.length,
                      icon: "🚩",
                      highlight: flaggedWords.length > 0,
                    },
                    {
                      label: "Toxicity",
                      value: `${Math.round(overallScore * 100)}%`,
                      icon: "📊",
                      highlight: overallScore >= 0.5,
                    },
                  ].map((stat, i) => (
                    <Grid key={stat.label} size={{ xs: 6 }}>
                      <motion.div
                        initial={{ opacity: 0, scale: 0.85 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.25 + i * 0.08, type: "spring", stiffness: 260 }}
                      >
                        <Box
                          sx={{
                            p: 1.5,
                            borderRadius: 2,
                            bgcolor: stat.highlight ? "#fff7ed" : "#f8fafc",
                            border: "1px solid",
                            borderColor: stat.highlight ? "#fed7aa" : "#e2e8f0",
                            textAlign: "center",
                          }}
                        >
                          <Typography fontSize="1.4rem">{stat.icon}</Typography>
                          <Typography
                            variant="h6"
                            fontWeight={800}
                            sx={{ color: stat.highlight ? "#c2410c" : "text.primary", lineHeight: 1.2 }}
                          >
                            {stat.value}
                          </Typography>
                          <Typography variant="caption" color="text.secondary">
                            {stat.label}
                          </Typography>
                        </Box>
                      </motion.div>
                    </Grid>
                  ))}
                </Grid>

                {/* Detected languages row */}
                {detectedLanguages.length > 0 && (
                  <Box sx={{ mt: 2, pt: 2, borderTop: "1px solid #f1f5f9" }}>
                    <Box sx={{ display: "flex", alignItems: "center", gap: 1, flexWrap: "wrap" }}>
                      <TranslateIcon sx={{ fontSize: 15, color: "#6366f1" }} />
                      <Typography variant="caption" color="text.secondary" fontWeight={600}>
                        Detected:
                      </Typography>
                      {detectedLanguages.map((lang) => (
                        <Chip
                          key={lang}
                          label={`${LANGUAGE_FLAGS[lang] ?? "🌐"} ${lang}`}
                          size="small"
                          sx={{
                            fontSize: "0.68rem",
                            height: 20,
                            bgcolor: "#ede9fe",
                            color: "#5b21b6",
                            border: "1px solid #c4b5fd",
                            fontWeight: 600,
                          }}
                        />
                      ))}
                    </Box>
                  </Box>
                )}
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </motion.div>

      {/* 4 – Flagged words */}
      <motion.div {...sectionAnim(3)}>
        <Card variant="outlined" sx={{ borderRadius: 3, mb: 3 }}>
          <CardContent sx={{ p: 3 }}>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 2 }}>
              <FlagIcon sx={{ color: flaggedWords.length > 0 ? "#ef4444" : "#94a3b8" }} />
              <Typography variant="subtitle1" fontWeight={700}>
                Flagged Terms
              </Typography>
              <Chip
                label={flaggedWords.length}
                size="small"
                color={flaggedWords.length > 0 ? "error" : "default"}
                sx={{ ml: "auto" }}
              />
            </Box>

            {flaggedWords.length > 0 ? (
              <motion.div
                variants={chipContainer}
                initial="hidden"
                animate="visible"
                style={{ display: "flex", flexWrap: "wrap", gap: 8 }}
              >
                {flaggedWords.map((word, i) => (
                  <motion.div key={`${word}-${i}`} variants={chipItem}>
                    <Chip
                      label={word}
                      size="medium"
                      sx={{
                        bgcolor: "#fee2e2",
                        color: "#991b1b",
                        fontWeight: 700,
                        border: "1px solid #fca5a5",
                        fontSize: "0.8rem",
                      }}
                    />
                  </motion.div>
                ))}
              </motion.div>
            ) : (
              <Typography variant="body2" color="text.secondary" sx={{ fontStyle: "italic" }}>
                No specific toxic terms were flagged in this text.
              </Typography>
            )}
          </CardContent>
        </Card>
      </motion.div>

      {/* 5 – Highlighted text */}
      <motion.div {...sectionAnim(4)}>
        <Card variant="outlined" sx={{ borderRadius: 3, mb: 4 }}>
          <CardContent sx={{ p: 3 }}>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 2 }}>
              <TextSnippetIcon sx={{ color: "primary.main" }} />
              <Typography variant="subtitle1" fontWeight={700}>
                Analyzed Text
              </Typography>
              {flaggedWords.length > 0 && (
                <Chip
                  label="Red = flagged term"
                  size="small"
                  sx={{ ml: "auto", bgcolor: "#fee2e2", color: "#991b1b", fontSize: "0.7rem" }}
                />
              )}
            </Box>
            <Divider sx={{ mb: 2 }} />
            <HighlightedText text={text} flaggedWords={flaggedWords} />
          </CardContent>
        </Card>
      </motion.div>

      {/* 6 – Attribute breakdown */}
      <motion.div {...sectionAnim(5)}>
        <Typography variant="h6" fontWeight={700} mb={2}>
          Attribute Breakdown
        </Typography>
        <Grid container spacing={2}>
          {PERSPECTIVE_ATTRIBUTES.map((attr, cardIdx) => {
            const key = attr as PerspectiveAttribute;
            const score = attributeScores?.[key]?.summaryScore?.value ?? 0;

            return (
              <Grid key={attr} size={{ xs: 12, sm: 6 }}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 + cardIdx * 0.09, duration: 0.4 }}
                  whileHover={{ y: -3, transition: { duration: 0.2 } }}
                >
                  <Card
                    variant="outlined"
                    sx={{
                      borderRadius: 2,
                      height: "100%",
                      borderColor: score > 0.6 ? "#fca5a5" : score > 0.3 ? "#fde68a" : "#e2e8f0",
                      cursor: "default",
                    }}
                  >
                    <CardContent>
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                          mb: 1.5,
                        }}
                      >
                        <Box sx={{ display: "flex", alignItems: "center", gap: 0.75 }}>
                          <Typography fontSize="1.1rem">{ATTRIBUTE_ICONS[key]}</Typography>
                          <Typography variant="subtitle2" fontWeight={700}>
                            {ATTRIBUTE_LABELS[key]}
                          </Typography>
                          <Tooltip title={ATTRIBUTE_DESCRIPTIONS[key]} arrow>
                            <InfoOutlinedIcon
                              sx={{ fontSize: 14, color: "text.secondary", cursor: "help" }}
                            />
                          </Tooltip>
                        </Box>
                        <SeverityBadge score={score} />
                      </Box>
                      <Divider sx={{ mb: 1.5 }} />
                      <ScoreBar value={score} delay={0.7 + cardIdx * 0.09} />
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            );
          })}
        </Grid>
      </motion.div>

      <motion.div {...sectionAnim(6)}>
        <Box mt={3} p={2} sx={{ bgcolor: "#f8fafc", borderRadius: 2, border: "1px solid #e2e8f0" }}>
          <Typography variant="caption" color="text.secondary">
            Analysis powered by <strong>OpenAI GPT</strong> with context-aware multilingual scoring. Results are
            probabilistic — use alongside human judgment.
          </Typography>
        </Box>
      </motion.div>

      <Snackbar
        open={copied}
        autoHideDuration={2500}
        onClose={() => setCopied(false)}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert severity="success" variant="filled" sx={{ borderRadius: 2 }}>
          Report copied to clipboard!
        </Alert>
      </Snackbar>
    </Box>
  );
}
