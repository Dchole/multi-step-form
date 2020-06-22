import { initialValues } from "./Form/FormContent/formikConfig";
type TState = typeof initialValues;

interface IAction {
  type: "CONFIRM" | "RESET";
  payload: TState;
}

export const formReducer = (state: TState, action: IAction) => {
  switch (action.type) {
    case "CONFIRM":
      return { ...state, ...action.payload };

    case "RESET":
      return state;

    default:
      return state;
  }
};
