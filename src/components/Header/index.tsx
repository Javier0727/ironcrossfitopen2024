import React from "react";
import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import Logo from "../../images/ironLogo.jpg";

const Header = () => {
  return (
    <AppBar sx={{ bgcolor: "#1A1A1A" }} position="static">
      <Toolbar>
        <Box mr={2} borderRadius="100%" width="3rem" height="3rem">
          <img
            src={Logo}
            alt="Logo"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              borderRadius: "100%",
            }}
            width={50}
            height={50}
          />
        </Box>
        <Typography variant="h6" component="div">
          Iron Crossfit - Open 2025
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
