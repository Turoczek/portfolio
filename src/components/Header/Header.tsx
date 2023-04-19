import React, { FC, useContext } from "react";
import Link from "next/link";
import { Logo } from "@/assets/icons";
import { GlobalStateContext } from "@/providers/GlobalStateProvider";
import { useActor } from "@xstate/react";
import styles from "./Header.module.scss";
import { Text } from "../Text/Text";
import { LanguageSwitcherButton } from "../LanguageSwitcherButton/LanguageSwitcherButton";

export const Header: FC = () => {
  const globalServices = useContext(GlobalStateContext);
  const { languageService } = globalServices;
  const [state] = useActor(languageService);

  const { aboutMe, discordBot } = state.context.labels;

  const navItems = [
    {
      label: discordBot,
      url: "/discordbot",
    },
    {
      label: aboutMe,
      url: "/aboutme",
    },
  ];

  return (
    <div className={styles.wrapper}>
      <Link href="/" className={styles.logoWrapper}>
        <Logo className={styles.icon} />
      </Link>
      <nav>
        <ul className={styles.navigation}>
          {navItems.map((el, i) => {
            return (
              <li key={i} className={styles.navigationItem}>
                <Text size="small">
                  <Link href={el.url} className={styles.navigationLink}>
                    {el.label}
                  </Link>
                </Text>
              </li>
            );
          })}
        </ul>

        <button type="button" className={styles.burger}>
          <span className={styles.burgerLine} />
          <span className={styles.burgerLine} />
          <span className={styles.burgerLine} />
        </button>
      </nav>
      <ul className={styles.navigationRight}>
        <li>
          <LanguageSwitcherButton />
        </li>
      </ul>
    </div>
  );
};
