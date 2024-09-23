import clsx from 'clsx'
import React, { HTMLAttributes } from 'react'

type TSize = 'small' | 'medium' | 'large'
const sizes: Record<TSize, string> = {
  small: 'h-[2em]',
  medium: 'h-[3em]',
  large: 'h-[4em]',
}


interface SkeletonProps extends HTMLAttributes<HTMLDivElement> {
  size?: TSize
}
const Skeleton = ({ size = 'small', className, ...props }: SkeletonProps) => {
  return (
    <div {...props}
      className={clsx(className, sizes[size], 'bg-gray-400 rounded animate-pulse')}
    />
  )
}

export default Skeleton