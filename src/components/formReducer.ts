export interface IState {
  firstName?: string;
  lastName?: string;
  email?: string;
  password?: string;
  confirm?: string;
  brandName?: string;
  businessEmail?: string;
  website?: string;
  location?: string;
  description?: string;
}

interface IAction {
  type: "NEXT_STEP" | "CONFIRM" | "RESET";
  payload: IState;
}

export const formReducer = (state: IState, action: IAction) => {
  switch (action.type) {
    case "NEXT_STEP":
      return { ...state, ...action.payload };

    case "CONFIRM":
      return { ...state, ...action.payload };

    case "RESET":
      return state;

    default:
      return state;
  }
};
