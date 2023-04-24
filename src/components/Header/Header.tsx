import React, { FC, useContext, useState, useEffect } from "react";
import Link from "next/link";
import { Logo } from "@/assets/icons";
import { GlobalStateContext } from "@/providers/GlobalStateProvider";
import { useActor } from "@xstate/react";
import classNames from "classnames/bind";
import { useRouter } from "next/router";
import styles from "./Header.module.scss";
import { Text } from "../Text/Text";
import { LanguageSwitcherButton } from "../LanguageSwitcherButton/LanguageSwitcherButton";

const cx = classNames.bind(styles);

export const Header: FC = () => {
  const router = useRouter();

  const globalServices = useContext(GlobalStateContext);
  const { languageService } = globalServices;
  const [state] = useActor(languageService);

  const [isBurgerOpen, setIsBurgerOpen] = useState(false);

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

  const handleToggle = () => {
    setIsBurgerOpen(!isBurgerOpen);
  };

  useEffect(() => {
    if (isBurgerOpen) setIsBurgerOpen(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router.asPath]);
  return (
    <div className={styles.wrapper}>
      <Link href="/" className={styles.logoWrapper}>
        <Logo
          className={cx(
            styles.icon,
            isBurgerOpen && styles.iconWithNavigationOpen
          )}
        />
      </Link>
      <nav>
        <ul
          className={cx(
            styles.navigation,
            isBurgerOpen && styles.navigationOpen
          )}
        >
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

        <button
          type="button"
          onClick={handleToggle}
          className={cx(styles.burger, isBurgerOpen && styles.burgerOpen)}
        >
          <span className={styles.burgerLine} />
          <span className={styles.burgerLine} />
          <span className={styles.burgerLine} />
        </button>
      </nav>
      <ul
        className={cx(
          styles.navigationRight,
          state.matches("active") && styles.navigationRightOpen
        )}
      >
        <li>
          <LanguageSwitcherButton />
        </li>
      </ul>
    </div>
  );
};
