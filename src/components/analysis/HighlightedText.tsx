"use client";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

interface HighlightedTextProps {
  text: string;
  flaggedWords: string[];
}

interface Segment {
  text: string;
  highlighted: boolean;
}

function buildSegments(text: string, flaggedWords: string[]): Segment[] {
  const cleaned = flaggedWords.filter((w) => w.trim().length > 0);
  if (!cleaned.length) return [{ text, highlighted: false }];

  const escaped = cleaned.map((w) =>
    w.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
  );

  // Use word-boundary for single words, direct for phrases
  const patterns = escaped.map((e, i) =>
    flaggedWords[i].includes(" ") ? e : `\\b${e}\\b`
  );

  let pattern: RegExp;
  try {
    pattern = new RegExp(`(${patterns.join("|")})`, "gi");
  } catch {
    return [{ text, highlighted: false }];
  }

  const parts = text.split(pattern);
  const lowerFlagged = new Set(cleaned.map((w) => w.toLowerCase()));

  return parts
    .filter((p) => p.length > 0)
    .map((part) => ({
      text: part,
      highlighted: lowerFlagged.has(part.toLowerCase()),
    }));
}

export default function HighlightedText({
  text,
  flaggedWords,
}: HighlightedTextProps) {
  const segments = buildSegments(text, flaggedWords);
  const hasHighlights = segments.some((s) => s.highlighted);

  return (
    <Box>
      <Typography
        component="p"
        variant="body1"
        sx={{
          lineHeight: 1.9,
          fontSize: "0.95rem",
          color: "text.primary",
          whiteSpace: "pre-wrap",
          wordBreak: "break-word",
        }}
      >
        {segments.map((seg, i) =>
          seg.highlighted ? (
            <Box
              key={i}
              component="mark"
              sx={{
                backgroundColor: "#fee2e2",
                color: "#991b1b",
                borderRadius: "3px",
                px: "3px",
                py: "1px",
                fontWeight: 700,
                textDecoration: "underline",
                textDecorationColor: "#ef4444",
                textDecorationStyle: "wavy",
              }}
            >
              {seg.text}
            </Box>
          ) : (
            <span key={i}>{seg.text}</span>
          )
        )}
      </Typography>
      {!hasHighlights && flaggedWords.length === 0 && (
        <Typography variant="caption" color="success.main" sx={{ mt: 1, display: "block" }}>
          ✓ No specific toxic terms detected in this text.
        </Typography>
      )}
    </Box>
  );
}
