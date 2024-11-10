import { Row } from "@tanstack/react-table";

import { GoPencil } from "react-icons/go";
import { IoTrashBinOutline } from "react-icons/io5";

import { Button } from "@/components/ui/button";

interface DataTableRowActionsProps<TData> {
  row: Row<TData>;
  onEditClick?: () => void;
}

export function DataTableRowActions<TData>({ row, onEditClick }: DataTableRowActionsProps<TData>) {
  const handleEditRow = (event: React.SyntheticEvent) => {
    event.stopPropagation();
    onEditClick?.();
  };

  return (
    <div className="flex justify-end space-x-2">
      <Button
        variant="ghost"
        className="data-[state=open]:bg-muted flex h-12 w-12 p-0"
        onClick={handleEditRow}>
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
