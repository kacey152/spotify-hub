import './App.css';
import Home from './pages/Home';
import NavBar from './components/NavBar'
import { ThemeProvider, createTheme, CssBaseline } from "@mui/material";

const theme = createTheme({
  typography: {
    fontFamily: 'Ubuntu, sans-serif',
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <CssBaseline />
        <NavBar />
        <Home />
      </div>
    </ThemeProvider>
  );
}

export default App;
