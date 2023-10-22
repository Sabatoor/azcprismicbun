import { cn } from '@/lib/utils/cn'
import React, { HTMLAttributes } from 'react'

interface HeadingProps extends HTMLAttributes<HTMLHeadElement> {
  as: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
  size: 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl' | '7xl'
  className?: string
  children: React.ReactNode
}

export default function Heading({
  as: Comp,
  size,
  children,
  className,
  ...restProps
}: HeadingProps) {
  return (
    <Comp
      className={cn(
        'font-playfair font-bold text-center text-color-neutral',
        className,
        {
          'text-3xl leading-snug lg:text-4xl lg:leading-normal': size === '7xl',
          'text-2xl leading-snug lg:text-3xl lg:leading-normal': size === '6xl',
          'text-xl leading-normal lg:text-2xl': size === '5xl',
          'text-lg leading-normal lg:text-xl': size === '4xl',
          'text-md leading-normal lg:text-lg': size === '3xl',
          'text-sm leading-normal lg:text-md': size === '2xl',
          'text-xs leading-normal lg:text-sm': size === 'xl',
        }
      )}
      {...restProps}
    >
      {children}
    </Comp>
  )
}
