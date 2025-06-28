import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    debug: false,
    interpolation: {
      escapeValue: false,
    },
    resources: {
      en: {
        translation: {
          "min": "min",
          "max": "max",
          "Istanbul": "Istanbul",
          
            "weather": {
            "clear sky": "Clear sky",
            "few clouds": "Few clouds",
            "scattered clouds": "Scattered clouds",
            "broken clouds": "Broken clouds",
            "overcast clouds": "Overcast clouds",
            "light rain": "Light rain",
            "rain": "Rain",
            "heavy intensity rain": "Heavy rain",
            "thunderstorm": "Thunderstorm",
            "snow": "Snow",
            "mist": "Mist"
          }
      }
        },
      ar: {
  translation: {
    "min": "الحد الأدنى",
    "max": "الحد الأقصى",
    "Istanbul": "اسطنبول",
    "weather": {
      "clear sky": "سماء صافية",
      "few clouds": "غيوم قليلة",
      "scattered clouds": "غيوم متناثرة",
      "broken clouds": "غيوم متقطعة",
      "overcast clouds": "غيوم كثيفة",
      "light rain": "أمطار خفيفة",
      "rain": "ممطر",
      "heavy intensity rain": "أمطار غزيرة",
      "thunderstorm": "عاصفة رعدية",
      "snow": "ثلوج",
      "mist": "ضباب"
    }
  }
}
    }});

export default i18n;