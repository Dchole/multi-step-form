import React, { useState } from "react";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";

import useStyles from "./styles/form";
import StepperHead from "./StepperHead";
import StepperContent from "./StepperContent";
import PersonalDetails from "./FormContent/PersonalDetails";
import BusinessDetails from "./FormContent/BusinessDetails";
import Confirmation from "./FormContent/Confirmation";

export interface IContentProps {
  focus: string;
  setFocus: React.Dispatch<React.SetStateAction<string>>;
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

  const handleNextStep = () => {
    if (currentStep !== steps.length) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevStep = () => {
    if (currentStep) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <Container maxWidth="md" className={classes.root} component="main">
      <Paper className={classes.paper}>
        <StepperHead activeStep={currentStep} steps={steps} />
        <StepperContent
          stepContent={getStepContent}
          currentStep={currentStep}
          handlePrevStep={handlePrevStep}
          handleNextStep={handleNextStep}
        />
      </Paper>
    </Container>
  );
};

export default Form;
