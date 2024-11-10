"use client";
import { DataTable } from "../components/data-table";
import { useContacts } from "../hooks/useContacts";
import { columns } from "./components/columns";

export default function ContactsClient() {
  const contacts = useContacts();

  return <DataTable columns={columns} data={contacts} />;
}
