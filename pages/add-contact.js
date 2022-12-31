import Head from "next/head";

import ContactForm from "../components/contact-form";

const AddContactPage = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Head>
        <title>Juned | Create Contact</title>
        <meta name="description" content="Create a new contact" />
      </Head>
      <ContactForm />
    </div>
  );
};

export default AddContactPage;
