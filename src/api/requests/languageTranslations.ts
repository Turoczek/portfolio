import { Labels } from "@/machines/language/language.types";

interface translationOptions {
  pl: Labels;
  en: Labels;
}

const translations: translationOptions = {
  pl: {
    aboutMe: "O mnie",
    discordBot: "Discord bot",
    calculator: "Kalkulator",
    back: "Wróć",
    errors: {
      wentWrong: "Coś poszło nie tak, spróbuj później.",
      inProgress: "Ta strona jest obecnie w przebudowie.",
    },
    startPage: {
      title: "Bartosz Trzonek, Frontend Developer.",
      subTitle:
        "Nowe wyzwania napędzają mnie do pracy. \n React i Node to moi ulubieńcy.",
      description:
        "Odkąd pamiętam świat informatyki wzbudzał moje zainteresownie. W 2021 ukończyłem studia I stopnia na kierunku Informatyka. Od tamtej pory rozwijam się zawodowo jako programista. Jestem osobą rzetelną, odpowiedzialną, lubiącą nowe wyzwania. W dzisiejszych czasach ciągły rozwój w dziedzinie IT stanowi klucz do osiągnięcia sukcesu.",
      exp: "Doświadczenie",
      languages: "Języki",
      skills: "Skills",
      english: "Angielski",
      german: "Niemiecki",
    },
    discordPage: {
      title: "Discord Bot dla Tibijskiej społeczności",
      subTitle:
        "Stworzyłem Bota używając discord.js, \n który bazuje na Node.js.",
      description:
        "Zrobiony przeze mnie bot stanowi duże usprawnienie dla Tibijskich graczy. Liderzy danej gildii nie muszą tworzyć samodzielnie list w notatniku. Wystarczy, że jeden lider stworzy listę, a potem gracze mogą automatycznie zapisywać się na bosy. Kilka funkcjonalności, które udało mi się zaimplementować: \n - liderzy mogą wyrzucić gracza z listy, \n - każdy gracz dostaje powiadomienie 15 minut przed startem listy, \n - bot wylicza dostępne miejsca dla każdej z profesji, \n - bot przechowuje logi.",
      creatlingList: "Tworzenie list",
      signingUp: "Zapisywanie się na liste",
      pokeLooksLike: "Jak wygląda przypomnienia",
      logChannel: "Kanał z logami",
      seeGyazoContent:
        "Aby zobaczyć jak działa wyżej wymieniona funkcjonalność proszę skorzystać z urządzenia o większym ekranie, ewentualnie zapraszam do prywatnego kontaktu, z chęcia opowiem więcej i zademonstruje działanie.",
    },
    calculatorPage: {
      decoder: "Dekoder",
      internet: "Internet",
      phoneSub: "Abonament telefoniczny",
      router: "Ruter",
      tv: "Telewizja",
      open: "Otwórz",
      selectYears: "Select years",
      close: "Close",
    },
  },
  en: {
    aboutMe: "About me",
    discordBot: "Discord bot",
    calculator: "Calculator",
    back: "Back",
    errors: {
      wentWrong: "Something went wrong, please try again later.",
      inProgress: "This page is currently being updated.",
    },
    startPage: {
      title: "Bartosz Trzonek, Frontend Developer.",
      subTitle:
        "New challenges drive me to work. \n React and Node are my favorites.",
      description:
        "Since I remember, the IT world has aroused my interest. In 2021, I graduated Bachelor's degree in IT. Since then, I have been developing as a programmer. I am a reliable, responsible person who likes new challenges. Nowadays, the continuous development of new technologies is part of the programmers' success story.",
      exp: "Experience",
      languages: "Languages",
      skills: "Skills",
      english: "English",
      german: "German",
    },
    discordPage: {
      title: "Discord Bot for Tibia community",
      subTitle:
        "I have implemented Bot using discord.js \n which is based on Node.js.",
      description:
        "My bot has made the game much easier for Tibia players. None of the guild leaders has to make lists in the notepad himself. One of the leaders needs to create a list then players are able to automatically sign up for bosses. Some features that I have implemented so far: \n  - leaders are able to kick players from lists, \n - each player is poked 15 minutes before the list starts, \n - bot calculates how many druids, knights, shooters are needed, \n - bot has log channel.",
      creatlingList: "Creating list",
      signingUp: "Signing up for list",
      pokeLooksLike: "How poke looks like",
      logChannel: "Log channel",
      seeGyazoContent:
        "To see how the above-mentioned functionality works, please use a device with a larger screen, or feel free to contact me privately, I will be happy to tell you more and demonstrate how it works.",
    },
    calculatorPage: {
      decoder: "Decoder",
      internet: "Internet",
      phoneSub: "Phone subscription",
      router: "Router",
      tv: "Television",
      open: "Open",
      selectYears: "Wybierz lata",
      close: "Zamknij",
    },
  },
};

export const getTranslation = async (lang: "pl" | "en"): Promise<Labels> => {
  return new Promise((resolve) => {
    resolve(translations[lang]);
  });
};
