import * as Yup from "yup";

export const signUpSchema = Yup.object({
  name: Yup.string()
    .required("Full Name is Required")
    .matches(/^[a-zA-Z_ ]*$/, "No Special characters Allowed.")
    .min(2, "Name Must be between 2 and 16 characters.")
    .max(16, "Name must not be more than 16 characaters."),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email address is required"),

  password: Yup.string()
    .required("Password is required")
    .min(6, "Password Must be between 6 and 16 characters.")
    .max(16, "Password must not be more than 16 characaters."),
});

export const signInSchema = Yup.object({
  email: Yup.string()
    .required("Email address is required")
    .email("Invalid Email Address"),
  password: Yup.string().required("Password is Required"),
});
