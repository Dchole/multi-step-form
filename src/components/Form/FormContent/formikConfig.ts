import { FormikHelpers } from "formik";
import * as Yup from "yup";

export const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  confirm: "",
  brandName: "",
  businessEmail: "",
  website: "",
  location: "",
  description: ""
};

export const onSubmit = (
  values: {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    confirm: string;
    brandName: string;
    businessEmail: string;
    website: string;
    location: string;
    description: string;
  },
  actions: FormikHelpers<{
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    confirm: string;
    brandName: string;
    businessEmail: string;
    website: string;
    location: string;
    description: string;
  }>
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
