// components/NotFound.tsx
import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const NotFound: React.FC = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      height="100vh"
      textAlign="center"
      padding={2}
    >
      <Typography variant="h1" color="textSecondary" fontWeight={600} >
        404
      </Typography>
      <Typography variant="h5" gutterBottom>
        Page not found.
      </Typography>
      <Typography variant="body1" color="textPrimary" marginBottom={4}>
      Sorry, we couldn't find the page you were looking for. <br/> It may have moved or the web address you entered was incorrect.
      </Typography>
      <Button
        variant="contained"
        color="primary"
        component={Link}
        to="/"
        sx={{ bgcolor: 'text.secondary', boxShadow: 'none', borderRadius: '16px', fontWeight: 'bold', padding: "8px 50px" }}

      >
        Home
      </Button>
    </Box>
  );
};

export default NotFound;
