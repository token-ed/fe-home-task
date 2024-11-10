"use client";

import { AddContactButtonDataTable } from "@/components-dashboard/forms/add-contact-button-data-table";
import { AddContactFormProps } from "@/components-dashboard/forms/add-contact-form";

export const DataTableToolbar = ({ addContact }: Pick<AddContactFormProps, "addContact">) => {
  // TODO: Add search input and some filtering maybe?
  return <AddContactButtonDataTable addContact={addContact} />;
};
