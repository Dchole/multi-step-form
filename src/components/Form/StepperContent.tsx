import React, { useState, createContext } from "react";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import { Formik, Form, FormikProps } from "formik";

import {
  images,
  onSubmit,
  initialValues,
  validationSchema
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

interface IContext {
  uploads: typeof images;
  values: typeof initialValues;
  setUploads: Function | React.Dispatch<React.SetStateAction<typeof images>>;
}

export const FormContext = createContext<IContext>({
  uploads: images,
  values: initialValues,
  setUploads: () => {}
});

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
  const [uploads, setUploads] = useState(images);

  const handleImagesUpload = (formik: FormikProps<typeof initialValues>) => {
    formik.setFieldValue("profile", uploads.profile);
    formik.setFieldValue("cover", uploads.cover);
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {formik => (
        <Form className={classes.root}>
          <FormContext.Provider
            value={{ uploads, values: formik.values, setUploads }}
          >
            {stepContent(currentStep, { focus, setFocus })}
          </FormContext.Provider>
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
                  onClick={() => {
                    setUploads(images);
                    handleReset(formik);
                  }}
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
              onClick={() => {
                handleImagesUpload(formik);
                handleNextStep(formik);
              }}
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
