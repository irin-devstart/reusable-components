import clsx from "clsx";
import React, { TableHTMLAttributes } from "react";

export interface TTableColumn<TData> {
  id: keyof TData;
  label: string;
  setContent: (data: TData, index?: number) => React.ReactNode;
  align?: "left" | "center" | "right" | "justify";
  width?: string;
}
interface TableProps<TData> extends TableHTMLAttributes<HTMLTableElement> {
  isLoading: boolean;
  data: Array<TData>;
  columns: Array<TTableColumn<TData>>;
}
const Table = <TData,>({
  isLoading,
  data,
  columns,
  className,
  ...props
}: TableProps<TData>) => {
  return (
    <table
      {...props}
      className={clsx(className, "shadow text-left rounded w-[70%]")}
    >
      <thead>
        <tr className="border-b">
          {columns.map((column) => {
            const { id, label, ...props } = column;
            return (
              <th key={id.toString()} {...props} className="py-2 px-6">
                {label}
              </th>
            );
          })}
        </tr>
      </thead>
      <tbody>
        {isLoading ? (
          <tr>
            <td colSpan={columns.length}>Loading ...</td>
          </tr>
        ) : (
          data.map((dt, index) => (
            <tr key={index}>
              {columns.map((column) => {
                const { id, setContent, ...props } = column;
                return (
                  <td key={id.toString()} {...props} className="py-2 px-6">
                    {setContent(dt, index)}
                  </td>
                );
              })}
            </tr>
          ))
        )}
      </tbody>
    </table>
  );
};

export default Table;
