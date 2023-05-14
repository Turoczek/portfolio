import React, { FC, useContext, useState } from "react";
import { GlobalStateContext } from "@/providers/GlobalStateProvider";
import { useActor } from "@xstate/react";
import { ErrorMessage, Field, FieldProps, Form, Formik } from "formik";
import {
  object as YupObject,
  string as YupString,
  number as YupNumber,
} from "yup";
import { Text } from "@/components";
import styles from "./Order.module.scss";
import { TextButton } from "../../components/Button/TextButton/TextButton";
import { PageRow } from "../../components/PageRow/PageRow";

interface OrderData {
  name: string;
  preparationTime: string;
  type: DishesType;
  numberOfSlices?: number;
  diameter?: number;
  spicinessScale?: number;
  slicesOfBread?: number;
}

const getValidationSchema = (selectedType: DishesType) => {
  switch (selectedType) {
    case "pizza":
      return YupObject().shape({
        name: YupString().required(),
        preparationTime: YupString().required(),
        numberOfSlices: YupNumber().positive().required(),
        diameter: YupNumber().positive().required(),
      });
    case "sandwich":
      return YupObject().shape({
        name: YupString().required(),
        preparationTime: YupString().required(),
        slicesOfBread: YupNumber().positive().required(),
      });
    case "soup":
      return YupObject().shape({
        name: YupString().required(),
        preparationTime: YupString().required(),
        spicinessScale: YupNumber().min(1).max(10).required(),
      });
    default:
      return undefined;
  }
};
type DishesType = "pizza" | "soup" | "sandwich";

export const Order: FC = () => {
  const globalServices = useContext(GlobalStateContext);
  const { languageService } = globalServices;
  const [stateLanguage] = useActor(languageService);
  const {
    dishPage: {
      title,
      diameter,
      dishName,
      numberOfSlices,
      pizza,
      preparationTime,
      sandwich,
      slicesOfBread,
      soup,
      spicinesScale,
      send: sendString,
    },
  } = stateLanguage.context.labels;
  const [selectedType, setSelectedType] = useState<DishesType>("pizza");
  return (
    <PageRow>
      <div className={styles.container}>
        <div>
          <Text size="large" tag="h1">
            {title}
          </Text>
          <Formik<OrderData>
            initialValues={{
              name: "",
              preparationTime: "",
              type: "pizza",
              diameter: 0,
              numberOfSlices: 0,
              slicesOfBread: 0,
              spicinessScale: 0,
            }}
            validateOnBlur
            validateOnChange={false}
            validateOnMount
            validationSchema={getValidationSchema(selectedType)}
            onSubmit={() => console.log("sub")}
          >
            {({ isValid, values, setFieldValue }) => {
              return (
                <Form>
                  <div className={styles.formInnerContainer}>
                    <Field name="name">
                      {({ field }: FieldProps) => {
                        return (
                          <>
                            <label className={styles.label} htmlFor="name">
                              {dishName}
                            </label>
                            <input
                              type="text"
                              placeholder={dishName}
                              id="name"
                              value={field.value}
                              onChange={field.onChange}
                              onBlur={field.onBlur}
                              aria-invalid="spelling"
                              // aria-invalid={touched.name ? "spelling" : undefined}
                            />
                          </>
                        );
                      }}
                    </Field>
                    <Field name="preparationTime">
                      {({ field }: FieldProps) => {
                        return (
                          <div className={styles.fieldInnerContainer}>
                            <label
                              className={styles.label}
                              htmlFor="preparationTime"
                            >
                              {preparationTime}
                            </label>
                            <input
                              type="time"
                              id="preparationTime"
                              step={1}
                              value={field.value}
                              onChange={field.onChange}
                              onBlur={field.onBlur}
                              // aria-invalid={touched.name ? "spelling" : undefined}
                            />
                          </div>
                        );
                      }}
                    </Field>
                    <Field name="type">
                      {({ field }: FieldProps) => {
                        console.log(field.value);
                        return (
                          <div className={styles.fieldInnerContainer}>
                            <div className={styles.inputLabelContainer}>
                              <input
                                className={styles.radioInput}
                                type="radio"
                                id="pizza"
                                name="type"
                                value="pizza" // field.value
                                defaultChecked
                                onChange={(e) => {
                                  setSelectedType(e.target.value as DishesType);
                                  setTimeout(() => {
                                    setFieldValue(field.name, "pizza", true);
                                  }, 0);
                                }}
                              />
                              <label htmlFor="pizza">{pizza}</label>
                            </div>
                            <div className={styles.inputLabelContainer}>
                              <input
                                className={styles.radioInput}
                                type="radio"
                                id="soup"
                                name="type"
                                value="soup"
                                onChange={(e) => {
                                  setSelectedType(e.target.value as DishesType);
                                  setTimeout(() => {
                                    setFieldValue(field.name, "soup", true);
                                  }, 0);
                                }}
                              />
                              <label htmlFor="soup">{soup}</label>
                            </div>
                            <div className={styles.inputLabelContainer}>
                              <input
                                className={styles.radioInput}
                                type="radio"
                                id="sandwich"
                                name="type"
                                value="sandwich"
                                onChange={(e) => {
                                  setSelectedType(e.target.value as DishesType);
                                  setTimeout(() => {
                                    setFieldValue(field.name, "sandwich", true);
                                  }, 0);
                                }}
                              />
                              <label htmlFor="sandwich">{sandwich}</label>
                            </div>
                          </div>
                        );
                      }}
                    </Field>
                    {values.type === "pizza" && (
                      <>
                        <Field name="numberOfSlices">
                          {({ field }: FieldProps) => {
                            return (
                              <div className={styles.fieldInnerContainer}>
                                <label htmlFor="numberOfSlices">
                                  {numberOfSlices}
                                </label>
                                <input
                                  type="number"
                                  placeholder={numberOfSlices}
                                  id="numberOfSlices"
                                  value={field.value}
                                  onChange={field.onChange}
                                  onBlur={field.onBlur}
                                  // aria-invalid={
                                  //   touched.name ? "spelling" : undefined
                                  // }
                                />
                                <ErrorMessage name="numberOfSlices" />
                              </div>
                            );
                          }}
                        </Field>
                        <Field name="diameter">
                          {({ field }: FieldProps) => {
                            return (
                              <div className={styles.fieldInnerContainer}>
                                <label htmlFor="diameter">{diameter}</label>
                                <input
                                  type="number"
                                  placeholder={diameter}
                                  id="diameter"
                                  value={field.value}
                                  onChange={field.onChange}
                                  onBlur={field.onBlur}
                                  // aria-invalid={touched.name ? "spelling" : undefined}
                                />
                              </div>
                            );
                          }}
                        </Field>
                        <ErrorMessage name="diameter" />
                      </>
                    )}
                    {values.type === "soup" && (
                      <>
                        <Field name="spicinesScale">
                          {({ field }: FieldProps) => {
                            return (
                              <div className={styles.fieldInnerContainer}>
                                <label htmlFor="spicinesScale">
                                  {spicinesScale}
                                </label>
                                <input
                                  type="number"
                                  placeholder={`${spicinesScale} 1-10`}
                                  id="spicinesScale"
                                  value={field.value}
                                  onChange={field.onChange}
                                  onBlur={field.onBlur}
                                  // aria-invalid={touched.name ? "spelling" : undefined}
                                />
                              </div>
                            );
                          }}
                        </Field>
                        <ErrorMessage name="spicinesScale">
                          {(msg) => <p>{msg}</p>}
                        </ErrorMessage>
                      </>
                    )}
                    {values.type === "sandwich" && (
                      <>
                        <Field name="slicesOfBread" className="hahahahah">
                          {({ field }: FieldProps) => {
                            return (
                              <div className={styles.fieldInnerContainer}>
                                <label htmlFor="slicesOfBread">
                                  {slicesOfBread}
                                </label>
                                <input
                                  type="number"
                                  placeholder={slicesOfBread}
                                  id="slicesOfBread"
                                  value={field.value}
                                  onChange={field.onChange}
                                  onBlur={field.onBlur}
                                  // aria-invalid={touched.name ? "spelling" : undefined}
                                />
                              </div>
                            );
                          }}
                        </Field>
                        <ErrorMessage name="slicesOfBread" />
                      </>
                    )}
                    <div className={styles.submitContainer}>
                      <TextButton type="submit" disabled={!isValid}>
                        {sendString}
                      </TextButton>
                    </div>
                  </div>
                </Form>
              );
            }}
          </Formik>
        </div>
      </div>
    </PageRow>
  );
};
