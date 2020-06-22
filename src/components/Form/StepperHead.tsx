import React from "react";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepButton from "@material-ui/core/StepButton";
import StepLabel from "@material-ui/core/StepLabel";
import useStyles from "./styles/stepper-head";
import { StepIconProps } from "@material-ui/core";

interface IStepperHeadProps {
  steps: string[];
  activeStep: number;
  completed: number[];
  handleJumpToStep: (index: number) => void;
  stepIcon: (props: StepIconProps) => JSX.Element;
}

const StepperHead: React.FC<IStepperHeadProps> = ({
  steps,
  stepIcon,
  activeStep,
  completed,
  handleJumpToStep
}) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label, index) => (
          <Step key={label}>
            <StepButton
              onClick={() => handleJumpToStep(index)}
              disabled={!completed.includes(index)}
            >
              <StepLabel StepIconComponent={stepIcon}>{label}</StepLabel>
            </StepButton>
          </Step>
        ))}
      </Stepper>
    </div>
  );
};

export default StepperHead;
