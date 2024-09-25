import React from "react";

interface SelectProps<TData>
  extends Omit<React.SelectHTMLAttributes<HTMLSelectElement>, "onChange"> {
  options: Array<TData>;
  label: string;
  getOptionLabel: (option: TData) => string;
  onChange: (event: React.ChangeEvent<HTMLSelectElement>, value: TData) => void;
}
const Select = <TData,>({
  options,
  label,
  getOptionLabel,
  onChange,
  name,
  ...props
}: SelectProps<TData>) => {
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = options.find(
      (option) => getOptionLabel(option) === event.target.value
    ) as TData;
    onChange(event, selectedValue);
  };
  return (
    <div className="flex flex-col gap-y-2 w-full">
      <label htmlFor={name} className="block text-sm font-medium">
        {label}
      </label>
      <select
        id={name}
        {...props}
        onChange={handleChange}
        className="border border-gray-300 outline-none rounded-md px-3 py-2 w-full focus:ring-blue-500 text-sm font-medium focus:border-blue-500"
      >
        {options.map((option) => (
          <option value={getOptionLabel(option)}>
            {getOptionLabel(option)}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
