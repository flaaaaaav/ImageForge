import React, { useState } from 'react';
import { Box, Typography, Card, SelectChangeEvent, CardContent, CardMedia, FormControl, InputLabel, Select, MenuItem, Button } from '@mui/material';
import UpscaleControls from '../components/UpscaleControls';
import UpscaleComparison from '../components/UpscaleComparison';

const Upscaler: React.FC = () => {
  const [scale, setScale] = React.useState('x2');
  const [upscaledImageUrl, setUpscaledImageUrl] = useState<string | null>(null);

  const handleScaleChange = (event: SelectChangeEvent) => {
    setScale(event.target.value);
  };

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
      <UpscaleControls />
    </Box>
  );
};

export default Upscaler;
