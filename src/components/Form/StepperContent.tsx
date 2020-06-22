import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import { Formik, Form, FormikProps } from "formik";

import {
  initialValues,
  validationSchema,
  onSubmit
} from "./FormContent/formikConfig";
import useStyles from "./styles/stepper-content";
import { IContentProps } from "./helpers";

interface IStepperContent {
  steps: number;
  currentStep: number;
  handleNextStep: (formik: FormikProps<typeof initialValues>) => void;
  handlePrevStep: () => void;
  handleReset: (formik: FormikProps<typeof initialValues>) => void;

  stepContent: (
    stepIndex: number,
    { focus, setFocus }: IContentProps
  ) => JSX.Element | undefined;
}

const StepperContent: React.FC<IStepperContent> = ({
  steps,
  stepContent,
  currentStep,
  handleNextStep,
  handlePrevStep,
  handleReset
}) => {
  const classes = useStyles();
  const [focus, setFocus] = useState("firstName");

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {formik => (
        <Form className={classes.root}>
          {stepContent(currentStep, { focus, setFocus })}
          <div className={classes.formAction}>
            <IconButton
              color="primary"
              className={Boolean(currentStep) ? classes.iconButton : undefined}
              onClick={handlePrevStep}
              title="Previous Step"
              aria-label="previous"
              disabled={!Boolean(currentStep)}
            >
              <ChevronLeftIcon />
            </IconButton>
            {currentStep === steps - 1 && (
              <div>
                <Button
                  variant="outlined"
                  color="primary"
                  className={classes.button}
                  onClick={() => handleReset(formik)}
                >
                  Reset
                </Button>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  className={classes.button}
                >
                  Submit
                </Button>
              </div>
            )}
            <IconButton
              color="primary"
              className={
                currentStep === steps - 1 ? undefined : classes.iconButton
              }
              onClick={() => handleNextStep(formik)}
              title="Next Step"
              aria-label="next"
              disabled={currentStep === steps - 1}
            >
              <ChevronRightIcon />
            </IconButton>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default StepperContent;
