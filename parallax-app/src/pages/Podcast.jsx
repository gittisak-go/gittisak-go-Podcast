import React from 'react'
import Header from '../components/Header'

export default function Podcast(){
  return (
    <div>
      <Header />
      <main className="px-4 py-6">
        <h1 className="text-2xl font-bold mb-4">รายการพอดแคสต์</h1>
        <p>หน้านี้จะเป็นรายการตอน — ขยับเป็นรายละเอียดต่อไปได้</p>
      </main>
    </div>
  )
}
