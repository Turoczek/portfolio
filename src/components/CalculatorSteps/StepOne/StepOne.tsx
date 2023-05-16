import React, { ChangeEvent, FC, useContext, useState } from "react";
import classNames from "classnames/bind";
import { Text } from "@/components/Text/Text";
import { GlobalStateContext } from "@/providers/GlobalStateProvider";
import { useActor } from "@xstate/react";
import { TextButton } from "@/components/Button/TextButton/TextButton";
import { Card } from "@/components/Card/Card";
import { checkedValue } from "./StepOne.types";
import styles from "./StepOne.module.scss";

const cx = classNames.bind(styles);

export const StepOne: FC = () => {
  const globalServices = useContext(GlobalStateContext);
  const { calculatorService, languageService } = globalServices;
  const [state, send] = useActor(calculatorService);
  const [stateLanguage] = useActor(languageService);
  const { data, selected } = state.context;
  const { decoder, internet, phoneSub, router, tv, selectYear, close } =
    stateLanguage.context.labels.calculatorPage;

  const getAlreadyChecked = () => {
    return selected?.reduce((acc, curr) => {
      return {
        ...acc,
        [curr]: true,
      };
    }, {});
  };

  const [checked, setChecked] = useState<checkedValue>(
    getAlreadyChecked() || {}
  );

  const getLabel = (id: string) => {
    switch (id) {
      case "internet":
        return internet;
      case "tv":
        return tv;
      case "phoneSub":
        return phoneSub;
      case "decoder":
        return decoder;
      case "router":
        return router;
      default:
        return "";
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { dependencies } = data;
    const id = e.target.value;
    const parsedId = parseInt(id, 10);

    if (checked[parsedId]) {
      const dependentService = Object.entries(dependencies).find(
        ([key, serviceDependencies]) => {
          if (checked[parseInt(key, 10)]) {
            return serviceDependencies.some(
              (dependency) => checked[dependency] === true
            );
          }
          return false;
        }
      );
      if (dependentService && dependentService[1][0].toString() === id) {
        setChecked({
          ...checked,
          [id]: !checked[parsedId],
          [dependentService[0]]: false,
        });
      } else {
        setChecked({ ...checked, [id]: !checked[parsedId] });
      }
    } else setChecked({ ...checked, [id]: true });
  };

  const handleNext = () => {
    send({
      type: "NEXT",
      selected: Object.keys(
        Object.fromEntries(
          Object.entries(checked).filter(([, value]) => value === true)
        )
      ),
    });
  };

  const handleBack = () => {
    send({
      type: "CLOSE",
    });
  };

  const checkIfDisabled = (id: number) => {
    if (data.dependencies[id]) {
      return data.dependencies[id].some((dep) => checked[dep] !== true);
    }
    return false;
  };

  return (
    <div className={styles.container}>
      <div className={styles.servicesContainer}>
        <ul className={styles.list}>
          {Object.entries(data.services).map(([key, name]) => {
            const isChecked = checked[key as unknown as number];
            const isDisabled = checkIfDisabled(parseInt(key, 10));
            return (
              <Card
                onValueChange={handleChange}
                key={key}
                isChecked={isChecked}
                isDisabled={isDisabled}
                value={key}
              >
                <Text
                  customClass={cx(styles.text, isChecked && styles.textChecked)}
                  tag="span"
                >
                  {getLabel(name)}
                </Text>
              </Card>
            );
          })}
        </ul>
      </div>
      <div className={styles.summaryButtonsContainer}>
        <TextButton onClick={handleBack}>{close}</TextButton>
        <TextButton onClick={handleNext}>{selectYear}</TextButton>
      </div>
    </div>
  );
};
