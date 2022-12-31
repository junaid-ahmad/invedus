import * as Yup from "yup";

const nameShape = Yup.string()
  .trim()
  .required("*Required")
  .min(2, "Invalid")
  .max(15, "Invalid")
  .matches(/^[a-zA-Z][a-zA-Z ]+$/, {
    message: "Invalid character",
    excludeEmptyString: true,
  });

export const validationSchema = Yup.object({
  person: Yup.object({
    firstName: nameShape,
    lastName: nameShape,
  }),
  phone: Yup.string()
    .required("*Required")
    .matches(/^[6-9]\d{9}$/, {
      excludeEmptyString: true,
      message: "Invalid",
    }),
  personalOrOffice: Yup.string()
    .required("Required")
    .oneOf(["personal", "office"], "*Required"),
  profileURL: Yup.string()
    .trim()
    .required("*Required")
    .url("Invalid")
    .lowercase(),
  isWhatsApp: Yup.boolean().required(),
});
