import clsx from 'clsx'
import React, { ImgHTMLAttributes } from 'react'

type Tsize = 'small' | 'medium' | 'large'


const sizes: Record<Tsize, string> = {
  small: 'h-[2em]',
  medium: 'h-[3em]',
  large: 'h-[4em]'
}

interface ImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  size?: Tsize
}
const Image = ({ size = 'small', className, ...props }: ImageProps) => {
  return (
    <img
      {...props}
      className={clsx(className, sizes[size])}
    />
  )
}

export default Image