import React from "react";

interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}
const Checkbox = ({ label, ...props }: CheckboxProps) => {
  return (
    <div className="flex items-center gap-x-2">
      <input
        {...props}
        type="checkbox"
        className="rounded focus:ring-blue-500 focus:border-blue-500"
      />
      <label htmlFor={props.id}>{label}</label>
    </div>
  );
};

export default Checkbox;
