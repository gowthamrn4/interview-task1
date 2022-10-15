import * as Yup from "yup";

const phone_number_field_one = /^\d{4}$/;
const phone_number_field_three = /^\d{3}$/;

export const BioFormInitValue = {
    firstName:'',
    lastName:'',
    email:'',
    phone_number_field_one:'',
    phone_number_field_two:'',
    phone_number_field_three:'',
    address1:'',
    address2:'',
    city:'',
    state:'',
    country:'',
    zipCode:'',
    qualification:'',
    comments:''
}

export const BioFormValidationSchema = Yup.object().shape({
    firstName: Yup.string()
      .trim()
      .required("First name  is required"),
      lastName: Yup.string()
      .trim()
      .required("Last name  is required"),
      email: Yup.string().trim()
      .required("Email is required").email("Email is invalid"),
      phone_number_field_one: Yup.string()
      .trim()
      .required("Phone field is required").matches(phone_number_field_one,'Invalid phone number'),
      phone_number_field_two: Yup.string()
      .trim()
      .required("Phone field is required").matches(phone_number_field_three,'Invalid phone number'),
      phone_number_field_three: Yup.string()
      .trim()
      .required("Phone field is required").matches(phone_number_field_three,'Invalid phone number'),
      address1: Yup.string()
      .trim()
      .required("Line 1  is required"),
      address2: Yup.string()
      .trim()
      .required("Line 2 is required"),
      city: Yup.string()
      .trim()
      .required("City is required"),
      state: Yup.string()
      .trim()
      .required("State is required"),
      country: Yup.string()
      .trim()
      .required("Country is required"),
      zipCode: Yup.string()
      .trim()
      .required("Zip code is required"),
      qualification: Yup.string()
      .trim()
      .required("Qualification is required"),
      comments: Yup.string()
      .trim()
      .required("Comments code is required"),
  });