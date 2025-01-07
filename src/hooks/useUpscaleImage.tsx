import { useState } from 'react';

const useUpscaleImage = () => {
  const [resultImage, setResultImage] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const resetUpscale = () => {
    setResultImage(null);
    setError(null);
    setLoading(false);
  };

  const upscaleImage = async (image: File, scale: number) => {
    setLoading(true);
    setError(null);
    const formData = new FormData();
    formData.append('file', image);
    formData.append('upload_preset', import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET as string);
    formData.append('api_key', import.meta.env.VITE_CLOUDINARY_API_KEY as string);

    try {
      const uploadResponse = await fetch('https://api.cloudinary.com/v1_1/dpowqkadm/image/upload', {
        method: 'POST',
        body: formData,
      });
      const uploadData = await uploadResponse.json();
      const imageUrl = `https://res.cloudinary.com/dpowqkadm/image/upload/e_upscale:${scale}00/${uploadData.public_id}`;
      setResultImage(imageUrl);
    } catch (err) {
      setError('Error al escalar la imagen. Inténtalo nuevamente.');
    } finally {
      setLoading(false);
    }
  };

  return { resultImage, loading, error, upscaleImage, resetUpscale };
};

export default useUpscaleImage;