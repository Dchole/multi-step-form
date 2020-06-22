import React, { useState } from "react";
import { StepIconProps } from "@material-ui/core";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import PersonPinIcon from "@material-ui/icons/PersonPin";
import BusinessIcon from "@material-ui/icons/BusinessCenter";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";

import useStyles from "./styles/form";
import StepperHead from "./StepperHead";
import StepperContent from "./StepperContent";
import PersonalDetails from "./FormContent/PersonalDetails";
import BusinessDetails from "./FormContent/BusinessDetails";
import Confirmation from "./FormContent/Confirmation";
import { FormikProps } from "formik";
import {
  initialValues,
  personalDetails,
  businessDetails
} from "./FormContent/formikConfig";

export interface IContentProps {
  focus: string;
  setFocus: React.Dispatch<React.SetStateAction<string>>;
}

function CurrentStepIcon({ active, completed, icon }: StepIconProps) {
  const icons: { [index: string]: React.ReactElement } = {
    1: <PersonPinIcon color={completed || active ? "primary" : "action"} />,
    2: <BusinessIcon color={completed || active ? "primary" : "action"} />,
    3: <CheckCircleIcon color={completed || active ? "primary" : "action"} />
  };

  return <div>{icons[String(icon)]}</div>;
}

function getStepContent(stepIndex: number, { focus, setFocus }: IContentProps) {
  switch (stepIndex) {
    case 0:
      return <PersonalDetails focus={focus} setFocus={setFocus} />;
    case 1:
      return <BusinessDetails focus={focus} setFocus={setFocus} />;
    case 2:
      return <Confirmation />;
    default:
      break;
  }
}

const Form: React.FC = () => {
  const classes = useStyles();
  const [currentStep, setCurrentStep] = useState(0);

  const steps = [
    "Personal Details",
    "Business Details",
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

    if (!Object.keys(formik.errors).some(field => fields.includes(field))) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevStep = () => setCurrentStep(currentStep - 1);

  const handleReset = (formik: FormikProps<typeof initialValues>) => {
    formik.resetForm();
    setCurrentStep(0);
  };

  return (
    <Container maxWidth="md" className={classes.root} component="main">
      <Paper className={classes.paper}>
        <StepperHead
          stepIcon={CurrentStepIcon}
          activeStep={currentStep}
          steps={steps}
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
