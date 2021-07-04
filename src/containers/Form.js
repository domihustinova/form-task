import React, { useState } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import styled from "styled-components/macro";

import InputField from "../components/InputField";
import Message from "../components/Message";

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  max-width: 375px;
  padding: 25px;
  margin: auto;
  border: 1px solid #e2e6ea;
`;

const Title = styled.h1`
  color: #000;
  font-size: 32px;
  margin-bottom: 1rem;
`;

const Button = styled.button`
  height: 40px;
  width: 100%;
  max-width: 325px;
  border: none;
  border-radius: 5px;
  color: white;
  background-color: #3961aa;
  cursor: pointer;
  outline: none;

  &:hover {
    background-color: #4d6db1;
  }
`;

const phoneRegExp = /^[+]?[()/0-9. -]{9,}$/;

const initialFormValues = { name: "", email: "", phone: "", message: "" };

const formValidation = Yup.object().shape(
  {
    email: Yup.string()
      .email("Invalid email address")
      .when("phone", {
        is: (phone) => !phone || phone.length === 0,
        then: Yup.string()
          .email()
          .required("Please enter your e-mail or phone"),
        otherwise: Yup.string(),
      }),
    phone: Yup.string()
      .matches(phoneRegExp, "Invalid phone number")
      .when("email", {
        is: (email) => !email || email.length === 0,
        then: Yup.string().required("Please enter your e-mail or phone"),
        otherwise: Yup.string(),
      }),
    message: Yup.string().required("Please enter your message"),
  },
  [["email", "phone"]]
);

export function FormContainer() {
  const [showForm, setShowForm] = useState(true);
  const [message, setMessage] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleFormSubmit = (values) => {
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setShowForm(false);

      if (values.email === "neexistujici@email.cz") {
        setMessage({
          messageType: "error",
          title: "Error!",
          text: "E-mail doesn't exist.",
        });
      } else {
        setMessage({
          messageType: "success",
          title: "Thank you!",
          text: "Your message was sent successfully.",
        });
      }
    }, 3000);
  };

  const handleResetButton = () => {
    setMessage(null);
    setShowForm(true);
  };

  return (
    <Wrapper>
      <Title>Contact Us</Title>
      {message && <Message message={message} />}
      {showForm ? (
        <Formik
          initialValues={initialFormValues}
          validationSchema={formValidation}
          onSubmit={(values) => {
            handleFormSubmit(values);
          }}
        >
          <Form>
            <InputField
              label="Name"
              id="name"
              name="name"
              type="text"
              placeholder="Name"
              as="input"
            />

            <InputField
              label="E-mail"
              id="email"
              name="email"
              type="email"
              placeholder="E-mail"
              as="input"
            />

            <InputField
              label="Phone"
              id="phone"
              name="phone"
              type="text"
              placeholder="Phone"
              as="input"
            />

            <InputField
              label="Message"
              id="message"
              name="message"
              placeholder="Type your message here"
              as="textarea"
            />

            <Button type="submit">
              {isSubmitting ? "Submitting..." : "Submit"}
            </Button>
          </Form>
        </Formik>
      ) : (
        <Button type="button" onClick={handleResetButton}>
          Send new message
        </Button>
      )}
    </Wrapper>
  );
}
