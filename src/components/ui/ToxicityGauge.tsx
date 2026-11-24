"use client";

import { useEffect } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";

interface ToxicityGaugeProps {
  score: number; // 0 to 1
}

function getColor(score: number) {
  if (score < 0.3) return "#22c55e";
  if (score < 0.5) return "#f59e0b";
  return "#ef4444";
}

function getLabel(score: number) {
  if (score < 0.3) return "Safe";
  if (score < 0.5) return "Moderate";
  if (score < 0.75) return "High Risk";
  return "Severe";
}

export default function ToxicityGauge({ score }: ToxicityGaugeProps) {
  const radius = 72;
  const strokeWidth = 14;
  const normalizedRadius = radius - strokeWidth / 2;
  const circumference = 2 * Math.PI * normalizedRadius;
  const targetPct = Math.round(score * 100);
  const color = getColor(score);
  const label = getLabel(score);
  const size = radius * 2;

  // Animated count-up for the number
  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) => Math.round(v));

  useEffect(() => {
    const controls = animate(count, targetPct, {
      duration: 1.4,
      ease: "easeOut",
    });
    return controls.stop;
  }, [targetPct, count]);

  // Animated stroke offset
  const offset = circumference - (targetPct / 100) * circumference;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, ease: "backOut" }}
      style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 4 }}
    >
      <Box sx={{ position: "relative", width: size, height: size }}>
        <svg
          width={size}
          height={size}
          viewBox={`0 0 ${size} ${size}`}
          style={{ display: "block" }}
        >
          {/* Background track */}
          <circle
            cx={radius}
            cy={radius}
            r={normalizedRadius}
            fill="none"
            stroke="#f1f5f9"
            strokeWidth={strokeWidth}
          />
          {/* Animated progress arc */}
          <motion.circle
            cx={radius}
            cy={radius}
            r={normalizedRadius}
            fill="none"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeDasharray={circumference}
            initial={{ strokeDashoffset: circumference }}
            animate={{ strokeDashoffset: offset }}
            transition={{ duration: 1.4, ease: "easeOut" }}
            transform={`rotate(-90 ${radius} ${radius})`}
            style={{ transition: "stroke 0.4s ease" }}
          />
        </svg>

        {/* Center text */}
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typography
            variant="h3"
            fontWeight={900}
            sx={{ color, lineHeight: 1, fontSize: "2rem" }}
          >
            <motion.span>{rounded}</motion.span>%
          </Typography>
          <Typography variant="caption" color="text.secondary" fontWeight={500}>
            cyberbullying
          </Typography>
        </Box>
      </Box>

      <motion.div
        initial={{ opacity: 0, y: 4 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
      >
        <Typography variant="subtitle2" fontWeight={700} sx={{ color }}>
          {label}
        </Typography>
      </motion.div>
    </motion.div>
  );
}
