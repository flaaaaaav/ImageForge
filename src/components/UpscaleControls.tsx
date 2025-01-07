import React, { useEffect, useState } from 'react';
import { Box, Typography, Card, CardContent, CardMedia, FormControl, InputLabel, Select, MenuItem, Button, SelectChangeEvent } from '@mui/material';
import useUpscaleImage from '../hooks/useUpscaleImage';
import UpscaleComparison from './UpscaleComparison'; 
import UploadButton from './UploadButton';

const UpscaleControls: React.FC = () => {
  const [scale, setScale] = useState('x2');
  const { resultImage, loading, error, upscaleImage } = useUpscaleImage();
  const [upscaledImageUrl, setUpscaledImageUrl] = useState<string | null>(null);
  const [uploadedImageUrl, setUploadedImageUrl] = useState<string | null>(localStorage.getItem('uploadedImageUrl'));

  const handleScaleChange = (event: SelectChangeEvent) => {
    setScale(event.target.value);
  };

  const handleUpscale = () => {
    if (uploadedImageUrl) {
      fetch(uploadedImageUrl)
        .then(response => response.blob())
        .then(blob => {
          const imageFile = new File([blob], 'image.jpg', { type: 'image/jpeg' });
          upscaleImage(imageFile, parseInt(scale.replace('x', '')));
        })
        .catch(err => console.error("Error al obtener la imagen:", err));
    }
  };

  useEffect(() => {
    if (resultImage) {
      setUpscaledImageUrl(resultImage);
    }
  }, [resultImage]);

  return (
    <Box sx={{ display: "flex", flexDirection: { lg: "row", xs: "column" }, bgcolor: "#ececec", borderRadius: "16px" }}>
      <Box sx={{bgColor: "red"}}>
      <Card sx={{ maxWidth: { lg: "320px" }, margin: "2rem", bgcolor: "transparent", boxShadow: "none" }}>
        <Typography variant="body1" fontWeight={600} component="div" sx={{ marginBottom: 2, textAlign: "center" }}>
          Options
        </Typography>
        <CardMedia
          component="img"
          image={uploadedImageUrl || "https://thumbs.dreamstime.com/b/abstract-pink-square-background-21304053.jpg"}
          alt="Uploaded image"
          sx={{ height: 150, width: 150, margin: 'auto', marginTop: 2 }}
        />
        <CardContent>
          <FormControl size="small" fullWidth sx={{ marginBottom: 2 }}>
            <InputLabel id="scale-select-label">Scale factor</InputLabel>
            <Select
              labelId="scale-select-label"
              label="Scale factor"
              id="scale-select"
              value={scale}
              onChange={handleScaleChange}
            >
              <MenuItem value="x2">x2</MenuItem>
              <MenuItem value="x3">x3</MenuItem>
              <MenuItem value="x4">x4</MenuItem>
            </Select>
          </FormControl>
          <Box sx={{ display: 'flex', flexDirection: "column", gap: 2 }}>
            <Button
              variant="contained"
              sx={{ bgcolor: "text.secondary", boxShadow: "none", borderRadius: "16px", fontWeight: "bold" }}
              onClick={handleUpscale}
              disabled={loading || !uploadedImageUrl}
            >
              {loading ? "Upscaling..." : "Upscale!"}
            </Button>
            <UploadButton />
          </Box>
        </CardContent>
      </Card>
      </Box>
      <Box sx={{ margin: "2rem" }}>
        <UpscaleComparison upscaledImageUrl={upscaledImageUrl} />
      </Box>
      {error && (
        <Typography variant="body2" color="error" sx={{ textAlign: 'center', marginTop: 2 }}>
          {error}
        </Typography>
      )}
    </Box>
  );
};

export default UpscaleControls;
