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
import axios from "axios";
import { Switch, FormControlLabel } from "@mui/material";
import styles from "./DishForm.module.scss";
import { TextButton } from "../../components/Button/TextButton/TextButton";
import { PageRow } from "../../components/PageRow/PageRow";
import {
  DishData,
  DishQuery,
  DishesType,
  FakeErrorType,
} from "./DishForm.types";
import { Error } from "./Error/Error";

const getObjectToSend = (values: DishData, type: DishesType): DishQuery => {
  if (type === "pizza") {
    return {
      name: values.name,
      diameter: values.diameter,
      no_of_slices: values.numberOfSlices,
      preparation_time: values.preparationTime,
      type,
    };
  }
  if (type === "sandwich") {
    return {
      name: values.name,
      preparation_time: values.preparationTime,
      slices_of_bread: values.slicesOfBread,
      type,
    };
  }
  if (type === "soup") {
    return {
      name: values.name,
      preparation_time: values.preparationTime,
      spiciness_scale: values.spicinessScale,
      type,
    };
  }
  return {
    name: "",
    preparation_time: "",
    type: "pizza",
  };
};

export const DishForm: FC = () => {
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
      success,
      fakeApiError,
    },
  } = stateLanguage.context.labels;
  const [selectedType, setSelectedType] = useState<DishesType>("pizza");
  const [response, setResponse] = useState<DishQuery>();
  const [resError, setResError] = useState<FakeErrorType>();
  const [wrongApiCall, setWrongApiCall] = useState<boolean>(false);
  const URL = "https://umzzcc503l.execute-api.us-west-2.amazonaws.com/dishes/";

  const handleSubmit = (values: DishData) => {
    setResError(undefined);
    axios
      .post(
        wrongApiCall ? `${URL}wrongAdress` : URL,
        getObjectToSend(values, selectedType)
      )
      .then((res) => {
        setResponse(res.data);
      })
      .catch(() => {
        // ERROR CODE VALIDATION SHOULD BE HERE
        const fakeError = {
          status: "409",
          field: "name",
          statusText: "API fake error from field: name",
        };
        setResError({
          [fakeError.field]: fakeError.statusText,
        });
      });
  };

  const getValidationSchema = () => {
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

  if (response)
    return (
      <PageRow>
        <div className={styles.container}>
          <Text tag="h1" size="large">
            {success}
          </Text>
        </div>
      </PageRow>
    );

  return (
    <PageRow>
      <div className={styles.container}>
        <div>
          <Text size="large" tag="h1">
            {title}
          </Text>

          <FormControlLabel
            control={
              <Switch
                checked={wrongApiCall}
                onChange={() => setWrongApiCall(!wrongApiCall)}
              />
            }
            label={fakeApiError}
          />

          <Formik<DishData>
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
            validateOnChange
            enableReinitialize
            validateOnMount
            initialErrors={resError}
            validationSchema={getValidationSchema}
            onSubmit={handleSubmit}
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
                            />
                            <ErrorMessage name="name">
                              {(msg) => <Error message={msg} />}
                            </ErrorMessage>
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
                            />
                            <ErrorMessage name="preparationTime">
                              {(msg) => <Error message={msg} />}
                            </ErrorMessage>
                          </div>
                        );
                      }}
                    </Field>
                    <Field name="type">
                      {({ field }: FieldProps) => {
                        return (
                          <div className={styles.fieldInnerContainer}>
                            <div className={styles.inputLabelContainer}>
                              <input
                                className={styles.radioInput}
                                type="radio"
                                id="pizza"
                                name="type"
                                value="pizza"
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
                            <ErrorMessage name="type">
                              {(msg) => <Error message={msg} />}
                            </ErrorMessage>
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
                                />
                                <ErrorMessage name="numberOfSlices">
                                  {(msg) => <Error message={msg} />}
                                </ErrorMessage>
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
                                />
                                <ErrorMessage name="diameter">
                                  {(msg) => <Error message={msg} />}
                                </ErrorMessage>
                              </div>
                            );
                          }}
                        </Field>
                      </>
                    )}
                    {values.type === "soup" && (
                      <Field name="spicinessScale">
                        {({ field }: FieldProps) => {
                          return (
                            <div className={styles.fieldInnerContainer}>
                              <label htmlFor="spicinessScale">
                                {spicinesScale}
                              </label>
                              <input
                                type="number"
                                placeholder={`${spicinesScale} 1-10`}
                                id="spicinessScale"
                                value={field.value}
                                onChange={field.onChange}
                                onBlur={field.onBlur}
                              />
                              <ErrorMessage name="spicinessScale">
                                {(msg) => <Error message={msg} />}
                              </ErrorMessage>
                            </div>
                          );
                        }}
                      </Field>
                    )}
                    {values.type === "sandwich" && (
                      <Field name="slicesOfBread">
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
                              />
                              <ErrorMessage name="slicesOfBread">
                                {(msg) => <Error message={msg} />}
                              </ErrorMessage>
                            </div>
                          );
                        }}
                      </Field>
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
