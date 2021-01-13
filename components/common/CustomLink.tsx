import React from 'react'
import Link from 'next/link'

interface CustomLink {
  href: string
  as: string
  children: React.ReactNode
}
const CustomLink = ({ href, as, children }: CustomLink) => (
  <Link href={href} as={as} passHref>
    <a>{children}</a>
  </Link>
)

export default CustomLink
