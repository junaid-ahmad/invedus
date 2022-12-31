import { useEffect, useState } from "react";
import Head from "next/head";

import { Button, Space } from "../components/UI/";
import Contacts from "../components/contacts";

const HomePage = () => {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("contacts"));
    console.log(items);
    setContacts(items);
  }, []);

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
        <title>Juned | Contact List</title>
        <meta name="description" content="List of contacts" />
      </Head>
      <Contacts contactList={contacts} />
      <Space />
      <Button href="/add-contact">Create Contact</Button>
    </div>
  );
};

export default HomePage;
