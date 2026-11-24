"use client";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Chip from "@mui/material/Chip";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ShieldIcon from "@mui/icons-material/Shield";
import Link from "next/link";
import { motion, useInView, type Variants } from "framer-motion";
import { useRef } from "react";

/* ─── data ─────────────────────────────────────────────── */
const STATS = [
  { value: "6", label: "Threat Categories" },
  { value: "AI", label: "Powered Detection" },
  { value: "100%", label: "Privacy Safe" },
  { value: "Free", label: "to Use" },
];

const FEATURES = [
  {
    icon: "🔍",
    title: "Multi-Attribute Analysis",
    desc: "Scans for toxicity, insults, threats, profanity, identity attacks, and severe content simultaneously.",
    color: "#ede9fe",
    border: "#c4b5fd",
  },
  {
    icon: "🚩",
    title: "Bad Word Highlighting",
    desc: "Pinpoints and highlights the exact toxic words and phrases with color-coded markers in your text.",
    color: "#fee2e2",
    border: "#fca5a5",
  },
  {
    icon: "🤖",
    title: "AI Context Analysis",
    desc: "GPT understands nuance — sarcasm, gaming slang, and reporting vs. actual bullying are handled correctly.",
    color: "#dbeafe",
    border: "#93c5fd",
  },
  {
    icon: "📊",
    title: "Visual Score Breakdown",
    desc: "Animated gauge, shimmer score bars, and severity badges make results easy to read at a glance.",
    color: "#fef9c3",
    border: "#fde047",
  },
  {
    icon: "🔒",
    title: "Privacy First",
    desc: "Text is processed server-side and never stored or logged. Each request is fully independent.",
    color: "#dcfce7",
    border: "#86efac",
  },
  {
    icon: "🎯",
    title: "Accurate Detection",
    desc: "Context-aware scoring with detailed rubrics calibrated for real cyberbullying scenarios.",
    color: "#ffedd5",
    border: "#fdba74",
  },
];

const STEPS = [
  { step: "01", title: "Paste Your Text", desc: "Enter any message, comment, post, or conversation into the analyzer." },
  { step: "02", title: "AI Analyzes It", desc: "Our AI examines the text across 6 toxicity dimensions in real time." },
  { step: "03", title: "Review Results", desc: "See the verdict, highlighted toxic words, score breakdown, and AI context analysis." },
];

const heroFade = (delay: number) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.55, ease: "easeOut" as const, delay },
});

/* ─── animation helpers ──────────────────────────────────── */
const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const staggerItem: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" as const } },
};

/* ─── sections ───────────────────────────────────────────── */
function FeaturesSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <Container maxWidth="lg" sx={{ py: { xs: 8, md: 12 } }}>
      <Box textAlign="center" mb={7}>
        <Chip label="Features" size="small" color="primary" sx={{ mb: 2, fontWeight: 600 }} />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Typography variant="h3" fontWeight={800} sx={{ letterSpacing: "-1px", mb: 1.5 }}>
            Everything you need to
            <br />
            detect cyberbullying
          </Typography>
          <Typography color="text.secondary" maxWidth={480} mx="auto">
            A complete analysis toolkit that goes far beyond simple keyword filtering.
          </Typography>
        </motion.div>
      </Box>

      <motion.div
        ref={ref}
        variants={stagger}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        <Grid container spacing={3}>
          {FEATURES.map((f) => (
            <Grid key={f.title} size={{ xs: 12, sm: 6, md: 4 }}>
              <motion.div variants={staggerItem} style={{ height: "100%" }}>
                <motion.div
                  whileHover={{ y: -6, boxShadow: "0 12px 28px rgba(0,0,0,0.10)" }}
                  transition={{ duration: 0.22 }}
                  style={{ height: "100%", borderRadius: 16 }}
                >
                  <Card
                    variant="outlined"
                    sx={{
                      borderRadius: 3,
                      height: "100%",
                      borderColor: f.border,
                      cursor: "default",
                    }}
                  >
                    <CardContent sx={{ p: 3 }}>
                      <Box
                        sx={{
                          width: 48,
                          height: 48,
                          borderRadius: 2,
                          bgcolor: f.color,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          fontSize: "1.5rem",
                          mb: 2,
                        }}
                      >
                        {f.icon}
                      </Box>
                      <Typography variant="subtitle1" fontWeight={700} mb={0.75}>
                        {f.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary" lineHeight={1.7}>
                        {f.desc}
                      </Typography>
                    </CardContent>
                  </Card>
                </motion.div>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </motion.div>
    </Container>
  );
}

function HowItWorksSection() {
  return (
    <Box sx={{ bgcolor: "#f8fafc", py: { xs: 8, md: 12 } }}>
      <Container maxWidth="md">
        <Box textAlign="center" mb={7}>
          <Chip label="How It Works" size="small" color="primary" sx={{ mb: 2, fontWeight: 600 }} />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Typography variant="h3" fontWeight={800} sx={{ letterSpacing: "-1px" }}>
              Three simple steps
            </Typography>
          </motion.div>
        </Box>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          <Grid container spacing={4}>
            {STEPS.map((s) => (
              <Grid key={s.step} size={{ xs: 12, sm: 4 }}>
                <motion.div variants={staggerItem}>
                  <Box sx={{ textAlign: "center" }}>
                    <motion.div
                      whileHover={{ scale: 1.08 }}
                      transition={{ type: "spring", stiffness: 300 }}
                      style={{ display: "inline-block", marginBottom: 16 }}
                    >
                      <Box
                        sx={{
                          width: 56,
                          height: 56,
                          borderRadius: "50%",
                          background: "linear-gradient(135deg, #4f46e5, #7c3aed)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          mx: "auto",
                        }}
                      >
                        <Typography variant="subtitle1" fontWeight={800} sx={{ color: "white" }}>
                          {s.step}
                        </Typography>
                      </Box>
                    </motion.div>
                    <Typography variant="h6" fontWeight={700} mb={1}>
                      {s.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" lineHeight={1.7}>
                      {s.desc}
                    </Typography>
                  </Box>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </motion.div>
      </Container>
    </Box>
  );
}

/* ─── page ───────────────────────────────────────────────── */
export default function HomePage() {
  return (
    <Box sx={{ bgcolor: "background.default" }}>
      {/* ── Hero ── */}
      <Box
        sx={{
          background: "linear-gradient(135deg, #1e1b4b 0%, #312e81 40%, #4f46e5 100%)",
          py: { xs: 12, md: 18 },
          px: 2,
          textAlign: "center",
          color: "white",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Floating blobs */}
        <motion.div
          animate={{ scale: [1, 1.15, 1], opacity: [0.15, 0.25, 0.15] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          style={{
            position: "absolute", width: 440, height: 440, borderRadius: "50%",
            background: "rgba(99,102,241,0.2)", top: -120, right: -100, pointerEvents: "none",
          }}
        />
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
          style={{
            position: "absolute", width: 320, height: 320, borderRadius: "50%",
            background: "rgba(139,92,246,0.2)", bottom: -80, left: -80, pointerEvents: "none",
          }}
        />

        <Container maxWidth="md" sx={{ position: "relative" }}>
          {/* Badge */}
          <motion.div {...heroFade(0)}>
            <Chip
              label="Powered by OpenAI GPT"
              size="small"
              sx={{
                bgcolor: "rgba(255,255,255,0.12)",
                color: "white",
                border: "1px solid rgba(255,255,255,0.25)",
                mb: 3,
                fontSize: "0.75rem",
                backdropFilter: "blur(8px)",
              }}
            />
          </motion.div>

          {/* Floating shield */}
          <motion.div {...heroFade(0.08)}>
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
              style={{ display: "inline-block", marginBottom: 20 }}
            >
              <Box
                sx={{
                  p: 2.5,
                  borderRadius: "50%",
                  background: "rgba(255,255,255,0.12)",
                  backdropFilter: "blur(12px)",
                  border: "1px solid rgba(255,255,255,0.2)",
                  display: "inline-flex",
                }}
              >
                <ShieldIcon sx={{ fontSize: 60, color: "white" }} />
              </Box>
            </motion.div>
          </motion.div>

          {/* Title */}
          <motion.div {...heroFade(0.18)}>
            <Typography
              variant="h1"
              fontWeight={900}
              sx={{ fontSize: { xs: "2.25rem", md: "3.5rem" }, mb: 2, letterSpacing: "-2px", lineHeight: 1.1 }}
            >
              Cyberbullying
              <br />
              Detection System
            </Typography>
          </motion.div>

          {/* Subtitle */}
          <motion.div {...heroFade(0.3)}>
            <Typography
              variant="h6"
              sx={{ opacity: 0.85, mb: 5, fontWeight: 400, maxWidth: 500, mx: "auto", lineHeight: 1.65 }}
            >
              Instantly detect toxic, harmful, and bullying content in any text
              using advanced AI analysis across 6 threat categories.
            </Typography>
          </motion.div>

          {/* CTA */}
          <motion.div {...heroFade(0.42)}>
            <motion.div
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              style={{ display: "inline-block" }}
            >
              <Button
                component={Link}
                href="/analyze"
                variant="contained"
                size="large"
                endIcon={<ArrowForwardIcon />}
                sx={{
                  bgcolor: "white",
                  color: "#4f46e5",
                  fontWeight: 800,
                  fontSize: "1rem",
                  px: 5,
                  py: 1.75,
                  borderRadius: 3,
                  textTransform: "none",
                  boxShadow: "0 8px 32px rgba(0,0,0,0.25)",
                }}
              >
                Start Analyzing Free
              </Button>
            </motion.div>
          </motion.div>
        </Container>
      </Box>

      {/* ── Stats Bar ── */}
      <Box sx={{ bgcolor: "#1e1b4b", py: 3 }}>
        <Container maxWidth="md">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <Grid container spacing={2} justifyContent="center">
              {STATS.map((s) => (
                <Grid key={s.label} size={{ xs: 6, sm: 3 }}>
                  <motion.div variants={staggerItem}>
                    <Box sx={{ textAlign: "center" }}>
                      <Typography
                        variant="h4"
                        fontWeight={900}
                        sx={{ color: "#818cf8", lineHeight: 1 }}
                      >
                        {s.value}
                      </Typography>
                      <Typography variant="caption" sx={{ color: "rgba(255,255,255,0.6)" }}>
                        {s.label}
                      </Typography>
                    </Box>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </motion.div>
        </Container>
      </Box>

      <FeaturesSection />
      <HowItWorksSection />

      {/* ── CTA ── */}
      <Box
        sx={{
          py: { xs: 10, md: 14 },
          px: 2,
          textAlign: "center",
          background: "linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%)",
          color: "white",
        }}
      >
        <Container maxWidth="sm">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
          >
            <Typography variant="h3" fontWeight={800} mb={2} sx={{ letterSpacing: "-1px" }}>
              Ready to analyze?
            </Typography>
            <Typography sx={{ opacity: 0.85, mb: 4, lineHeight: 1.7 }}>
              Paste any text and get a detailed AI-powered toxicity report in seconds.
            </Typography>
            <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }} style={{ display: "inline-block" }}>
              <Button
                component={Link}
                href="/analyze"
                variant="contained"
                size="large"
                endIcon={<ArrowForwardIcon />}
                sx={{
                  bgcolor: "white",
                  color: "#4f46e5",
                  fontWeight: 800,
                  px: 5,
                  py: 1.75,
                  borderRadius: 3,
                  textTransform: "none",
                  fontSize: "1rem",
                  "&:hover": { bgcolor: "#f8faff" },
                }}
              >
                Analyze Text Now
              </Button>
            </motion.div>
          </motion.div>
        </Container>
      </Box>

      {/* ── Footer ── */}
      <Box sx={{ bgcolor: "#0f0e1a", py: 4, textAlign: "center" }}>
        <Typography variant="caption" sx={{ color: "rgba(255,255,255,0.35)" }}>
          CyberGuard · Cyberbullying Detection System · Built with Next.js & OpenAI
        </Typography>
      </Box>
    </Box>
  );
}
