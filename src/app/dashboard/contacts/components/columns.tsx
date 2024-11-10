"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ColumnDef } from "@tanstack/react-table";
import { Contact } from "../../helpers/types";
import { DataTableColumnHeader } from "./data-table-column-header";
import { DataTableRowActions } from "./data-table-row-actions";

export const columns: ColumnDef<Contact>[] = [
  {
    accessorKey: "name",
    header: () => <DataTableColumnHeader title="Name" />,
    cell: ({ row }) => (
      <div className="flex items-center">
        <Avatar className="mr-4">
          {row.original.gender === "female" ? (
            <AvatarImage src="/images/avatar-female.png" alt={row.original.name} />
          ) : (
            <AvatarImage src="/images/avatar-male.png" alt={row.original.name} />
          )}
          <AvatarFallback>
            <AvatarImage src="/images/avatar-male.png" alt={row.original.name} />
          </AvatarFallback>
        </Avatar>
        <span className="flex flex-col justify-between">
          <p className="text-base font-semibold">{row.original.name}</p>
          <p className="font-normal text-gray-500 dark:text-slate-300">{row.original.email}</p>
        </span>
      </div>
    ),
  },
  {
    accessorKey: "gender",
    header: () => <DataTableColumnHeader title="Gender" />,
    cell: ({ row }) => (
      <span className="text-base capitalize text-gray-500 dark:text-slate-300">
        {row.original.gender}
      </span>
    ),
  },
  {
    accessorKey: "role",
    header: () => <DataTableColumnHeader title="Position" />,
    cell: ({ row }) => (
      <span className="text-base font-semibold text-gray-500 dark:text-slate-300">
        {row.original.position || "N/A"}
      </span>
    ),
  },
  {
    id: "actions",
    header: () => <DataTableColumnHeader title="Actions" className="flex justify-end" />,
    cell: ({ row }) => <DataTableRowActions row={row} />,
  },
];
