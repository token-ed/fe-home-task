"use client";

import { AddContactButtonDataTable } from "@/components-dashboard/forms/add-contact-button-data-table";
import { AddContactFormProps } from "@/components-dashboard/forms/add-contact-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Table } from "@tanstack/react-table";
import { RxCross2 } from "react-icons/rx";

export interface DataTableToolbarProps<TData> {
  table: Table<TData>;
  addContact: AddContactFormProps["addContact"];
  isUnique: AddContactFormProps["isUnique"];
}

export function DataTableToolbar<TData>({
  table,
  addContact,
  isUnique,
}: DataTableToolbarProps<TData>) {
  const isFiltered = table.getState().columnFilters.length > 0;
  return (
    <div className="flex gap-x-2">
      <Input
        placeholder="Filter contacts..."
        value={(table.getColumn("name")?.getFilterValue() as string) ?? ""}
        onChange={(event) => table.getColumn("name")?.setFilterValue(event.target.value)}
        className="flex h-8 w-[150px] gap-x-2 border-dashed border-slate-700 bg-slate-200 py-5 text-base hover:bg-slate-300 dark:border-slate-400 dark:bg-slate-500 dark:hover:bg-slate-700 lg:w-[250px]"
      />
      <AddContactButtonDataTable addContact={addContact} isUnique={isUnique} />
      {isFiltered && (
        <Button
          variant="ghost"
          onClick={() => table.resetColumnFilters()}
          className="flex h-8 w-fit gap-x-2 border-dashed border-slate-700 bg-slate-200 py-5 text-base hover:bg-slate-300 dark:border-slate-400 dark:bg-slate-500 dark:hover:bg-slate-700">
          Reset
          <RxCross2 className="ml-2 h-4 w-4" />
        </Button>
      )}
    </div>
  );
}
