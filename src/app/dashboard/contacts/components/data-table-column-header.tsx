import { cn } from "@/lib/utils";

interface DataTableColumnHeaderProps<TData, TValue> extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
}

export function DataTableColumnHeader<TData, TValue>({
  title,
  className,
}: DataTableColumnHeaderProps<TData, TValue>) {
  return <div className={cn(className, "text-base")}>{title}</div>;
}