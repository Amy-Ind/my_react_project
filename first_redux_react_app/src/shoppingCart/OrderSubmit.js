import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { StyledButton } from "../styled/Style";
import style from "../shared/Recipe.module.css";
const OrderSubmit = () => (
  <div>
    <h1>Ready?</h1>
    <Formik
      initialValues={{ email: "", password: "" }}
      validate={(values) => {
        const errors = {};
        if (!values.email) {
          errors.email = "Email is Required";
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = "Invalid email address";
        }
        if (!values.password) {
          errors.password = "password is Required";
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert("Your order is received!\n" + JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {({ isSubmitting }) => (
        <Form>
          Your email:
          <Field type="email" name="email" />
          <ErrorMessage name="email">
            {(msg) => <div className={style.errMsg}>{msg}</div>}
          </ErrorMessage>
          Password:
          <Field type="password" name="password" />
          <ErrorMessage name="password">
            {(msg) => <div className={style.errMsg}>{msg}</div>}
          </ErrorMessage>
          <StyledButton type="submit" disabled={isSubmitting}>
            Submit
          </StyledButton>
        </Form>
      )}
    </Formik>
  </div>
);

export default OrderSubmit;
