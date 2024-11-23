'use client'

import { ReactNode } from 'react'
import { CopyButton } from './CopyButton'

import './pre.style.css'

export default function Pre({
  children,
  raw,
  className = '',
  buttonClasses = 'absolute top-3 right-3 bg-zinc-900',
  ...props
}: {
  children: ReactNode
  raw: string
  buttonClasses: string
  className: string
}) {
  return (
    <pre {...props} className={`custom-pre scrollable-height ${className}`}>
      {children}
      <CopyButton text={raw} className="buttonClasses" />
    </pre>
  )
}
