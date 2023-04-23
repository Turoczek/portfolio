import React, { FC } from "react";
import classNames from "classnames/bind";
import { Discord as DiscordIcon } from "@/assets/icons";
import styles from "./Discord.module.scss";
import { PageRow } from "../PageRow/PageRow";
import { Text } from "../Text/Text";

const cx = classNames.bind(styles);

export const Discord: FC = () => {
  return (
    <>
      <PageRow>
        <div className={cx(styles.wrapper)}>
          <div className={cx(styles.introWrapper)}>
            <Text tag="h1" size="xlarge">
              Discord Bot for Tibia community
            </Text>
          </div>
          <div className={cx(styles.secondIntroWrapper)}>
            <Text tag="h2" size="large">
              I have developed Bot using discord.js <br />
              which is based on Node.
            </Text>
          </div>
          <div className={styles.discordIconWrapper}>
            <DiscordIcon className={styles.icon} />
          </div>
        </div>
      </PageRow>

      <PageRow inverted defaultPaddingTopBottom>
        <Text size="normal" tag="h3">
          My bot has made the game much easier for Tibia players. None of the
          guild leaders has to make lists in the notepad himself. One of the
          leaders needs to create a list then players are able to automatically
          sign up for bosses. Some features that I have implemented so far:
          <br />- leaders are able to kick players from lists, <br /> - each
          player is poked 15 minutes before the list starts, <br />- bot
          calculates how many druids, knights, shooters are needed, <br /> - bot
          has log channel.
        </Text>
      </PageRow>
      <PageRow defaultPaddingTopBottom>TBC</PageRow>
    </>
  );
};
