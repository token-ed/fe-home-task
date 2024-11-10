"use client";

import { AddContactButtonDataTable } from "@/components-dashboard/forms/add-contact-button-data-table";
import { AddContactFormProps } from "@/components-dashboard/forms/add-contact-form";

interface Props {
  addContact: AddContactFormProps["addContact"];
  isUnique: AddContactFormProps["isUnique"];
}

export const DataTableToolbar = ({ addContact, isUnique }: Props) => {
  // TODO: Add search input and some filtering maybe?
  return <AddContactButtonDataTable addContact={addContact} isUnique={isUnique} />;
};
