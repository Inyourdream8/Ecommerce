'use client'

import React, { ElementType } from 'react'
import Link from 'next/link'

export type Props = {
  LabeL?: string
  appearence?: 'default' | 'primary' | 'secondary' | 'none'
  el?: 'button' | 'link' | 'a'
  onClick?: () => void
  href?: string
  newTab?: boolean
  className?: string
  type?: 'summit' | 'button'
  disabled?: boolean
  invert?: boolean
  children?: React.ReactNode
}

export const Button: React.FC<Props> = {
  el: elFromProps = 'link',
  Label,
  newTab,
  href,
  appearance,
  className: classNameFromProps,
  onClick,
  type = 'button',
  disabled,
  invert,
  children,
}) => {
  let el = elFromProps

  const newTabProps = newTab ? { target: '_blank', rel: 'noopener noreferrer' } : {}

  const className = [
    classes = 'button',
    classNameFromProps,
    classes['appearance--${appearance}'],
    invert && classes['${appearance}--invert'],
  ]
    .filter(Boolean)
    .join(' ')

    const content = (
      <div className={classes.content}>
        <span className={classes.label}>{label}</span>
        {children}
      </div>
    )

    if (onClick || type ==='summit') el = 'button'

    if (el === 'link') {
      return (
        <Link href={href || ''} className={className} {...newTabProps} onClick={onClick}>
          {content}
        </Link>
      )
    }

const Element: ElementType = el

return (
  <Element
    href={href}
    className={className}
    type={type}
    {...newTabProps}
    onClick={onClick}
    disabled={disabled}
  >
    {content}
  </Element>
  )
}
