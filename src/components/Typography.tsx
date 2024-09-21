import clsx from 'clsx';
import React from 'react'


type TVariant = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'span' | 'p'

type TSize = 'small' | 'medium' | 'large'


const sizes: Record<TSize, string> = {
  large: 'text-[2em]',
  medium: 'text-[1.5em]',
  small: 'text-[1em]'
}



interface TypographyProps {
  variant?: TVariant
  className?: string;
  children: React.ReactNode
  size?: TSize
}


const Typography = ({ children, className, variant = 'h1', size = 'medium' }: TypographyProps) => {
  const Element = variant
  return (
    <Element className={clsx(className, sizes[size])}>{children}</Element>
  )
}

export default Typography