"use client"
import React from 'react'
import { ImageComponent } from '../..'

export const Profile = () => {
  return (
    <div id="profile" className="px-6 py-10">
      <p className="text-slate-500">Welcome back,</p>
      <a href="#" className="inline-flex space-x-2 items-center">
        <span>
          <ImageComponent
            className="rounded-full w-8 h-8"
            src="https://images.unsplash.com/photo-1542909168-82c3e7fdca5c"
            alt=""
            width={50}
            height={50} />
        </span>
        <span className="text-sm md:text-base font-bold">
          Edward Tompson
        </span>
      </a>
    </div>
  )
}
