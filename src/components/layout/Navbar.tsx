"use client";

import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import ShieldIcon from "@mui/icons-material/Shield";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Analyze", href: "/analyze" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <AppBar
      position="sticky"
      elevation={0}
      sx={{
        background: "linear-gradient(90deg, #1e1b4b 0%, #312e81 100%)",
        borderBottom: "1px solid rgba(255,255,255,0.08)",
      }}
    >
      <Toolbar
        sx={{
          maxWidth: 1200,
          width: "100%",
          mx: "auto",
          px: { xs: 2, sm: 3 },
        }}
      >
        <Box
          component={Link}
          href="/"
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1,
            flexGrow: 1,
            textDecoration: "none",
          }}
        >
          <ShieldIcon sx={{ color: "#818cf8", fontSize: 26 }} />
          <Typography
            variant="h6"
            fontWeight={800}
            sx={{ color: "white", letterSpacing: "-0.5px" }}
          >
            CyberGuard
          </Typography>
        </Box>
        <Box sx={{ display: "flex", gap: 1 }}>
          {navLinks.map((link) => (
            <Button
              key={link.href}
              component={Link}
              href={link.href}
              variant={pathname === link.href ? "contained" : "text"}
              size="small"
              sx={{
                fontWeight: 600,
                textTransform: "none",
                color: pathname === link.href ? undefined : "rgba(255,255,255,0.75)",
                bgcolor:
                  pathname === link.href ? "#4f46e5" : "transparent",
                "&:hover": {
                  bgcolor:
                    pathname === link.href
                      ? "#4338ca"
                      : "rgba(255,255,255,0.08)",
                  color: "white",
                },
              }}
            >
              {link.label}
            </Button>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
}
