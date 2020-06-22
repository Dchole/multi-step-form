import React, { useState, useEffect } from "react";
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
  handleJumpToStep: (index: number) => void;
}

const StepperHead: React.FC<IStepperHeadProps> = ({
  steps,
  stepIcon,
  activeStep,
  handleJumpToStep
}) => {
  const classes = useStyles();
  const [completed, setCompleted] = useState<number[]>([]);

  useEffect(() => {
    setCompleted(c => [...new Set([...c, activeStep])]);
  }, [activeStep]);

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
