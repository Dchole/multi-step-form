import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import { Formik, Form } from "formik";

import {
  initialValues,
  onSubmit,
  validationSchema
} from "./FormContent/formikConfig";
import useStyles from "./styles/stepper-content";
import { IContentProps } from ".";

interface IStepperContent {
  stepContent: (
    stepIndex: number,
    { focus, setFocus }: IContentProps
  ) => JSX.Element | undefined;

  currentStep: number;
  handleNextStep: () => void;
  handlePrevStep: () => void;
}

const StepperContent: React.FC<IStepperContent> = ({
  stepContent,
  currentStep,
  handleNextStep,
  handlePrevStep
}) => {
  const classes = useStyles();
  const [focus, setFocus] = useState("firstName");

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      <Form className={classes.root}>
        {stepContent(currentStep, { focus, setFocus })}
        <Button
          color="primary"
          variant="outlined"
          className={classes.button}
          onClick={handlePrevStep}
        >
          Prev
        </Button>
        <Button
          // type="submit"
          color="primary"
          variant="contained"
          className={classes.button}
          onClick={handleNextStep}
        >
          Next
        </Button>
      </Form>
    </Formik>
  );
};

export default StepperContent;
