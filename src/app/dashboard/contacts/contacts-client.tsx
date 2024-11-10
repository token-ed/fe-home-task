"use client";
import { useState } from "react";
import { DataTable } from "../components/data-table";
import { AddContactButtonDashboard } from "../components/forms/add-contact-button-dashboard";
import { Contact } from "../helpers/types";
import { useContacts } from "../hooks/useContacts";
import { columns } from "./components/columns";
import { DataTableToolbar } from "./components/data-table-tool-bar";
import { DetailsModal } from "./components/details-modal";

export default function ContactsClient() {
  const [contactDetails, setContactDetails] = useState<Contact>({
    email: "",
    name: "",
    uuid: "",
  });
  const { contacts, addContact } = useContacts();

  if (!contacts || contacts.length < 1) {
    return (
      <>
        <div className="">
          <div className="max-w-screen-lg text-gray-500 dark:text-gray-400 sm:text-lg">
            <h2 className="mb-4 text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
              Your Contact List is Empty
            </h2>
            <p className="mb-4 font-light">
              It looks like you haven't added any contacts yet.
              <br />
              Start building your network by adding new contacts, so you can easily manage and
              access all your important connections in one place.
            </p>
            <p className="mb-4 font-medium">
              Ready to get started? Click the button below to add your first contact.
            </p>
          </div>
        </div>

        <AddContactButtonDashboard addContact={addContact} />
      </>
    );
  }

  return (
    <>
      <DataTableToolbar addContact={addContact} />
      <DataTable
        columns={columns}
        data={contacts}
        onRowClick={(row) => setContactDetails(row.original)}
      />
      <DetailsModal
        isOpen={!!contactDetails.name}
        email={contactDetails.email}
        name={contactDetails.name}
        gender={contactDetails.gender}
        position={contactDetails.position}
        onOpenChange={() =>
          setContactDetails({
            email: "",
            name: "",
            uuid: "",
          })
        }
      />
    </>
  );
}
