interface errors {
  wentWrong: string;
  inProgress: string;
}

export interface LanguageOptions {
  labels: Labels;
  options: {
    lang: LanguageTypes;
  };
}

export interface Labels {
  aboutMe: string;
  discordBot: string;
  discordPage: {
    title: string;
    subTitle: string;
    description: string;
    creatlingList: string;
    signingUp: string;
    pokeLooksLike: string;
    logChannel: string;
    seeGyazoContent: string;
  };
  startPage: {
    title: string;
    subTitle: string;
    description: string;
    skills: string;
    languages: string;
    exp: string;
    english: string;
    german: string;
  };
  back: string;
  errors: errors;
}

export type LanguageTypes = "en" | "pl";
