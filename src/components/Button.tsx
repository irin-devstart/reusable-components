import clsx from 'clsx'
import React, { ButtonHTMLAttributes } from 'react'

type TVariant = "contained" | "outlined"

const variants: Record<TVariant, string> = {
  contained: "text-white bg-blue-500 hover:bg-blue-700 focus:ring-1 focus:ring-blue-300",
  outlined: "text-gray-500 bg-white focus:outline-none hover:bg-gray-100 hover:text-blue-500 focus:ring-1"
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: TVariant
}
const Button = ({ variant = 'contained', children, ...props }: ButtonProps) => {
  return (
    <button className={clsx(
      props.className,
      "font-medium rounded-lg text-sm px-8 py-2 mr-2",
      variants[variant],
    )}
    >
      {children}
    </button>
  )
}

export default Button