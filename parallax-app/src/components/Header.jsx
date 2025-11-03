import React from 'react'
import { Link } from 'react-router-dom'

export default function Header(){
  return (
    <header className="bg-white shadow-sm sticky top-0 z-20">
      <div className="max-w-3xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="font-bold">Parallax Pod</Link>
        <nav>
          <Link to="/" className="mr-4 text-sm">หน้าแรก</Link>
          <Link to="/podcast" className="text-sm">Podcast</Link>
        </nav>
      </div>
    </header>
  )
}
