import { LanguageTypes } from "@/machines/language/language.types";

export const getCurrentLanguage = (): LanguageTypes => {
  if (typeof window !== "undefined") {
    const item = localStorage.getItem("language");
    if (item) return item as LanguageTypes;
  }
  return "pl";
};
