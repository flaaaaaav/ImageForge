import { createTheme, ThemeProvider, CssBaseline, GlobalStyles } from '@mui/material';
import Navbar from './components/navbar';
import AppRoutes from './routes/Routes';
import Footer from './components/Footer';

const theme = createTheme({
  palette: {
    background: {
      default: '#1c3953',
    },
    text: {
      primary: '#1E201E',
      secondary: '#a59bec',
    },
    primary: {
      main: '#1E201E',
    },
    secondary: {
      main: '#eeeeee',
    },
  },
  typography: {
    fontFamily: '"Poppins", sans-serif',
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <GlobalStyles
        styles={{
          body: {
            
            backgroundColor: '#fff',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            margin: 0,
            fontFamily: '"Poppins", sans-serif',
            display: 'flex',
            justifyContent: 'center',
            placeItems: 'center',


          },
        }}
      />
      <Navbar />
  <AppRoutes />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
