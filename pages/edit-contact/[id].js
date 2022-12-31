import Head from "next/head";
import { useRouter } from "next/router";
import ContactForm from "../../components/contact-form";

const EditContactPage = () => {
  const router = useRouter();
  const {
    query: { id },
  } = router;

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
        <title>Juned | Edit Contact</title>
        <meta name="description" content="Edit an existing contact" />
      </Head>
      <ContactForm id={id} />
    </div>
  );
};

export default EditContactPage;
