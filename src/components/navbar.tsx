import React, { useState } from "react";
import { AppBar, Toolbar, Typography, Box, Container, Dialog, DialogContent } from "@mui/material";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  const [isDialogOpen, setDialogOpen] = useState(false);

  const handleDialogOpen = () => setDialogOpen(true);
  const handleDialogClose = () => setDialogOpen(false);

  return (
    <>
      <AppBar
        position="fixed"
        color="default"
        sx={{
          mt: 1,
          minHeight: "64px",
          boxShadow: "none",
          backgroundImage: "none",
          backgroundColor: "inherit", 
        }}
      >
        <Container maxWidth="lg">
          <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
            <Typography variant="h6" component="div">
              <img
                src="./logo.png"
                alt="Logo"
                style={{ maxHeight: "20px" }}
              />
            </Typography>

            <Box sx={{ display: "flex", alignItems: "center", gap: 3 }}>
              <Link
                to="/"
                style={{
                  textDecoration: "none",
                  color: "inherit",
                  fontSize: "1rem",
                  fontWeight: 500,
                }}
              >
                Home
              </Link>
              <button
                onClick={handleDialogOpen}
                style={{
                  background: "none",
                  border: "none",
                  textDecoration: "none",
                  color: "inherit",
                  fontSize: "1rem",
                  fontWeight: 500,
                  cursor: "pointer",
                }}
              >
                About
              </button>

            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      <Dialog
        open={isDialogOpen}
        onClose={handleDialogClose}
        fullWidth
        maxWidth="sm"
        PaperProps={{
          style: {
            backdropFilter: "blur(8px)",
            backgroundColor: "rgba(255, 255, 255, 0.8)",
            borderRadius: "16px"
          },
        }}
      >
        <DialogContent sx={{textAlign: "center"}}>
        <Typography variant="h6" component="div">
              <img
                src="./logo.png"
                alt="Logo"
                style={{ maxHeight: "30px" }}
              />
            </Typography>
          
          <Typography variant="body1" sx={{margin: "1rem"}}>
          Web application for upscaling images using the Cloudinary API. The app is built with React styled with Material-UI for a modern and responsive user interface.

          <br/><br/>Check out the repository on GitHub           </Typography>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Navbar;
