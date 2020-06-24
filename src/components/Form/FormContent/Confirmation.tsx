import React, { useContext } from "react";
import { FormContext } from "../StepperContent";

const Confirmation = () => {
  const { values } = useContext(FormContext);

  return <div>{JSON.stringify(values)}</div>;
};

export default Confirmation;
