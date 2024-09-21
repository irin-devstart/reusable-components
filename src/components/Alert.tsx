import clsx from 'clsx';
import React, { HTMLAttributes } from 'react'

type TVariant = "error" | "success" | 'warning' | 'info'

const variants: Record<TVariant, string> = {
  error: 'bg-red-400',
  success: 'bg-green-400',
  info: 'bg-blue-400',
  warning: 'bg-yellow-400'
}
interface AlertProps extends HTMLAttributes<HTMLDivElement> {
  variant: TVariant
  title: string;
  description: string

}
const Alert = ({ variant, title, description, className, ...props }: AlertProps) => {
  return (
    <div
      {...props}
      className={clsx(className, "flex flex-col gap-2 py-2 px-4 rounded-md", variants[variant])}
    >
      <h6 className='text-lg font-medium'>{title}</h6>
      <p className='text-gray-600'>{description}</p>

    </div>
  )
}

export default Alert