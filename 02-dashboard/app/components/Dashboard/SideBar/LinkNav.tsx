"use client"

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { FC } from 'react'


interface Props {
  icon: React.ReactNode
  href: string
  title: string
  description: string
}
export const LinkNav: FC<Props> = ({ icon, href, title, description }) => {
  const pathname = usePathname()
  return (
    <Link href={href}
      className={`
        w-full 
        px-2 
        inline-flex 
        space-x-2 
        items-center 
        border-b 
        mb-2
        border-slate-700 
        py-3  ${pathname === href ? ' bg-blue-800 rounded-md' : 'rounded-none'} hover:bg-white/5 hover:rounded-md transition ease-linear duration-150`}>
      <div>
        {icon as React.ReactElement}
      </div>
      <div className="flex flex-col">
        <span className="text-lg font-bold leading-5 text-white">{title}</span>
        <span className="text-sm text-white/50 hidden md:block">{description}</span>
      </div>
    </Link>
  )
}
