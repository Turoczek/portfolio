import React, { FC, useContext } from "react";
import classNames from "classnames/bind";
import { Discord as DiscordIcon } from "@/assets/icons";
import { GlobalStateContext } from "@/providers/GlobalStateProvider";
import { useActor } from "@xstate/react";
import ReactPlayer from "react-player";
import Image from "next/image";
import styles from "./Discord.module.scss";
import { PageRow } from "../PageRow/PageRow";
import { Text } from "../Text/Text";
import discordPoke from "../../assets/discordPoke.png";
import discordLogs from "../../assets/discordLogs.png";

const cx = classNames.bind(styles);

export const Discord: FC = () => {
  const globalServices = useContext(GlobalStateContext);
  const { languageService } = globalServices;
  const [state] = useActor(languageService);

  const {
    description,
    subTitle,
    title,
    creatlingList,
    logChannel,
    pokeLooksLike,
    signingUp,
    seeGyazoContent,
  } = state.context.labels.discordPage;

  const toSeeMoreContent = (
    <div className={styles.gyazoWrapperNotDesktop}>
      <Text size="small" tag="p">
        {seeGyazoContent}
      </Text>
    </div>
  );

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
      <PageRow defaultPaddingTopBottom>
        <div className={styles.gyazoWrapperDesktop}>
          <div className={styles.gyazoElement}>
            <div className={styles.gyazoElementDescWrapper}>
              <Text size="normal">{creatlingList}</Text>
            </div>
            <ReactPlayer
              playing
              width="100%"
              height="100%"
              loop
              url="https://gyazo.com/22805101b75cae60822084b1d2b582d1.mp4"
            />
          </div>
          <div className={styles.gyazoElement}>
            <div className={styles.gyazoElementDescWrapper}>
              <Text size="normal">{signingUp}</Text>
            </div>
            <ReactPlayer
              playing
              width="100%"
              height="100%"
              loop
              url="https://gyazo.com/9f070976049a982a910bfa3b04b044a6.mp4"
            />
          </div>
          <div className={styles.gyazoElement}>
            <div className={styles.gyazoElementDescWrapper}>
              <Text size="normal">{pokeLooksLike}</Text>
            </div>
            <Image
              src={discordPoke}
              alt="Discord message 15 minutes before list starts"
              className={styles.image}
            />
            {toSeeMoreContent}
          </div>
          <div className={styles.gyazoElement}>
            <div className={styles.gyazoElementDescWrapper}>
              <Text size="normal">{logChannel}</Text>
            </div>
            {toSeeMoreContent}
            <Image
              src={discordLogs}
              alt="Discord channel with bot logs"
              className={styles.image}
            />
          </div>
        </div>
      </PageRow>
    </>
  );
};
