import { useState } from 'react';

const useImageUpload = () => {
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const uploadImage = async (image: File): Promise<string | null> => {
    setUploading(true);
    setError(null);

    const formData = new FormData();
    formData.append('file', image);
    formData.append('upload_preset', import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET as string);
    formData.append('api_key', import.meta.env.VITE_CLOUDINARY_API_KEY as string);


    try {
      const response = await fetch('https://api.cloudinary.com/v1_1/dpowqkadm/image/upload', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error('Error al subir la imagen');
      }

      const data = await response.json();
      const imageUrl = data.secure_url;
      return imageUrl;
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Error desconocido');
      return null;
    } finally {
      setUploading(false);
    }
  };

  return { uploadImage, uploading, error };
};

export default useImageUpload;
