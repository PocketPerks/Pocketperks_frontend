import React from "react";
import { Box, Grid, Typography, Link, IconButton } from "@mui/material";
import { Facebook, Twitter, Instagram, YouTube, LinkedIn } from "@mui/icons-material";

export default function Footer() {
  return (
    <Box sx={{ backgroundColor: "#555", color: "#fff", pt: 5, pb: 3, mt: 5 }}>
      <Grid container spacing={4} sx={{ px: { xs: 2, md: 10 } }}>
        
        {/* About */}
        <Grid item xs={6} md={2}>
          <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
            About Quickcomm
          </Typography>
          <Link href="#" color="inherit" underline="hover" display="block">About Us</Link>
          <Link href="#" color="inherit" underline="hover" display="block">Press</Link>
          <Link href="#" color="inherit" underline="hover" display="block">Blog</Link>
          <Link href="#" color="inherit" underline="hover" display="block">Testimonials</Link>
        </Grid>

        {/* Useful Reads */}
        <Grid item xs={6} md={2}>
          <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
            Useful Reads
          </Typography>
          <Link href="#" color="inherit" underline="hover" display="block">Terms & Conditions</Link>
          <Link href="#" color="inherit" underline="hover" display="block">Privacy & Cookie Policy</Link>
          <Link href="#" color="inherit" underline="hover" display="block">Anti-Spam Policy</Link>
        </Grid>

        {/* Special Pages */}
        <Grid item xs={6} md={2}>
          <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
            Special Pages
          </Typography>
          <Link href="#" color="inherit" underline="hover" display="block">Refer and Earn</Link>
          <Link href="#" color="inherit" underline="hover" display="block">Careers</Link>
          <Link href="#" color="inherit" underline="hover" display="block">Become our Partner</Link>
        </Grid>

        {/* Connect */}
        <Grid item xs={6} md={2}>
          <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
            Connect With Us
          </Typography>
          <Link href="#" color="inherit" underline="hover" display="block">Help</Link>
          <Link href="#" color="inherit" underline="hover" display="block">Contact Us</Link>
        </Grid>

        {/* Social + App */}
        <Grid item xs={12} md={4}>
          <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
            Let's Get Social
          </Typography>
          <Box>
            <IconButton color="inherit"><Facebook /></IconButton>
            <IconButton color="inherit"><Twitter /></IconButton>
            <IconButton color="inherit"><Instagram /></IconButton>
            <IconButton color="inherit"><YouTube /></IconButton>
            <IconButton color="inherit"><LinkedIn /></IconButton>
          </Box>
          <Typography variant="subtitle1" fontWeight="bold" gutterBottom sx={{ mt: 2 }}>
            Download App
          </Typography>
          <Box sx={{ display: "flex", gap: 1 }}>
            <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Google Play" height="40" />
            <img src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg" alt="App Store" height="40" />
          </Box>
        </Grid>
      </Grid>

      {/* Bottom Bar */}
      <Box sx={{ textAlign: "center", mt: 4, borderTop: "1px solid #777", pt: 2 }}>
        <Typography variant="body2">
          © {new Date().getFullYear()} Quickcomm Ltd. All Rights Reserved.
        </Typography>
      </Box>
    </Box>
  );
}
