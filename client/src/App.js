import './App.css';
import Home from './pages/Home';
import NavBar from './components/NavBar'
import { ThemeProvider, createTheme, CssBaseline } from "@mui/material";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Analytics from './pages/Analytics';


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
        <Router>
        <NavBar />
          <Routes>
            <Route path='/' element={<Home />}/> 
            <Route path='/analytics' element={<Analytics />}/> 
          </Routes>
        </Router>
      </div>
    </ThemeProvider>
  );
}

export default App;
