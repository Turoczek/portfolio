import React, { FC, RefAttributes, useContext } from "react";
import { Item, Root } from "@radix-ui/react-toggle-group";
import { GlobalStateContext } from "@/providers/GlobalStateProvider";
import { useActor } from "@xstate/react";
import { LangSwitcher } from "@/assets/icons";
import { LanguageTypes } from "@/machines/language/language.types";
import styles from "./LanguageSwitcherButton.module.scss";
import { Text } from "../Text/Text";

export const LanguageSwitcherButton: FC<RefAttributes<HTMLDivElement>> = () => {
  const globalServices = useContext(GlobalStateContext);
  const { languageService } = globalServices;
  const [state, send] = useActor(languageService);

  return (
    <>
      {state.matches("inactive") && (
        <button
          type="button"
          className={styles.buttonSwitcher}
          aria-label="languageSwitcher"
          onClick={() => send("OPEN")}
        >
          <LangSwitcher className={styles.icon} />
        </button>
      )}
      {state.matches("active") && (
        <Root
          type="single"
          defaultValue={state.context.options.lang}
          value={state.context.options.lang}
          onValueChange={(value) => {
            if (value !== "") {
              send({
                type: "UPDATE",
                options: {
                  lang: value as LanguageTypes,
                },
              });
            }
          }}
          aria-label="Text alignment"
          className={styles.toggleGroup}
        >
          <Item
            className={styles.toggleItem}
            value="pl"
            aria-label="Left aligned"
          >
            <Text tag="span" size="xsmall">
              PL
            </Text>
          </Item>
          <Item
            className={styles.toggleItem}
            value="en"
            aria-label="Center aligned"
          >
            <Text tag="span" size="xsmall">
              EN
            </Text>
          </Item>
        </Root>
      )}
    </>
  );
};
