"use client";

import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Link from "@mui/material/Link";
import { motion } from "framer-motion";

interface RecommendationPanelProps {
  isBullying: boolean;
}

const STEPS = [
  { icon: "📸", text: "Don't respond immediately — take a screenshot as evidence first." },
  { icon: "🚫", text: "Block the sender on the platform to prevent further contact." },
  { icon: "🚩", text: "Report the content to the platform's moderation team." },
  { icon: "🗣️", text: "Talk to a trusted adult, friend, teacher, or counselor." },
  { icon: "⚖️", text: "File a cybercrime complaint at cybercrime.gov.in if needed." },
];

const SAFE_TIPS = [
  { icon: "🧠", text: "Think before you post — words online have real impact." },
  { icon: "🤝", text: "Treat everyone with the same respect you'd want in return." },
  { icon: "🔒", text: "Keep personal information private on public platforms." },
  { icon: "📣", text: "Speak up and support others who face online harassment." },
];

const HELPLINES = [
  { name: "iCall (TISS)", number: "9152987821", desc: "Mon–Sat, 8am–10pm" },
  { name: "Vandrevala Foundation", number: "1860-2662-345", desc: "24/7" },
  { name: "NIMHANS", number: "080-46110007", desc: "Mental health support" },
  { name: "Childline", number: "1098", desc: "For children under 18" },
  { name: "Cyber Crime Portal", number: "cybercrime.gov.in", desc: "Online complaint", isLink: true },
];

export default function RecommendationPanel({ isBullying }: RecommendationPanelProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" as const, delay: 0.15 }}
    >
      <Card
        variant="outlined"
        sx={{
          borderRadius: 3,
          mt: 3,
          borderColor: isBullying ? "#fca5a5" : "#86efac",
          background: isBullying
            ? "linear-gradient(135deg, #fff5f5 0%, #fff1f2 100%)"
            : "linear-gradient(135deg, #f0fdf4 0%, #f0fdf4 100%)",
        }}
      >
        <CardContent sx={{ p: 3 }}>
          {isBullying ? (
            <>
              {/* Bullying detected — action guide */}
              <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, mb: 2.5 }}>
                <Typography fontSize="2rem">🚨</Typography>
                <Box>
                  <Typography variant="h6" fontWeight={800} color="#991b1b">
                    What To Do Next
                  </Typography>
                  <Typography variant="body2" color="#b91c1c">
                    If you received or witnessed this message, here are the recommended steps:
                  </Typography>
                </Box>
              </Box>

              <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5, mb: 3 }}>
                {STEPS.map((step, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 + i * 0.08, duration: 0.35 }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "flex-start",
                        gap: 1.5,
                        p: 1.5,
                        borderRadius: 2,
                        bgcolor: "rgba(255,255,255,0.7)",
                        border: "1px solid #fecaca",
                      }}
                    >
                      <Box
                        sx={{
                          width: 28,
                          height: 28,
                          borderRadius: "50%",
                          bgcolor: "#dc2626",
                          color: "white",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          fontSize: "0.7rem",
                          fontWeight: 800,
                          flexShrink: 0,
                          mt: "1px",
                        }}
                      >
                        {i + 1}
                      </Box>
                      <Typography variant="body2" color="#7f1d1d" sx={{ lineHeight: 1.6 }}>
                        {step.text}
                      </Typography>
                    </Box>
                  </motion.div>
                ))}
              </Box>

              <Divider sx={{ borderColor: "#fecaca", mb: 2 }} />

              <Typography variant="subtitle2" fontWeight={700} color="#991b1b" mb={1.5}>
                📞 India Support Helplines
              </Typography>
              <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
                {HELPLINES.map((h) => (
                  <Box
                    key={h.name}
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      p: 1.25,
                      borderRadius: 2,
                      bgcolor: "rgba(255,255,255,0.7)",
                      border: "1px solid #fecaca",
                      flexWrap: "wrap",
                      gap: 0.5,
                    }}
                  >
                    <Box>
                      <Typography variant="caption" fontWeight={700} color="#991b1b">
                        {h.name}
                      </Typography>
                      <Typography variant="caption" color="text.secondary" display="block">
                        {h.desc}
                      </Typography>
                    </Box>
                    {h.isLink ? (
                      <Link
                        href={`https://${h.number}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        sx={{ fontSize: "0.8rem", fontWeight: 700, color: "#dc2626" }}
                      >
                        {h.number}
                      </Link>
                    ) : (
                      <Typography
                        variant="body2"
                        fontWeight={800}
                        sx={{ color: "#dc2626", fontFamily: "monospace" }}
                      >
                        {h.number}
                      </Typography>
                    )}
                  </Box>
                ))}
              </Box>
            </>
          ) : (
            <>
              {/* Safe content — positive reinforcement */}
              <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, mb: 2.5 }}>
                <Typography fontSize="2rem">✅</Typography>
                <Box>
                  <Typography variant="h6" fontWeight={800} color="#14532d">
                    All Clear — Content Is Safe
                  </Typography>
                  <Typography variant="body2" color="#166534">
                    No signs of cyberbullying or harmful content detected. Keep up the positive communication!
                  </Typography>
                </Box>
              </Box>

              <Typography variant="subtitle2" fontWeight={700} color="#166534" mb={1.5}>
                💡 Tips for Staying Safe Online
              </Typography>
              <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
                {SAFE_TIPS.map((tip, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + i * 0.07, duration: 0.3 }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: 1.5,
                        p: 1.25,
                        borderRadius: 2,
                        bgcolor: "rgba(255,255,255,0.7)",
                        border: "1px solid #86efac",
                      }}
                    >
                      <Typography fontSize="1.1rem">{tip.icon}</Typography>
                      <Typography variant="body2" color="#14532d" sx={{ lineHeight: 1.6 }}>
                        {tip.text}
                      </Typography>
                    </Box>
                  </motion.div>
                ))}
              </Box>
            </>
          )}
        </CardContent>
      </Card>
    </motion.div>
  );
}
