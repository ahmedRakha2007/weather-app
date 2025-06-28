import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Stack, Box, Typography, Divider } from '@mui/material';
import { WiCloudy } from 'react-icons/wi';
import { useEffect, useState } from 'react';
import axios from "axios";
import moment from 'moment';
import 'moment/locale/ar';
import { useTranslation } from 'react-i18next';

const baseUrl = "https://api.openweathermap.org";

export default function WeatherCard({ isEnglish }) {
  const { t, i18n } = useTranslation();
  const [weather, setWeather] = useState({
    temp: null,
    maxTemp: null,
    minTemp: null,
    description: "",
    icon: ""
  });

  useEffect(() => {
    moment.locale(isEnglish ? 'en' : 'ar');
    i18n.changeLanguage(isEnglish ? 'en' : 'ar');
    getWeather();
  }, [isEnglish]);


  function getWeather() {
    axios.get(`${baseUrl}/data/2.5/weather?lat=41.0082&lon=28.9784&appid=9b840b432fe860ce60c46d8a71f33c23`)
      .then((res) => {
        const temp = Math.round(res.data.main.temp - 273.15);
        const maxTemp = Math.round(res.data.main.temp_max - 273.15);
        const minTemp = Math.round(res.data.main.temp_min - 273.15);
        const description = res.data.weather[0].description;
        const weatherIcon = res.data.weather[0].icon;
        const iconUrl = `https://openweathermap.org/img/wn/${weatherIcon}@2x.png`;
        setWeather({
          temp: temp,
          maxTemp: maxTemp,
          minTemp: minTemp,
          description: description,
          icon: iconUrl
        });
      }).catch((err) => {
        console.error(err);
      });
  }

  return (
    <Card style={{ 
      minWidth: 275, 
      borderRadius: "25px", 
      backgroundColor: "#1A2E35",
    }}>
      <CardContent>
        <div dir={isEnglish ? "ltr" : "rtl"} style={{ color: "white", display: "flex", flexWrap: "wrap", alignItems: "end", justifyContent: "center", gap: 15 }}>
          <Typography variant='h1' sx={{ fontWeight: "600",
              fontSize: {
                  xs: '4.5rem',
                  sm: '5rem',  
                  md: '5rem',    
                  lg: '5rem'     
                },
             }}>
            {t("Istanbul")}
          </Typography>
          <Typography variant='h6' sx={{ fontWeight: "300", marginTop: {xs: '-15px'} }}>
            {moment().format('MMMM Do YYYY')}
          </Typography>
        </div>
        
        <Divider style={{ margin: "16px 0", backgroundColor: 'rgba(255,255,255,0.2)' }} />
        
        <div dir={isEnglish? "ltr" : "rtl"} style={{ padding: 0 , display: "flex", justifyContent: "space-between", alignItems: "center"}}>
          <Box sx={{width: {xs: "100%"}, gap: 1 , height: '100%', marginLeft: "40px", marginRight: "20px", display: "flex", flexDirection: "column" , alignItems: {xs: "center", sm: "start"}, justifyContent: "center" }}>
            <Stack direction="row">
              <Typography 
                variant="h1" 
                style={{ 
                  color: "white", 
                  fontSize: "130px",
                  lineHeight: 1,
                  fontWeight: "300"
                }}
              >
                {weather.temp}
              </Typography>
              <img src={weather.icon} alt="icon" style={{ width: "90px", height: "90px" }}/>
            </Stack>

            <Box sx={{display: "flex", justifyContent: {xs: "center", sm: "start"}, marginRight: {xs: "15px", sm: "0px"}}} style={{width: "100%", marginBottom: "15px"}}>
              <Typography variant="h6" style={{ color: "white", fontWeight: "300" }}>
                {t(`weather.${weather.description}`)}
              </Typography>
            </Box>
            
            <Box sx={{marginRight: {xs: "20px", sm: "0px" }, display: "flex", justifyContent: {xs: "center", sm: "start"}, alignItems: "center"}} style={{ width: "100%", color: "white", marginBottom: "5px", gap: 15}}>
              <div>{t("min")} : <span>{weather.minTemp}</span></div>
              <Divider orientation='vertical' flexItem style={{ borderRightWidth: "1px", height: 24, borderColor: "white" }} />
              <div>{t("max")} :  <span>{weather.maxTemp}</span></div>
            </Box>
          </Box>

          <Stack  sx={{display: {xs: "none", sm: "flex"}, justifyContent: "center", alignItems: "center"}}>
            <img src="/assets/cloud_9421022.png" alt="cloud-img" style={{width: "210px", height: "210px"}}/>
          </Stack>
        </div>
      </CardContent>
    </Card>
  );
} 