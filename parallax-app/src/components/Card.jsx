import React from 'react'
import Player from './Player'
import ShareMenu from './ShareMenu'

export default function Card({card}){
  return (
    <article className="bg-white rounded-lg overflow-hidden shadow-sm">
      <img src={card.image} alt={card.title} className="w-full h-40 object-cover" />
      <div className="p-3">
        <h3 className="font-semibold">{card.title}</h3>
        <p className="text-sm text-gray-600 mt-1">{card.excerpt}</p>
        <div className="mt-3 flex items-center justify-between">
          {card.audio ? <Player src={card.audio} /> : <a href={card.contentUrl} className="text-indigo-600">อ่านต่อ</a>}
          <ShareMenu card={card} />
        </div>
      </div>
    </article>
  )
}
