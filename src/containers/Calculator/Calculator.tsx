import React, { FC, useContext } from "react";
import { GlobalStateContext } from "@/providers/GlobalStateProvider";
import { useActor } from "@xstate/react";
import { StepOne } from "@/components/CalculatorSteps/StepOne/StepOne";
import { StepTwo } from "@/components/CalculatorSteps/StepTwo/StepTwo";
import { Text } from "@/components";
import styles from "./Calculator.module.scss";
import { TextButton } from "../../components/Button/TextButton/TextButton";
import { PageRow } from "../../components/PageRow/PageRow";

export const Calculator: FC = () => {
  const globalServices = useContext(GlobalStateContext);
  const { calculatorService, languageService } = globalServices;
  const [state, send] = useActor(calculatorService);
  const [stateLanguage] = useActor(languageService);
  const {
    calculatorPage: { open, summaryText },
  } = stateLanguage.context.labels;

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
            <div className={styles.openButtonContainer}>
              <TextButton type="button" onClick={handleOpen}>
                {open}
              </TextButton>
            </div>
          )}
          {state.event.type === "done.invoke.requesting" && (
            <div className={styles.containerSummary}>
              <Text size="normal">{summaryText}</Text>
              {state.context.data?.prices && (
                <Text size="normal">{state.context.data.prices.summary}</Text>
              )}
            </div>
          )}
          {state.matches("active.step1") && <StepOne />}
          {state.matches("active.step2") && <StepTwo />}
        </div>
      </div>
    </PageRow>
  );
};
