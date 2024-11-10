import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { z } from "zod";
import { Contact, Position } from "../helpers/types";

export const formSchema = z.object({
  name: z.string().min(2).max(30),
  email: z.string().email(),
  gender: z.enum(["male", "female"]).optional(),
  position: z.nativeEnum(Position).optional(),
});

export type FormSchema = z.infer<typeof formSchema>;

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

  const editContact = (uuid: string, data: FormSchema) => {
    if (typeof window !== undefined) {
      const contactsToEdit = [...contacts];
      const contactToEditIndex = contacts.findIndex((contact) => contact.uuid === uuid);

      if (contactToEditIndex !== -1) {
        contactsToEdit[contactToEditIndex] = {
          ...contacts[contactToEditIndex],
          ...data,
        };

        localStorage.setItem("contacts", JSON.stringify(contactsToEdit));

        setContacts(contactsToEdit);
      }
    }
  };

  const deleteContact = (uuid: string) => {
    if (typeof window !== undefined) {
      const updatedContacts = contacts.filter((contact) => contact.uuid !== uuid);
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

  return { contacts, addContact, editContact, deleteContact };
};
