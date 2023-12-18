import React from 'react'


import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Dashboard - Next.js',
}

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <section>
      {/* <nav>
        Navegación del Dashboard
      </nav> */}
      <main className="flex flex-col items-center justify-between p-24">
        {children}
      </main>
    </section>
  )
}

export default DashboardLayout