"use client";

import { Grid, Box, Typography, List, ListItem, ListItemText } from "@mui/material";

function Footer() {
  return (
    <Box component="footer" bgcolor="#045956ff" py={5} px={3}>
      <Grid container spacing={3} justifyContent="space-between">
        {/* Column 1: About */}
        <Grid item xs={12} md={4}>
          <Typography variant="h6" gutterBottom>
            About Us
          </Typography>
          <Typography variant="body2">
            We are a tech-driven company passionate about building AI-powered and scalable web apps that make your life easier.
          </Typography>
        </Grid>

        {/* Column 2: Quick Links */}
        <Grid item xs={12} md={4}>
          <Typography variant="h6" gutterBottom>
            Quick Links
          </Typography>
          <List>
            {["Home", "Services", "Contact", "Pricing"].map((text) => (
              <ListItem key={text} disablePadding>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
        </Grid>

        {/* Column 3: Contact */}
        <Grid item xs={12} md={4}>
          <Typography variant="h6" gutterBottom>
            Contact Us
          </Typography>
          <Typography variant="body2">Email: support@example.com</Typography>
          <Typography variant="body2">Phone: +92 300 1234567</Typography>
          <Typography variant="body2">Location: Lahore, Pakistan</Typography>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Footer;
