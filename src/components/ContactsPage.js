import React, { useState } from "react";
import ContactsList from "./ContactsList";

const ContactPage = () => {
    const contactsObj= {
        contacts: [
          {
              id:1,
            name: "Navee Jain K",
            email: "naveen9nj@gmail.com",
          },
        ]
      }
  return (
    <>
      <ContactsList contacts = {contactsObj.contacts} />
    </>
  );
};

export default ContactPage;
