import Image from "next/image";
import { useRouter } from "next/router";
import { HiOfficeBuilding } from "react-icons/hi";
import { IoLogoWhatsapp } from "react-icons/io";
import { MdDelete, MdEdit, MdHome } from "react-icons/md";
import { fullNameGenerator } from "../../utils/fullNameGenerator";
import { ShowIcon } from "../show-icon";
import { Card, Space } from "../UI";

const Contacts = ({ contactList }) => {
  const router = useRouter();

  const deleteHandler = (id) => {
    const items = contactList.filter((item) => id !== item.id);
    const jsonString = JSON.stringify(items);
    localStorage.setItem("contacts", jsonString);
  };

  const editHandler = (id) => {
    router.push(`/edit-contact/${id}`);
  };

  if (!contactList || contactList.length === 0) {
    return <h3>Sorry! No contacts saved</h3>;
  } else {
    return contactList?.map((item) => {
      const { id, person, phone, personalOrOffice, profileURL, isWhatsApp } =
        item;

      const fullName = fullNameGenerator(item);

      const icon =
        personalOrOffice === "personal" ? (
          <MdHome size={16} />
        ) : (
          <HiOfficeBuilding size={16} />
        );

      return (
        <Card key={id}>
          <div style={{ display: "flex", alignItems: "center" }}>
            <div
              style={{
                height: 100,
                width: 100,
                borderRadius: 50,
                overflow: "hidden",
                position: "relative",
                marginRight: "1rem",
              }}
            >
              <Image
                src={profileURL}
                height={100}
                width={100}
                alt={person.firstName}
              />
            </div>
            <div>
              <h5 style={{ fontSize: "1.1rem" }}>{fullName}</h5>
              <Space size={0.5} />
              <p
                style={{
                  fontSize: "0.9rem",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <span style={{ marginRight: "0.25rem" }}>{icon}</span> {phone}
              </p>
              {isWhatsApp && (
                <>
                  <Space size={0.5} />
                  <p
                    style={{
                      fontSize: "0.75rem",
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                    }}
                  >
                    <IoLogoWhatsapp color="#128c7e" size={16} />
                    <span style={{ marginLeft: "0.25rem" }}>WhatsApp me</span>
                  </p>
                </>
              )}
            </div>
          </div>
          <Space />
          <div style={{ width: "100%" }}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <ShowIcon IconType={MdDelete} onClick={() => deleteHandler(id)} />
              <ShowIcon IconType={MdEdit} onClick={() => editHandler(id)} />
            </div>
          </div>
        </Card>
      );
    });
  }
};

export default Contacts;
