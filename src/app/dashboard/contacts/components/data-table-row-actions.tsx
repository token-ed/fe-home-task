import { Row } from "@tanstack/react-table";

import { GoPencil } from "react-icons/go";
import { IoTrashBinOutline } from "react-icons/io5";

import { Button } from "@/components/ui/button";
import { ContactSchema } from "../../helpers/types";

interface DataTableRowActionsProps<TData> {
  row: Row<TData>;
}

export function DataTableRowActions<TData>({ row }: DataTableRowActionsProps<TData>) {
  const task = ContactSchema.parse(row.original);

  return (
    <div className="flex justify-end space-x-2">
      <Button variant="ghost" className="data-[state=open]:bg-muted flex h-12 w-12 p-0">
        <GoPencil className="h-6 w-6" />
        <span className="sr-only">Edit</span>
      </Button>
      <Button variant="ghost" className="data-[state=open]:bg-muted flex h-12 w-12 p-0">
        <IoTrashBinOutline className="h-6 w-6" />
        <span className="sr-only">Delete</span>
      </Button>
    </div>
  );
}
