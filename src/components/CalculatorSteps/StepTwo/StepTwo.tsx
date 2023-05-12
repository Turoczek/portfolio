import React, { ChangeEvent, FC, useContext } from "react";
import { GlobalStateContext } from "@/providers/GlobalStateProvider";
import { useActor } from "@xstate/react";
import { TextButton } from "@/components/Button/TextButton/TextButton";
import { Card } from "@/components/Card/Card";
import styles from "./StepTwo.module.scss";

export const StepTwo: FC = () => {
  const globalServices = useContext(GlobalStateContext);
  const { calculatorService, languageService } = globalServices;
  const [state, send] = useActor(calculatorService);
  const [stateLanguage] = useActor(languageService);
  const { selected } = state.context;
  const { back } = stateLanguage.context.labels;

  const handleBack = () => {
    send({
      type: "PREV",
      selected,
    });
  };

  const handleCalculate = (e: ChangeEvent<HTMLInputElement>) => {
    const id = e.target.value;
    send({
      type: "CALCULATE",
      data: { selected, year: id },
    });
  };

  const years = [2023, 2024, 2025];

  return (
    <div className={styles.container}>
      <ul className={styles.list}>
        {years.map((year) => {
          return (
            <Card key={year} value={year} onValueChange={handleCalculate}>
              {year}
            </Card>
          );
        })}
      </ul>
      <div className={styles.buttonContainer}>
        <TextButton onClick={handleBack}>{back}</TextButton>
      </div>
    </div>
  );
};
