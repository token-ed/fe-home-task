import { DataTable } from "../components/data-table";
import { columns } from "./components/columns";
import { Contact } from "./components/helper";

async function getData(): Promise<Contact[]> {
  return [];
}

export default async function Contacts() {
  const data = await getData();
  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data} />
    </div>
  );
}
