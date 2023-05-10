import React, { FC, useContext } from "react";
// import { CalculatorProps } from "./Calculator.types";
import { GlobalStateContext } from "@/providers/GlobalStateProvider";
import { useActor } from "@xstate/react";
import { StepOne } from "@/components/CalculatorSteps/StepOne/StepOne";
import styles from "./Calculator.module.scss";
import { TextButton } from "../../components/Button/TextButton/TextButton";
import { PageRow } from "../../components/PageRow/PageRow";

export const Calculator: FC = () => {
  const globalServices = useContext(GlobalStateContext);
  const { calculatorService, languageService } = globalServices;
  const [state, send] = useActor(calculatorService);
  const [stateLanguage] = useActor(languageService);
  const { calculatorPage } = stateLanguage.context.labels;

  const handleOpen = () => {
    send({
      type: "OPEN",
    });
  };

  return (
    <PageRow>
      <div className={styles.container}>
        <div className={styles.containerInner}>
          {state.matches("inactive") && (
            <TextButton type="button" onClick={handleOpen}>
              {calculatorPage.open}
            </TextButton>
          )}
          {state.matches("active") && <StepOne />}
        </div>
      </div>
    </PageRow>
  );
};
