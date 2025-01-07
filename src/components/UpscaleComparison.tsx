import React from 'react';
import { Box, Typography } from '@mui/material';

interface UpscaleComparisonProps {
  upscaledImageUrl: string | null;
}

const UpscaleComparison: React.FC<UpscaleComparisonProps> = ({ upscaledImageUrl }) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "16px",
      }}
    >
      <Box
        sx={{
          height: { lg: "500px" },
          width: { lg: "800px", xs: "90vw" },
          bgcolor: "#ececec",
          borderRadius: "16px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          overflow: "hidden", 
        }}
      >
        {upscaledImageUrl ? (
          <img
            src={upscaledImageUrl}
            alt="Upscaled"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        ) : (
          <Typography variant='h4' fontWeight={600} textTransform="uppercase" sx={{ color: "text.secondary" }}>
            Waiting...
          </Typography>
        )}
      </Box>
    </Box>
  );
};

export default UpscaleComparison;
