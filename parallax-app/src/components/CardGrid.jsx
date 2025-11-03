import React from 'react'
import Card from './Card'

export default function CardGrid({cards}){
  if(!cards || cards.length === 0){
    return <div className="text-gray-500">ยังไม่มีการ์ดให้แสดง</div>
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {cards.map(c => (
        <Card key={c.id} card={c} />
      ))}
    </div>
  )
}
