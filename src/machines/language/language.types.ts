interface errors {
  wentWrong: string;
}

export interface LanguageOptions {
  labels: Labels;
  options: {
    lang: LanguageTypes;
  };
}

export interface Labels {
  aboutMe: string;
  title: string;
  discordBot: string;
  skills: string;
  languages: string;
  exp: string;
  back: string;
  errors: errors;
}

export type LanguageTypes = "en" | "pl";
