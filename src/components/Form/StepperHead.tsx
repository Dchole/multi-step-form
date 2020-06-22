import React from "react";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepButton from "@material-ui/core/StepButton";
import StepLabel from "@material-ui/core/StepLabel";
import useStyles from "./styles/stepper-head";
import { StepIconProps } from "@material-ui/core";

interface IStepperHeadProps {
  stepIcon: (props: StepIconProps) => JSX.Element;
  activeStep: number;
  steps: string[];
}

const StepperHead: React.FC<IStepperHeadProps> = ({
  stepIcon,
  activeStep,
  steps
}) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map(label => (
          <Step key={label}>
            <StepButton>
              <StepLabel StepIconComponent={stepIcon}>{label}</StepLabel>
            </StepButton>
          </Step>
        ))}
      </Stepper>
    </div>
  );
};

export default StepperHead;
