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
  firstName: Yup.string()
    .max(15, "Must be 15 characters or less")
    .required("Required"),
  lastName: Yup.string()
    .max(20, "Must be 20 characters or less")
    .required("Required"),
  email: Yup.string().email("Invalid email address").required("Required"),
  password: Yup.string().min(8, "Password too Short").required("Required"),
  confirm: Yup.string().min(8, "Password too Short").required("Required")
});
