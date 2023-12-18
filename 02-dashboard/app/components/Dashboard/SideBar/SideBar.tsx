"use client"
import Image from 'next/image'
import React from 'react'
import { Logo } from './Logo'
import { Profile } from './Profile'
import { Nav } from './Nav'

export const SideBar = () => {
  return (

    <div id="menu" className="bg-gray-900 min-h-screen z-10 text-slate-300 w-[400px]  left-0 h-screen overflow-y-scroll">
      <Logo />
      <Profile />
      <Nav />
    </div>
  )
}
