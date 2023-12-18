"use client"
import React from 'react'
import { LinkNav } from './LinkNav'
import { IoBrowsersOutline, IoCalculator } from "react-icons/io5";

const arrayLinkNav = [
  {
    href: "/dashboard",
    title: "Dashboard",
    description: "Manage your clients",
    icon: <IoBrowsersOutline size={40} />,
    id: "dashboard"
  },
  {
    href: "/dashboard/counter",
    title: "Counter",
    description: "Count your numbers",
    icon: <IoCalculator size={40} />,
    id: "counter"
  }
]

export const Nav = () => {
  return (
    <div id="nav" className="w-full px-6">
      {arrayLinkNav.map((link) => (
        <LinkNav key={link.id} {...link} />
      ))}
    </div>
  )
}
