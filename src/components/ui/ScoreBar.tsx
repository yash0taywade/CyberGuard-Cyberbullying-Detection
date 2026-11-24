"use client";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { motion } from "framer-motion";

interface ScoreBarProps {
  value: number; // 0 to 1
  label?: string;
  delay?: number;
}

function getColor(value: number): string {
  if (value < 0.3) return "#22c55e";
  if (value < 0.6) return "#f59e0b";
  return "#ef4444";
}

export default function ScoreBar({ value, label, delay = 0 }: ScoreBarProps) {
  const percent = Math.round(value * 100);
  const color = getColor(value);

  return (
    <Box>
      <Box sx={{ display: "flex", justifyContent: "space-between", mb: 0.75 }}>
        {label && (
          <Typography variant="caption" color="text.secondary">
            {label}
          </Typography>
        )}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: delay + 0.6 }}
          style={{ marginLeft: "auto" }}
        >
          <Typography
            variant="caption"
            fontWeight={700}
            sx={{ color }}
          >
            {percent}%
          </Typography>
        </motion.div>
      </Box>

      <Box
        sx={{
          height: 9,
          borderRadius: 5,
          bgcolor: "#f1f5f9",
          overflow: "hidden",
          position: "relative",
        }}
      >
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${percent}%` }}
          transition={{ duration: 0.9, ease: "easeOut", delay }}
          style={{
            height: "100%",
            borderRadius: 10,
            backgroundColor: color,
            position: "relative",
          }}
        >
          {/* Shimmer overlay */}
          <motion.div
            animate={{ x: ["-100%", "200%"] }}
            transition={{
              duration: 1.2,
              delay: delay + 0.2,
              ease: "easeInOut",
            }}
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)",
              borderRadius: 10,
            }}
          />
        </motion.div>
      </Box>
    </Box>
  );
}
