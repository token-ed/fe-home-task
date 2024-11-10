import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { z } from "zod";
import { Contact, Position } from "../helpers/types";
const formSchema = z.object({
  name: z.string().min(2).max(30),
  email: z.string().email(),
  gender: z.enum(["male", "female"]).optional(),
  role: z.nativeEnum(Position).optional(),
});

type FormSchema = z.infer<typeof formSchema>;

export const useContacts = () => {
  const [contacts, setContacts] = useState<Contact[]>([]);

  const addContact = (data: FormSchema) => {
    if (typeof window !== undefined) {
      const newContact = { ...data, uuid: uuidv4() };
      const updatedContacts = [...contacts, newContact];

      localStorage.setItem("contacts", JSON.stringify(updatedContacts));

      setContacts(updatedContacts);
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      const contactsJSON = localStorage.getItem("contacts");
      if (contactsJSON) {
        setContacts(JSON.parse(contactsJSON));
      }
    }
  }, []);

  return { contacts, addContact };
};
