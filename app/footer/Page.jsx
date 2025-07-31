"use client";

import { Grid, Box, Typography, List, ListItem, ListItemText } from "@mui/material";

function Footer() {
  return (
    <Box bgcolor="#045956ff" ml={20}>
      <Grid spacing={2} justifyContent="space-between" display={'flex'}>
        {/* Column 1: About */}
        <Grid width={'33%'} >
          <Typography variant="h6" gutterBottom>
            About Us
          </Typography>
          <Typography variant="body2" >
            We are a tech-driven company passionate about building AI-powered and scalable web apps that make your life easier.
          </Typography>
        </Grid>

        {/* Column 2: Quick Links */}
        <Grid width={'33%'}>
          <Typography variant="h6" gutterBottom>
            Address
          </Typography>
          <Typography variant="body2">Near HBL Branch alamdar chowk skardu </Typography>
        </Grid>


        {/* Column 3: Contact */}
        <Grid width={'33%'}>
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
