import React from "react";
import { Box, Typography } from "@mui/material";

const Footer: React.FC = () => {
  return (
    <Box
      component="footer"
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        backgroundColor: "background.paper",
        color: "text.primary",
        padding: "16px",
        marginTop: "36px",
        borderTop: "1px solid",
        borderColor: "divider", 
      }}
    >
      <Typography variant="body2">
        © {new Date().getFullYear()} Flavio Salas. All rights reserved.
      </Typography>
    </Box>
  );
};

export default Footer;
