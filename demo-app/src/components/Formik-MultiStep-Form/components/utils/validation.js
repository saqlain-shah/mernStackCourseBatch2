import * as yup from "yup";

const formSchema = yup.object().shape({

  number_of_adults: yup
    .number()
    .typeError("Number of adults must be a valid number")
    .integer("Number of adults must be an integer")
    .min(0, "Number of adults cannot be negative")
    .max(10, "Number of adults Should not exceed than 10")
    .required("Number of adults is required"),
  number_of_children: yup
    .number()
    .typeError("Number of children must be a valid number")
    .integer("Number of children must be an integer")
    .min(0, "Number of children cannot be negative")
    .required("Number of children is required"),
  number_of_infants: yup
    .number()
    .typeError("Number of infants must be a valid number")
    .integer("Number of infants must be an integer")
    .min(0, "Number of infants cannot be negative")
    .required("Number of infants is required"),
  adultFare: yup
    .number()
    .typeError("Adult fare must be a valid number")
    .positive("Fare must be a positive number")
    .required("Adult fare is required"),
  childFare: yup
    .number()
    .typeError("Child fare must be a valid number")
    .positive("Fare must be a positive number")
    .required("Child fare is required"),
  infantFare: yup
    .number()
    .typeError("Infant fare must be a valid number")
    .positive("Fare must be a positive number")
    .required("Infant fare is required"),
  taxes: yup
    .number()
    .typeError("Taxes must be a valid number")
    .positive("Taxes must be a positive number")
    .required("Taxes are required"),
  salesCommission: yup
    .number()
    .typeError("Sales commission must be a valid number")
    .positive("Commission must be a positive number")
    .required("Sales commission is required"),
  discount: yup
    .number()
    .typeError("Discount must be a valid number")
    .positive("Discount must be a positive number")
    .required("Discount is required"),
  grandTotal: yup
    .number()
    .typeError("Grand total must be a valid number")
    .positive("Total must be a positive number")
    .required("Grand total is required"),
});

export default formSchema;
