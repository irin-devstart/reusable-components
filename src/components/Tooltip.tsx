import clsx from 'clsx'
import React from 'react'

interface TooltipProps {
  label: React.ReactNode
  children: React.ReactNode
}
const Tooltip = ({ children, label }: TooltipProps) => {
  const [isHover, setIsHover] = React.useState(false)
  return (
    <div className='flex flex-col items-center'>
      <div
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}>
        {children}
      </div>
      <div className={clsx('bg-white shadow m-2 transition border rounded p-3 ease-in', isHover ? "opacity-[1]" : "opacity-0")}>{label}</div>
    </div>
  )
}

export default Tooltip