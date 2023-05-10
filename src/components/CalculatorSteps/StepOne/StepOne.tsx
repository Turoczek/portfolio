import React, { ChangeEvent, FC, useContext, useState } from "react";
import classNames from "classnames/bind";
import { Dependencies } from "@/api/requests/calculator";
import { Text } from "@/components/Text/Text";
import { GlobalStateContext } from "@/providers/GlobalStateProvider";
import { useActor } from "@xstate/react";
import { checkedValue } from "./StepOne.types";
import styles from "./StepOne.module.scss";

const cx = classNames.bind(styles);

export const StepOne: FC = () => {
  const globalServices = useContext(GlobalStateContext);
  const { calculatorService, languageService } = globalServices;
  const [state] = useActor(calculatorService);
  const [stateLanguage] = useActor(languageService);
  const { data } = state.context;
  const { decoder, internet, phoneSub, router, tv } =
    stateLanguage.context.labels.calculatorPage;

  const [checked, setChecked] = useState<checkedValue>({});

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
    if (checked[id as unknown as number]) {
      const dependentService = Object.entries(dependencies).find(
        ([key, serviceDependencies]) => {
          if (checked[key as unknown as number]) {
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
          [id]: !checked[id as unknown as number],
          [dependentService[0]]: false,
        });
      } else {
        setChecked({ ...checked, [id]: !checked[id as unknown as number] });
      }
    } else setChecked({ ...checked, [id]: true });
  };

  const checkIfDisabled = (dependencies: Dependencies, id: number) => {
    if (dependencies[id]) {
      return dependencies[id].some((dep) => checked[dep] !== true);
    }
    return false;
  };

  return (
    <div className={styles.container}>
      <ul className={styles.list}>
        {Object.entries(data.services).map(([key, name]) => {
          const isChecked = checked[key as unknown as number];
          const isDisabled = checkIfDisabled(
            data.dependencies,
            parseInt(key, 10)
          );
          return (
            <li
              key={key}
              className={cx(
                styles.listItem,
                isChecked && styles.listItemChecked,
                isDisabled && styles.listItemDisabled
              )}
            >
              <label className={styles.label}>
                <input
                  className={styles.input}
                  onChange={handleChange}
                  value={key}
                  type="checkbox"
                  name="checkbox"
                  disabled={isDisabled}
                />
                <Text
                  customClass={cx(styles.text, isChecked && styles.textChecked)}
                  tag="span"
                >
                  {getLabel(name)}
                </Text>
              </label>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
