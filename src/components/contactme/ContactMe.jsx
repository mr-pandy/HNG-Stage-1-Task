import React, { useState } from "react";
import "./contactme.css";
import { userSchema } from "../../validations/UserValidation";
import { useFormik } from "formik";

const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  message: "",
  checkbox: false,
};

const ContactMe = () => {
  const {
    values,
    getFieldProps,
    setFieldValue,
    errors,
    touched,
    handleSubmit,
    isValid,
    isSubmitting,
  } = useFormik({
    initialValues,
    validationSchema: userSchema,
    validateOnChange: true,
    onSubmit(e, { setSubmitting, resetForm }) {
      console.log(e);
      setTimeout(() => {
        setSubmitting(false);
        resetForm();
      }, 2000);
    },
  });

  return (
    <div className="contact__page">
      <div className="contact__info">
        <div className="contact__info-text">
          <h1>Contact Me</h1>
          <p>Hi there, contact me to ask me about anything you have in mind.</p>
        </div>

        <form className="contact__info-form" onSubmit={handleSubmit}>
          <div className="contact__info-form-row">
            <div className="contact__info-form-firstName">
              <label hmtlfor="first_name">First Name </label>
              <input
              className={`${(errors.firstName && touched.firstName) ? "errorInput" :""}`}
                id="first_name"
                type="text"
                placeholder="Enter your first name"
                {...getFieldProps("firstName")}
              />
              {errors.firstName && touched.firstName && (
                <p className="errorText">{errors.firstName}</p>
              )}
            </div>
            <div className="contact__info-form-lastName">
              <label hmtlfor="last_name">Last Name </label>
              <input
                className={`${(errors.firstName && touched.firstName) ? "errorInput" :""}`}
                type="text"
                placeholder="Enter your last name"
                {...getFieldProps("lastName")}
              />
              {errors.lastName && touched.lastName && <p className="errorText">{errors.lastName}</p>}
            </div>
          </div>
          <div className="contact__info-form-email">
            <label hmtlfor="email">Email </label>
            <input
              className={`${(errors.firstName && touched.firstName) ? "errorInput" :""}`}
              id="email"
              type="email"
              placeholder="yourname@email.com"
              {...getFieldProps("email")}
            />
            {errors.email && touched.email && <p className="errorText">{errors.email}</p>}
          </div>
          <div className="contact__info-form-message">
            <label hmtlfor="message">Message </label>
            <textarea
              className={`${(errors.firstName && touched.firstName) ? "errorInput" :""}`}
              id="message"
              cols="30"
              rows="10"
              placeholder="Send me a message and I'll reply you as soon as possible..."
              {...getFieldProps("message")}
            />
            {errors.message && touched.message && <p className="errorText">{errors.message}</p>}
          </div>
          <div>
            <div className="contact__info-form-checkbox">
              <input
                className={`${(errors.firstName && touched.firstName) ? "errorInput" :""}`}
                type="checkbox"
                name="checkbox"
                id="checkbox"
                checked={values.checkbox}
                onChange={(e) => {
                  setFieldValue("checkbox", e.target.checked);
                }}
              />
              <label hmtlfor="checkbox">
                You agree to providing your data to Ekereke Precious Imeh who
                may contact you.
              </label>
            </div>
            {errors.checkbox && touched.checkbox && <p className="errorText">{errors.checkbox}</p>}
          </div>
          <div className="contact__info-form-button">
            <button
              id="btn__submit"
              type="submit"
              disabled={isSubmitting || !isValid}
            >
              {isSubmitting ? "submitting..." : "Send message"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactMe;
