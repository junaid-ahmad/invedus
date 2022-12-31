import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { v4 as uuid } from "uuid";

import { initialValues, validationSchema } from "./form-utils/";

import { Button, Space } from "../UI/";
import TextError from "./error-message";
import styles from "./Form.module.css";
import {
  checkEntryAlreadyExistInArray,
  deleteAnItemFromArrayUsingId,
  fullNameGenerator,
  sortedIndex,
} from "../../utils/";

const ContactForm = ({ id }) => {
  const [defaultValues, setDefaultValues] = useState(initialValues);
  const [alreadyExists, setAlreadyExists] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    if (!!id) {
      const items = JSON.parse(localStorage.getItem("contacts"));
      const contactToEdit = items.find((item) => id === item.id);
      setDefaultValues(contactToEdit);
    }
    setLoading(false);
  }, [id]);

  const router = useRouter();

  const onSubmit = (values) => {
    let localContacts = JSON.parse(localStorage.getItem("contacts"));

    const contactToStore = { id: id || uuid(), ...values };

    // if no localstorage found then create new array
    if (!!!localContacts) {
      localContacts = [contactToStore];
    } else {
      let newContactFullName = fullNameGenerator(contactToStore).toLowerCase();

      // Check condition for Edit or Create Mode
      // If id is then Edit Mode else Create Mode
      if (!!id) {
        localContacts = deleteAnItemFromArrayUsingId(localContacts, id);
      } else {
        //Check if contact already exists
        const alreadyExists = checkEntryAlreadyExistInArray(
          localContacts,
          newContactFullName
        );
        setAlreadyExists(alreadyExists);
        //return if contact already exists
        if (alreadyExists) {
          return;
        }
      }

      // Get index for the new contact, where to insert in sorted array
      // first parameter in sortedIndex is a sorted array
      // second parameter in sortedIndex is the new element to insert
      let indexOfSortedArray = sortedIndex(localContacts, contactToStore);

      localContacts.splice(indexOfSortedArray, 0, contactToStore);
    }

    localStorage.setItem("contacts", JSON.stringify(localContacts));

    //Redirect to List of Contacts
    router.replace("/");
  };

  if (loading) return <div>Loading...</div>;

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>{id ? "Edit Contact" : "Create Contact"}</h2>
      <Formik
        initialValues={defaultValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
        enableReinitialize
      >
        <Form>
          {/* Input field for First name */}
          <div className={styles.input__container}>
            <Field
              id="person.firstName"
              name="person.firstName"
              type="text"
              placeholder="First Name"
              className={styles.input}
              size={20}
            />
            <ErrorMessage name="person.firstName" component={TextError} />
          </div>

          {/* Input field for Last name */}
          <div className={styles.input__container}>
            <Field
              id="person.lastName"
              name="person.lastName"
              type="text"
              placeholder="Last Name"
              className={styles.input}
              size={20}
            />
            <ErrorMessage name="person.lastName" component={TextError} />
          </div>

          {/* Input field for Phone number */}
          <div className={styles.input__container}>
            <Field
              id="phone"
              name="phone"
              type="tel"
              placeholder="Phone no."
              className={styles.input}
              size={20}
            />
            <ErrorMessage name="phone" component={TextError} />
          </div>

          {/* Input field for Phone number */}
          <div className={styles.input__container}>
            <Field
              id="personalOrOffice"
              name="personalOrOffice"
              component="select"
              className={styles.input}
            >
              <option value="">Select</option>
              <option value="personal">Personal</option>
              <option value="office">Office</option>
            </Field>
            <ErrorMessage name="personalOrOffice" component={TextError} />
          </div>

          {/* Input field for Profile URL */}
          <div className={styles.input__container}>
            <Field
              id="profileURL"
              name="profileURL"
              type="url"
              placeholder="Profile URL"
              className={styles.input}
              size={20}
            />
            <ErrorMessage name="profileURL" component={TextError} />
          </div>

          {/* Input field for WhatsApp */}
          <div className={styles.input__container}>
            <Field
              id="isWhatsApp"
              name="isWhatsApp"
              type="checkbox"
              // className={styles.input}
            />
            <span>Check if it is also a WhatsApp number.</span>
          </div>

          <Space />
          <div className={styles.button__container}>
            <Button type="submit">Submit</Button>
          </div>
          {alreadyExists && (
            <p
              style={{
                color: "var(--primary)",
                textAlign: "center",
                paddingTop: "0.25rem",
              }}
            >
              contact already exists
            </p>
          )}
        </Form>
      </Formik>
    </div>
  );
};

export default ContactForm;
