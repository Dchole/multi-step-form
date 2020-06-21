import React, { useState, useEffect } from "react";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepButton from "@material-ui/core/StepButton";
import StepLabel from "@material-ui/core/StepLabel";
import useStyles from "./styles/stepper-head";
import { IStepIconProps } from ".";

interface IStepperHeadProps {
  stepIcon: (props: IStepIconProps) => JSX.Element;
  activeStep: number;
  steps: string[];
}

const StepperHead: React.FC<IStepperHeadProps> = ({
  stepIcon,
  activeStep,
  steps
}) => {
  const classes = useStyles();
  const [reached, setReached] = useState<number[]>([]);

  useEffect(() => {
    setReached(r => [...new Set([...r, activeStep])]);
  }, [activeStep]);

  return (
    <div className={classes.root}>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map(label => (
          <Step key={label}>
            <StepButton>
              <StepLabel
                StepIconComponent={props => stepIcon({ ...props, reached })}
              >
                {label}
              </StepLabel>
            </StepButton>
          </Step>
        ))}
      </Stepper>
    </div>
  );
};

export default StepperHead;
