import React, { FC, useContext } from "react";
import classNames from "classnames/bind";
import { GlobalStateContext } from "@/providers/GlobalStateProvider";
import { useActor } from "@xstate/react";
import { Box, Tools, Exp } from "@/assets/icons";
import { Text } from "@/components/Text/Text";
import styles from "./AboutMe.module.scss";

const cx = classNames.bind(styles);

const mySkills = [
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Redux Toolkit",
  "Xstate",
  "GraphQL",
  "Contentful",
  "Node.js",
  "HTML5, CSS3, SCSS",
  "Storybook",
  "Jira",
];

export const AboutMeThirdPart: FC = () => {
  const globalServices = useContext(GlobalStateContext);
  const { languageService } = globalServices;
  const [state] = useActor(languageService);

  const { skills, languages, exp, german, english } =
    state.context.labels.startPage;
  const myLanguages = [`${english} B2`, `${german} A1`];

  return (
    <div className={cx(styles.wrapper)}>
      <div className={cx(styles.columnsContainer)}>
        <div className={cx(styles.singleColumn)}>
          <Tools className={styles.icon} />
          <Text tag="h4" size="normal">
            {skills}
          </Text>
          <ul className={styles.listSkills}>
            {mySkills.map((skill, i) => (
              <li key={i} className={styles.listSingleRow}>
                <Text size="small">{skill}</Text>
              </li>
            ))}
          </ul>
        </div>
        <div className={cx(styles.singleColumn)}>
          <Box className={styles.icon} />
          <Text tag="h4" size="normal">
            {languages}
          </Text>
          <ul className={styles.listSkills}>
            {myLanguages.map((skill, i) => (
              <li key={i} className={styles.listSingleRow}>
                <Text size="small">{skill}</Text>
              </li>
            ))}
          </ul>
        </div>
        <div className={cx(styles.singleColumn)}>
          <Exp className={styles.icon} />
          <Text tag="h4" size="normal">
            {exp}
          </Text>
          <Text size="small">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita
            nobis optio error porro architecto doloremque consectetur magni
            nesciunt officiis hic deleniti, corrupti cumque iure quasi provident
            minima blanditiis suscipit perferendis?
          </Text>
        </div>
      </div>
    </div>
  );
};
