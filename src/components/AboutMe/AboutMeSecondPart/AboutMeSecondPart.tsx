import React, { FC } from "react";
import classNames from "classnames/bind";
import { Text } from "@/components/Text/Text";
import styles from "./AboutMe.module.scss";

const cx = classNames.bind(styles);

export const AboutMeSecondPart: FC = () => {
  return (
    <div className={cx(styles.wrapper)}>
      <div className={cx(styles.introduction)}>
        <Text tag="h3">
          Odkąd pamiętam świat informatyki wzbudzał moje zainteresownie. W 2021
          ukończyłem studia I stopnia na kierunku Informatyka. Od tamtej pory
          rozwijam się zawodowo jako programista. Jestem osobą rzetelną,
          odpowiedzialną, lubiącą nowe wyzwania. W dzisiejszych czasach ciągły
          rozwój w dziedzinie IT stanowi klucz do osiągnięcia sukcesu.
        </Text>
      </div>
    </div>
  );
};
