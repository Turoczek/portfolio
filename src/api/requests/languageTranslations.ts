import { Labels } from "@/machines/language/language.types";

interface translationOptions {
  pl: Labels;
  en: Labels;
}

const translations: translationOptions = {
  pl: {
    aboutMe: "O mnie",
    title: "BartekPL",
    discordBot: "Discord bot",
    exp: "Doświadczenie",
    languages: "Języki",
    skills: "Skills",
    back: "Wróć",
    errors: {
      wentWrong: "Coś poszło nie tak, spróbuj później.",
    },
  },
  en: {
    aboutMe: "About me",
    title: "BartekEN",
    discordBot: "Discord bot",
    exp: "Experience",
    languages: "Languages",
    skills: "Skills",
    back: "Back",
    errors: {
      wentWrong: "Something went wrong, please try again later",
    },
  },
};

export const getTranslation = async (lang: "pl" | "en"): Promise<Labels> => {
  return new Promise((resolve) => {
    resolve(translations[lang]);
  });
};
