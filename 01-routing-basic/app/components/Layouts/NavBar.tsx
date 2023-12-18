'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'
import React from 'react'
import { ButtonLayout } from '.'




const linkNavBar = [
  {
    name: 'Home',
    href: '/',
  },
  {
    name: 'Blog',
    href: '/blog',
  },
  {
    name: 'About',
    href: '/about',
  },
  {
    name: 'Contact',
    href: '/contact',
  },
]
export const NavBar = () => {
  const pathName = usePathname()

  return (
    <nav className="bg-gray-800 p-4 text-white">
      <div className="container mx-auto flex items-center justify-between flex-wrap">
        <h1 className="text-2xl font-bold">Routing | NextJS</h1>
        <div>
          {
            linkNavBar.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                className={`mx-2 hover:underline ${pathName === link.href ? 'text-yellow-400' : ''}`}
              >
                {link.name}
              </Link>
            ))

          }
          <ButtonLayout />
        </div>
      </div>
    </nav>
  )
}
