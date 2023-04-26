import React from "react";
import { Formik, Form, Field, ErrorMessage, useFormikContext } from "formik";
import "../../css/Main.scss";
import Button from "../Buttons/Buttons";

interface FormValues {
  fullName: string;
  cardNum: string;
  expMonth: string;
  expDay: string;
  cvc: string;
}
interface CardDetailsFormProps {
  getFormValsOnChange: (values: any) => void;
}

function CardDetailsForm({ getFormValsOnChange }: CardDetailsFormProps) {
  const initialValues: FormValues = {
    fullName: "",
    cardNum: "",
    expMonth: "",
    expDay: "",
    cvc: "",
  };

  const AutoSubmitToken = () => {
    const { values } = useFormikContext();
    React.useEffect(() => {
      getFormValsOnChange(values);
    }, [values]);
    return null;
  };

  return (
    <div>
      <Formik
        initialValues={initialValues}
        validate={(values: FormValues) => {
          const errors: FormValues = {
            fullName: "",
            cardNum: "",
            expMonth: "",
            expDay: "",
            cvc: "",
          };

          if (!values.fullName) {
            errors.fullName = "Cardholder name is required";
          } else if (!/^[a-zA-Z\s]*$/.test(values.fullName)) {
            errors.fullName = "Cardholder name should only contain letters";
          }

          if (!values.cardNum) {
            errors.cardNum = "Card number is required";
          } else if (!/^[0-9]*$/.test(values.cardNum)) {
            errors.cardNum = "Card number should only contain numbers";
          } else if (values.cardNum.length < 16) {
            errors.cardNum = "Card number must be 16 digits";
          }

          if (!values.expDay || !values.expMonth) {
            errors.expDay = "Expiration date is required";
          } else if (
            !/^[0-9]*$/.test(values.expDay) ||
            !/^[0-9]*$/.test(values.expMonth)
          ) {
            errors.expDay = "Expiration date should only contain numbers";
          } else if (values.expDay.length < 2 || values.expMonth.length < 2) {
            errors.expDay = "Expiration date must be 2 digits";
          } else if (
            parseInt(values.expDay, 10) < 0 ||
            parseInt(values.expMonth, 10) < 1 ||
            parseInt(values.expMonth, 10) > 12
          ) {
            errors.expDay = "Expiration date must be a valid number";
          }

          if (!values.cvc) {
            errors.cvc = "CVC is required";
          } else if (!/^[0-9]*$/.test(values.cvc)) {
            errors.cvc = "CVC should only contain numbers";
          } else if (values.cvc.length < 3) {
            errors.cvc = "CVC must be 3 digits";
          }

          return errors;
        }}
        onSubmit={(values: FormValues, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        {({ isSubmitting }) => (
          <Form className="form">
            <div className="form__field">
              <label className="form__field-label" htmlFor="fullName">
                cardholder name
              </label>
              <Field
                className="form__field-input"
                type="text"
                name="fullName"
                placeholder="e.g. Jane Appleseed"
              />
              <ErrorMessage
                className="form__field-error"
                name="fullName"
                component="p"
              />
            </div>
            <div className="form__field">
              <label className="form__field-label" htmlFor="fullName">
                card number
              </label>
              <Field
                className="form__field-input"
                type="text"
                name="cardNum"
                placeholder="e.g. 1234 5678 9123 0000"
                maxLength="16"
              />
              <ErrorMessage
                className="form__field-error"
                name="cardNum"
                component="p"
              />
            </div>
            <div className="form__field__group">
              <div className="form__field set">
                <label className="form__field-label" htmlFor="fullName">
                  exp. date(mm/yy)
                </label>
                <div className="form__field-input__group">
                  <Field
                    className="form__field-input date"
                    type="text"
                    name="expMonth"
                    placeholder="MM"
                    maxLength="2"
                  />
                  <Field
                    className="form__field-input date"
                    type="text"
                    name="expDay"
                    placeholder="YY"
                    maxLength="2"
                  />
                </div>
                <ErrorMessage
                  className="form__field-error"
                  name="expMonth"
                  component="p"
                />
                <ErrorMessage
                  className="form__field-error"
                  name="expDay"
                  component="p"
                />
              </div>
              <div className="form__field set">
                <label className="form__field-label" htmlFor="fullName">
                  cvc
                </label>
                <Field
                  className="form__field-input"
                  type="text"
                  name="cvc"
                  placeholder="e.g. 123"
                  maxLength="3"
                />
                <ErrorMessage
                  className="form__field-error"
                  name="cvc"
                  component="p"
                />
              </div>
            </div>

            <Button type="submit" disabled={isSubmitting} main>
              Confirm
            </Button>
            <AutoSubmitToken />
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default CardDetailsForm;
