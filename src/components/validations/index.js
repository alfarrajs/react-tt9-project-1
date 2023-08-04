import * as Yup from "yup";

const emailValidation = Yup.string().email().required();
const phoneValidation = Yup.string().required().matches(/^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/);
const passwordValidation = Yup.string().required().min(6).max(8);
const repasswordValidation = Yup.string().required().oneOf([Yup.ref("password")]);
const agreeConditionsValidation = Yup.boolean().required().default(false);
const userNameValidation = Yup.string().required().min(3).max(100);

export {
  emailValidation,
  phoneValidation,
  passwordValidation,
  repasswordValidation,
  agreeConditionsValidation,
  userNameValidation,
};
