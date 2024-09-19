import React, { InputHTMLAttributes } from 'react'
import clsx from 'clsx'
interface TextFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  required?: boolean;
  helperText?: string;
  fullWitdh?: boolean;
  error?: boolean
}

const TextField = ({ label, required, helperText, fullWitdh, error, ...props }: TextFieldProps) => {
  return (
    <div>
      <label className='text-gray-500 block text-sm font-medium'>{label}
        {required && <span>*</span>}
      </label>
      <input {...props} className={clsx(props.className,
        "rounded p-2 outline-none border border-gray-500 text-sm shadow",
        error ? 'border-red-500 focus:ring-red-500 focus:border-red-500'
          : "focus:ring-blue-500 focus:border-blue-500",
        {
          'w-full': fullWitdh
        }

      )} />
      {error && <p className={clsx(error ? "text-red-500" : "text-gray-500")}>{helperText}</p>}
    </div>
  )
}

export default TextField