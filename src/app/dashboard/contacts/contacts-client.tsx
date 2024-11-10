"use client";
import { Row } from "@tanstack/react-table";
import { useMemo, useState } from "react";
import { DataTable } from "../components/data-table";
import { AddContactButtonDashboard } from "../components/forms/add-contact-button-dashboard";
import { Contact } from "../helpers/types";
import { FormSchema, useContacts } from "../hooks/useContacts";
import { columns as initialColumns } from "./components/columns";
import { DataTableRowActions } from "./components/data-table-row-actions";
import { DataTableToolbar } from "./components/data-table-tool-bar";
import { DetailsModal } from "./components/details-modal";
import { EditDrawer } from "./components/edit-form/edit-drawer";

export default function ContactsClient() {
  const { contacts, addContact, editContact } = useContacts();
  const [contactDetails, setContactDetails] = useState<Contact>({
    email: "",
    name: "",
    uuid: "",
  });

  const contactToCheck = !!contactDetails.name && !!contactDetails.email;

  const [isEditOpen, setIsEditOpen] = useState(false);
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);

  const openEditDrawer = () => setIsEditOpen(true);
  const closeEditDrawer = () => setIsEditOpen(false);

  const openDetailsModal = () => setIsDetailsOpen(true);
  const closeDetailsModal = () => setIsDetailsOpen(false);

  const handleEditContacts = (uuid: string, data: FormSchema) => {
    editContact(uuid, data);
    setContactDetails({ ...data, uuid });
    closeEditDrawer();
  };

  const columns = useMemo(
    () =>
      initialColumns.map((col) => {
        if (col.id === "actions") {
          return {
            ...col,
            cell: ({ row }: { row: Row<Contact> }) => (
              <DataTableRowActions
                row={row}
                onEditClick={() => {
                  setContactDetails(row.original);
                  openEditDrawer();
                }}
              />
            ),
          };
        }
        return col;
      }),
    [initialColumns]
  );

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
        onRowClick={(row) => {
          setContactDetails(row.original);
          openDetailsModal();
        }}
      />
      <DetailsModal
        isOpen={contactToCheck && isDetailsOpen}
        onOpenChange={() => {
          setContactDetails({ email: "", name: "", uuid: "" });
          closeDetailsModal();
        }}
        openEditDrawer={openEditDrawer}
        {...contactDetails}
      />
      <EditDrawer
        onEditContact={handleEditContacts}
        isOpen={contactToCheck && isEditOpen}
        onOpenChange={() => {
          closeEditDrawer();
        }}
        {...contactDetails}
      />
    </>
  );
}
