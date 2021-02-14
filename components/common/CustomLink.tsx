import React from 'react'
import Link from 'next/link'

interface CustomLinkProps {
  href: string
  as: string
  children: React.ReactNode
  className?: string
}
const CustomLink = ({ href, as, children, className }: CustomLinkProps) => (
  <Link href={href} as={as} passHref>
    <a className={className || ''}>{children}</a>
  </Link>
)

export default CustomLink
