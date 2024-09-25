import clsx from "clsx";
import React from "react";

interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  required?: boolean;
  helperText?: string;
}
const Textarea = ({
  label,
  required,
  className,
  helperText,
  rows = 5,
  ...props
}: TextareaProps) => {
  return (
    <div className="w-full flex flex-col gap-y-2">
      <label htmlFor={props.id} className="block">
        {label}
        {required && <span className="font-bold">*</span>}
      </label>
      <textarea
        {...props}
        rows={rows}
        className={clsx(
          className,
          "w-full border border-gray-300 outline-none focus:border-blue-500 rounded focus:ring-blue-500 p-2 text-sm ring-1 "
        )}
      />
      {helperText && <span className="text-xs">{helperText}</span>}
    </div>
  );
};

export default Textarea;
