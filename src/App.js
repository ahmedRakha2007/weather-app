import './App.css';
import { createTheme, Stack, ThemeProvider, Typography } from '@mui/material';
// MATERIAL UI COMPONENTS
import {Container} from '@mui/material';
import WeatherCard from './components/WeatherCard';
import { useState } from 'react';
//.......CUSTOM THEME.......//
const theme = createTheme({
  typography: {
    fontFamily: ["IBM"]
  }
})
//.....CUSTOM THEME...//
function App() {
  const[isEnglish, setIsEnglish] = useState(true)
  return (
  <>
  <ThemeProvider theme={theme}>
    <Container maxWidth="sm" sx={{height: "100vh"}}>
      <Stack justifyContent="center" sx={{height: "100vh"}}>
      <WeatherCard  isEnglish = {isEnglish}/>
      <div  style={{width: "100%", marginTop: "20px", cursor: "pointer", display: "flex", justifyContent: "end"}} dir={isEnglish? "ltr": "rtl"}>
      <Typography onClick={()=>{setIsEnglish(!isEnglish)}} sx={{color: "white"}}>{isEnglish? "Arabic": "انجليزي"}</Typography>
      </div>
      </Stack>
    </Container>
  </ThemeProvider>
  </>
  );
}

export default App;
