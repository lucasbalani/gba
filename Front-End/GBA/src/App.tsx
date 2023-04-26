import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import { grey } from "@mui/material/colors";
import { ptBR } from '@mui/material/locale';
import AppRouter from "./App-router";
import useThemeMode from "./hooks/theme-mode/use-theme";

function App() {

  // Theme Config
  const lightTheme = createTheme({
    palette: {
      mode: 'light',
      primary: {
        main: '#1D4C91',
        light: '#6F9BDE',
        dark: '#13315E',
        contrastText: '#fff',
      },
      secondary: {
        main: '#FDBF2C',
        light: '#FDD577',
        dark: '#E6BD1C',
        contrastText: '#000',
      },
      background: {
        default: grey[50]
      }
    }
  }, ptBR);

  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
      primary: {
        main: '#FF0000',
        light: '#6F9BDE',
        dark: '#13315E',
        contrastText: '#fff',
      },
      secondary: {
        main: '#FDBF2C',
        light: '#FDD577',
        dark: '#E6BD1C',
        contrastText: '#000',
      }
    }
  }, ptBR);

  const themeMode = useThemeMode();

  // const theme = themeMode === 'light' ? lightTheme : darkTheme;
  const theme = darkTheme;


  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppRouter />
    </ThemeProvider>
  )
}

export default App
