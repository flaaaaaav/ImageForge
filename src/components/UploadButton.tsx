import React, { useState } from 'react';
import { Button, CircularProgress, Box, Typography, Stack, Dialog, DialogContent, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import useImageUpload from '../hooks/useImageUpload';
import useUpscaleImage from '../hooks/useUpscaleImage';

const UploadButton: React.FC = () => {
  const { uploadImage, uploading, error } = useImageUpload();
  const { upscaleImage, resultImage, loading: upscaleLoading, error: upscaleError, resetUpscale } = useUpscaleImage();  const [uploadedImageUrl, setUploadedImageUrl] = useState<string | null>(null);
  const [dialogOpen, setDialogOpen] = useState(false);

  const handleFileInputChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const image = event.target.files[0];
      console.log('Uploading image:', image);
      const imageUrl = await uploadImage(image);
      console.log('Image uploaded. URL:', imageUrl);
      if (imageUrl) {
        setUploadedImageUrl(imageUrl);
        setDialogOpen(true);
      }
    }
  };

  const handleCloseDialog = () => {
    console.log('Closing dialog');
    setDialogOpen(false);
    setUploadedImageUrl(null);
    resetUpscale();
    console.log('Uploaded image cleared.');
    console.log('Result image cleared.');
  };

  const handleUpscale = async () => {
    if (uploadedImageUrl) {
      console.log('Upscaling image with URL:', uploadedImageUrl);
      try {
        const response = await fetch(uploadedImageUrl);
        const blob = await response.blob();
        const file = new File([blob], 'image.jpg', { type: blob.type });
        await upscaleImage(file, 2); 
      } catch (error) {
        console.error('Error fetching image for upscale:', error);
      }
    }
  };

  const downloadUpscaledImage = async () => {
    if (resultImage) {
      try {
        const response = await fetch(resultImage);
        const blob = await response.blob();
        const url = URL.createObjectURL(blob);
  
        const link = document.createElement('a');
        link.href = url;
        link.download = 'upscaled-image.jpg'; 
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
  
        URL.revokeObjectURL(url);
      } catch (error) {
        console.error('Error downloading the upscaled image:', error);
      }
    }
  };

  return (
    <Box display="flex" flexDirection="column" gap={2} pt={2}>
      <input
        type="file"
        accept="image/*"
        id="upload-input"
        style={{ display: 'none' }}
        onChange={handleFileInputChange}
        disabled={uploading}
      />
      <label htmlFor="upload-input">
        <Button
          variant="contained"
          component="span"
          sx={{ bgcolor: 'text.secondary', boxShadow: 'none', borderRadius: '16px', fontWeight: 'bold' }}
          disabled={uploading}
        >
          <Stack direction="row" alignItems="center" spacing={1}>
            {uploading && <CircularProgress size={24} color="inherit" />}
            <span>{uploading ? 'Uploading...' : 'Upload Image'}</span>
          </Stack>
        </Button>
      </label>
      {error && (
        <Typography variant="body2" color="error">
          {error}
        </Typography>
      )}

      <Dialog
        open={dialogOpen}
        onClose={handleCloseDialog}
        fullScreen
        PaperProps={{
          sx: {
            background: 'rgba(255, 255, 255, 0.35)',
            backdropFilter: 'blur(8px)',
          },
        }}
      >
<DialogContent
  sx={{
    display: 'flex',
    flexDirection: { lg: 'row', xs: 'column' },
    alignItems: 'flex-start',
    margin: '0 auto',
    overflowY: "visible",
    justifyContent: 'center',
    gap: '4rem',
  }}
>          <IconButton
            onClick={handleCloseDialog}
            sx={{ position: 'absolute', top: 16, right: 16 }}
          >
            <CloseIcon />
          </IconButton>
          
          {uploadedImageUrl && (
            <>
            <Box sx={{display: "flex", flexDirection: "column", width: {lg: "400px"}, mt: "1rem", alignItems: "center", justifyContent: "flex-end"}}>
              <Typography variant="h6" fontWeight={600} sx={{width: "100%"}}>
                Original image
              </Typography>
              <Box
  component="img"
  src={uploadedImageUrl}
  alt="Uploaded"
  sx={{
    width: {
      xs: '80vw',
      lg: '400px'
    },
    height: {
      xs: 'auto',
      lg: '400px'
    },
    objectFit: "cover",
    borderRadius: '8px',
    mb: 3,
    mt: 1
  }}
/>
              <Button
                variant="contained"
                sx={{ bgcolor: 'primary.main', borderRadius: '16px', fontWeight: 'bold', px: 4, py: 1, width: "100%" }}
                onClick={handleUpscale}
                disabled={upscaleLoading}
              >
                {upscaleLoading ? 'Upscaling...' : 'Upscale Image'}
              </Button>

              {upscaleError && (
                <Typography variant="body2" color="error">
                  {upscaleError}
                </Typography>
              )}</Box>
              

              {resultImage && (
                <>
                <Box sx={{display: "flex", flexDirection: "column", width: {lg: "400px"}, mt: "1rem", alignItems: "center", justifyContent: "flex-end"}}>
                  <Typography variant="h6" fontWeight={600} sx={{width: "100%"}}>
                    Upscaled Image
                  </Typography>
                  <Box
  component="img"
  src={resultImage}
  alt="Uploaded"
  sx={{
    width: {
      xs: '80vw',
      lg: '400px'
    },
    height: {
      xs: 'auto',
      lg: '400px'
    },
    objectFit: "cover",
    borderRadius: '8px',
    mb: 3,
    mt: 1
  }}
/>
                  <Button
  variant="contained"
  sx={{ bgcolor: 'primary.main', borderRadius: '16px', fontWeight: 'bold', px: 4, py: 1, width: "100%" }}
  onClick={downloadUpscaledImage}
>
  Download
</Button>
</Box>
                </>
              )}
            </>
          )}
        </DialogContent>
      </Dialog>
    </Box>
  );
};

export default UploadButton;
