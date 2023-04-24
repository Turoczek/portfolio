import React, { FC, useContext } from "react";
import classNames from "classnames/bind";
import { Discord as DiscordIcon } from "@/assets/icons";
import { GlobalStateContext } from "@/providers/GlobalStateProvider";
import { useActor } from "@xstate/react";
import styles from "./Discord.module.scss";
import { PageRow } from "../PageRow/PageRow";
import { Text } from "../Text/Text";

const cx = classNames.bind(styles);

export const Discord: FC = () => {
  const globalServices = useContext(GlobalStateContext);
  const { languageService } = globalServices;
  const [state] = useActor(languageService);

  const { description, subTitle, title } = state.context.labels.discordPage;

  return (
    <>
      <PageRow>
        <div className={cx(styles.wrapper)}>
          <div className={cx(styles.introWrapper)}>
            <Text tag="h1" size="xlarge">
              {title}
            </Text>
          </div>
          <div className={cx(styles.secondIntroWrapper)}>
            <Text tag="h2" size="large">
              {subTitle}
            </Text>
          </div>
          <div className={styles.discordIconWrapper}>
            <DiscordIcon className={styles.icon} />
          </div>
        </div>
      </PageRow>

      <PageRow inverted defaultPaddingTopBottom>
        <Text size="normal" tag="h3">
          {description}
        </Text>
      </PageRow>
      <PageRow defaultPaddingTopBottom>TBC. SCREENS + DESC</PageRow>
    </>
  );
};
