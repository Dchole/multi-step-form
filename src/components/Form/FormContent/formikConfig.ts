import { FormikHelpers } from "formik";
import * as Yup from "yup";

export const personalDetails = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  confirm: ""
};

export const businessDetails = {
  brandName: "",
  businessEmail: "",
  website: "",
  location: "",
  description: ""
};

export const initialValues = {
  ...personalDetails,
  ...businessDetails
};

export const onSubmit = (
  values: typeof initialValues,
  actions: FormikHelpers<typeof initialValues>
) => console.log({ values, actions });

export const validationSchema = Yup.object({
  firstName: Yup.string().min(3).max(120).required().label("First Name"),
  lastName: Yup.string().min(3).max(120).required().label("Last Name"),
  email: Yup.string().email().required().label("Email"),
  password: Yup.string().min(8).required().label("Password"),
  confirm: Yup.string().min(8).required().label("Confirm Password"),
  brandName: Yup.string().min(3).required().label("Business Name"),
  businessEmail: Yup.string().email().required().label("Business Email"),
  website: Yup.string().required().label("Business Website"),
  location: Yup.string().required().label("Business Location"),
  description: Yup.string().min(120).max(1024).label("Description")
});
