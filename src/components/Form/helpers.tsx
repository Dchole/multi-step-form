import React from "react";
import { StepIconProps } from "@material-ui/core";
import PersonPinIcon from "@material-ui/icons/PersonPin";
import BusinessIcon from "@material-ui/icons/BusinessCenter";
import PhotoCameraIcon from "@material-ui/icons/PhotoCamera";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";

import PersonalDetails from "./FormContent/PersonalDetails";
import BusinessDetails from "./FormContent/BusinessDetails";
import Confirmation from "./FormContent/Confirmation";

export interface IContentProps {
  focus: string;
  setFocus: React.Dispatch<React.SetStateAction<string>>;
}

export function currentStepIcon({ active, completed, icon }: StepIconProps) {
  const icons: { [index: string]: React.ReactElement } = {
    1: <PersonPinIcon color={completed || active ? "primary" : "action"} />,
    2: <BusinessIcon color={completed || active ? "primary" : "action"} />,
    3: <PhotoCameraIcon color={completed || active ? "primary" : "action"} />,
    4: <CheckCircleIcon color={completed || active ? "primary" : "action"} />
  };

  return <div>{icons[String(icon)]}</div>;
}

export function getStepContent(
  stepIndex: number,
  { focus, setFocus }: IContentProps
) {
  switch (stepIndex) {
    case 0:
      return <PersonalDetails focus={focus} setFocus={setFocus} />;
    case 1:
      return <BusinessDetails focus={focus} setFocus={setFocus} />;
    case 2:
      return <Confirmation />;
    case 3:
      return <Confirmation />;
    default:
      break;
  }
}
