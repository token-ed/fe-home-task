import { Row } from "@tanstack/react-table";

import { GoPencil } from "react-icons/go";
import { IoTrashBinOutline } from "react-icons/io5";

import { Button } from "@/components/ui/button";
import { useCallback } from "react";

interface DataTableRowActionsProps<TData> {
  row: Row<TData>;
  onEditClick?: () => void;
  onDeleteClick?: () => void;
}

export function DataTableRowActions<TData>({
  row,
  onEditClick,
  onDeleteClick,
}: DataTableRowActionsProps<TData>) {
  const handleEditRow = useCallback(
    (event: React.SyntheticEvent) => {
      event.stopPropagation();
      onEditClick?.();
    },
    [onEditClick]
  );

  const handleDeleteRow = useCallback(
    (event: React.SyntheticEvent) => {
      event.stopPropagation();
      onDeleteClick?.();
    },
    [onDeleteClick]
  );

  return (
    <div className="flex justify-end space-x-2">
      <Button
        variant="ghost"
        className="data-[state=open]:bg-muted flex h-12 w-12 p-0"
        onClick={handleEditRow}>
        <GoPencil className="h-6 w-6" />
        <span className="sr-only">Edit</span>
      </Button>
      <Button
        variant="ghost"
        className="data-[state=open]:bg-muted flex h-12 w-12 p-0"
        onClick={handleDeleteRow}>
        <IoTrashBinOutline className="h-6 w-6" />
        <span className="sr-only">Delete</span>
      </Button>
    </div>
  );
}
