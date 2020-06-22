import React, { useState } from "react";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";

import useStyles from "./styles/form";
import StepperHead from "./StepperHead";
import StepperContent from "./StepperContent";
import { FormikProps } from "formik";
import {
  initialValues,
  personalDetails,
  businessDetails
} from "./FormContent/formikConfig";
import { currentStepIcon, getStepContent } from "./helpers";

const Form: React.FC = () => {
  const classes = useStyles();
  const [currentStep, setCurrentStep] = useState(0);

  const steps = [
    "Personal Details",
    "Business Details",
    "Upload Image",
    "Details Confirmation"
  ];

  const handleNextStep = (formik: FormikProps<typeof initialValues>) => {
    let fields: string[] = [];

    switch (currentStep) {
      case 0:
        fields = Object.keys(personalDetails);
        break;
      case 1:
        fields = Object.keys(businessDetails);
        break;
      default:
        fields = Object.keys(initialValues);
        break;
    }

    fields.forEach(field => {
      formik.setFieldTouched(field);
    });

    setCurrentStep(currentStep + 1);
    // if (!Object.keys(formik.errors).some(field => fields.includes(field))) {
    //   setCurrentStep(currentStep + 1);
    // }
  };

  const handlePrevStep = () => setCurrentStep(currentStep - 1);

  const handleReset = (formik: FormikProps<typeof initialValues>) => {
    formik.resetForm();
    setCurrentStep(0);
  };

  const handleJumpToStep = (index: number) => {
    setCurrentStep(index);
  };

  return (
    <Container maxWidth="md" className={classes.root} component="main">
      <Paper className={classes.paper}>
        <StepperHead
          steps={steps}
          activeStep={currentStep}
          stepIcon={currentStepIcon}
          handleJumpToStep={handleJumpToStep}
        />
        <StepperContent
          steps={steps.length}
          stepContent={getStepContent}
          currentStep={currentStep}
          handlePrevStep={handlePrevStep}
          handleNextStep={handleNextStep}
          handleReset={handleReset}
        />
      </Paper>
    </Container>
  );
};

export default Form;
