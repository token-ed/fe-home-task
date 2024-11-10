"use client";
import EmptyStateFeed from "@/components-dashboard/forms/empty-state-feed";
import { useToast } from "@/components/ui/use-toast";
import { Row } from "@tanstack/react-table";
import { useMemo, useState } from "react";
import { Contact } from "../helpers/types";
import { FormSchema, useContacts } from "../hooks/useContacts";
import { columns as initialColumns } from "./components/data-table/columns";
import { DataTable } from "./components/data-table/data-table";
import { DataTableRowActions } from "./components/data-table/data-table-row-actions";
import { DeleteModal } from "./components/delete-modal";
import { DetailsModal } from "./components/details-modal";
import { EditDrawer } from "./components/forms/edit-drawer";

export default function ContactsList() {
  const { toast } = useToast();
  const { contacts, addContact, editContact, deleteContact, isUnique } = useContacts();
  const [contactDetails, setContactDetails] = useState<Contact>({
    email: "",
    name: "",
    uuid: "",
  });

  const resetContactDetails = () => setContactDetails({ email: "", name: "", uuid: "" });
  const contactToCheck = !!contactDetails.name && !!contactDetails.email;

  const [isEditOpen, setIsEditOpen] = useState(false);
  const openEditDrawer = () => setIsEditOpen(true);
  const closeEditDrawer = () => setIsEditOpen(false);

  const [isDetailsOpen, setIsDetailsOpen] = useState(false);
  const openDetailsModal = () => setIsDetailsOpen(true);
  const closeDetailsModal = () => setIsDetailsOpen(false);

  const [isDeleteOpen, setIsDeleteOpen] = useState(false);
  const openDeleteModal = () => setIsDeleteOpen(true);
  const closeDeleteModal = () => setIsDeleteOpen(false);

  const handleEditContacts = (uuid: string, data: FormSchema) => {
    editContact(uuid, data);
    setContactDetails({ ...data, uuid });
    closeEditDrawer();
  };

  const handleDeleteContact = () => {
    deleteContact(contactDetails.uuid);
    closeDeleteModal();
    toast({
      duration: 3000,
      variant: "success",
      title: "Contact deleted",
      description: `You successfully deleted ${contactDetails.name}`,
    });
    resetContactDetails();
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
                onDeleteClick={() => {
                  setContactDetails(row.original);
                  openDeleteModal();
                }}
              />
            ),
          };
        }
        return col;
      }),
    []
  );

  if (!contacts || contacts.length < 1) {
    return <EmptyStateFeed addContact={addContact} isUnique={isUnique} />;
  }

  return (
    <div>
      <DataTable
        columns={columns}
        data={contacts}
        onRowClick={(row) => {
          setContactDetails(row.original);
          openDetailsModal();
        }}
        addContact={addContact}
        isUnique={isUnique}
      />
      <DetailsModal
        isOpen={contactToCheck && isDetailsOpen}
        onOpenChange={() => {
          resetContactDetails();
          closeDetailsModal();
        }}
        openDeleteModal={openDeleteModal}
        openEditDrawer={openEditDrawer}
        {...contactDetails}
      />
      <EditDrawer
        onEditContact={handleEditContacts}
        isOpen={contactToCheck && isEditOpen}
        onOpenChange={closeEditDrawer}
        isUnique={isUnique}
        {...contactDetails}
      />
      <DeleteModal
        isOpen={contactToCheck && isDeleteOpen}
        onCancel={closeDeleteModal}
        onDelete={handleDeleteContact}
        onOpenChange={closeDeleteModal}
        {...contactDetails}
      />
    </div>
  );
}
