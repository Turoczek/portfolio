import classNames from "classnames";
import React, { FC, useEffect, useState } from "react";

import { ArrowTop } from "@/assets/icons";

import { useWindowHeight } from "@/utils/useWindowHeight";
import { ScrollToTopProps } from "./ScrollToTop.types";

import styles from "./ScrollToTop.module.scss";

const cx = classNames.bind(styles);

export const ScrollToTop: FC<ScrollToTopProps> = () => {
  const [isVisible, setIsVisible] = useState(false);
  const minHeight = 1 * useWindowHeight();

  const toggleVisibility = () => {
    if (window.scrollY > minHeight) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
  });

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className={styles.scrollToTopButtonContainer}>
      <button
        type="button"
        onClick={scrollUp}
        aria-label="scrollToTop"
        className={cx(styles.scrollToTopButton, isVisible ? styles.toggle : "")}
      >
        <ArrowTop />
      </button>
    </div>
  );
};
