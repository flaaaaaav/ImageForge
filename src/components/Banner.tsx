import React from "react";
import { Typography, Box } from "@mui/material";
import UploadButton from "./UploadButton";

const Banner: React.FC = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", lg: "row" },
        marginTop: "120px",
        maxWidth: "1200px",
        padding: "0 48px",
        color: "white",
        gap: 4,  
      }}
    >
      <Box
        sx={{
          
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          textAlign: { xs: "center", lg: "left" },
          
        }}
      >
        <Typography 
          variant="h4" 
          fontWeight={600} 
          fontSize={48} 
          gutterBottom 
          sx={{ color: "text.primary" }}
        >
          Enhance and upscale your images for{" "}
          <Typography 
            component="span" 
            variant="h4" 
            fontWeight={600} 
            fontSize={48} 
            sx={{ color: "text.secondary", textTransform: "uppercase" }}
          >
            FREE
          </Typography>
        </Typography>
        <Typography 
          variant="subtitle1" 
          sx={{ color: "text.primary", mt: 1 }}
        >
          We use AI to upscale your low-resolution images.
          <br />
          No login required!
        </Typography>
        <UploadButton />
      </Box>

      <Box 
        sx={{
          display: "flex", 
          justifyContent: "center", 
          alignItems: "center", 
        }}
      >
        <img
          src="./comparison2.png" 
          alt="Example Image"
          style={{
            maxWidth: "100%",
            height: "auto",
            borderRadius: "8px",
          }}
        />
      </Box>
    </Box>
  );
};

export default Banner;
