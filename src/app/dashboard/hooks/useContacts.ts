import { useEffect, useState } from "react";
import { Contact } from "../helpers/types";

export const useContacts = () => {
  const [contacts, setContacts] = useState<Contact[]>([]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const contactsJSON = localStorage.getItem("contacts");
      if (contactsJSON) {
        setContacts(JSON.parse(contactsJSON));
      }
    }
  }, []);

  return contacts;
};
