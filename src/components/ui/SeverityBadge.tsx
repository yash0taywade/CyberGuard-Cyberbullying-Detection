"use client";

import Chip from "@mui/material/Chip";
import { motion } from "framer-motion";

interface SeverityBadgeProps {
  score: number; // 0 to 1
}

function getSeverity(score: number): {
  label: string;
  color: "success" | "warning" | "error";
} {
  if (score < 0.3) return { label: "Safe", color: "success" };
  if (score < 0.6) return { label: "Moderate", color: "warning" };
  return { label: "High Risk", color: "error" };
}

export default function SeverityBadge({ score }: SeverityBadgeProps) {
  const { label, color } = getSeverity(score);
  return (
    <motion.div
      initial={{ scale: 0.7, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ type: "spring", stiffness: 400, damping: 20 }}
    >
      <Chip label={label} color={color} size="small" variant="filled" />
    </motion.div>
  );
}
