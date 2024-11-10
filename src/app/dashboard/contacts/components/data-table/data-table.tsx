"use client";

import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  Row,
  useReactTable,
} from "@tanstack/react-table";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { DataTablePagination } from "./data-table-pagination";
import { DataTableToolbar, DataTableToolbarProps } from "./data-table-tool-bar";

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
  onRowClick: (rowData: Row<TData>) => void;
  addContact: DataTableToolbarProps<TData>["addContact"];
  isUnique: DataTableToolbarProps<TData>["isUnique"];
}

export function DataTable<TData, TValue>({
  columns,
  data,
  onRowClick,
  isUnique,
  addContact,
}: DataTableProps<TData, TValue>) {
  const table = useReactTable({
    data,
    columns,
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <>
      <DataTableToolbar addContact={addContact} table={table} isUnique={isUnique} />
      <Table className="border-separate border-spacing-x-0 border-spacing-y-4 rounded-md">
        <TableHeader>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => {
                return (
                  <TableHead
                    key={header.id}
                    className="font-extrabold uppercase text-black dark:border-white dark:text-white">
                    {header.isPlaceholder
                      ? null
                      : flexRender(header.column.columnDef.header, header.getContext())}
                  </TableHead>
                );
              })}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody>
          {table.getRowModel().rows?.length ? (
            table.getRowModel().rows.map((row) => (
              <TableRow
                key={row.id}
                onClick={() => onRowClick(row)}
                data-state={row.getIsSelected() && "selected"}
                className="border border-slate-100 bg-gray-300 hover:cursor-pointer hover:bg-gray-400 dark:bg-slate-500 dark:hover:bg-slate-700">
                {row.getVisibleCells().map((cell, index) => {
                  const leftEndStyle = index === 0 && "rounded-tl-md rounded-bl-md";
                  const rightEndStyle =
                    index === row.getVisibleCells().length - 1 && "rounded-tr-md rounded-br-md";
                  return (
                    <TableCell
                      key={cell.id}
                      className={`p-6 sm:table-cell ${leftEndStyle} ${rightEndStyle}`}>
                      {flexRender(cell.column.columnDef.cell, cell.getContext())}
                    </TableCell>
                  );
                })}
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={columns.length} className="h-12 text-center">
                No results.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
      <DataTablePagination table={table} />
    </>
  );
}
