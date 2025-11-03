import React, {useEffect, useState} from 'react'
import Header from '../components/Header'
import Hero from '../components/Hero'
import CardGrid from '../components/CardGrid'

export default function Home(){
  const [cards, setCards] = useState([])

  useEffect(()=>{
    fetch('/src/api/mock/cards.json')
      .then(r=>r.json())
      .then(setCards)
      .catch(()=>setCards([]))
  },[])

  return (
    <div>
      <Header />
      <Hero />
      <main className="px-4 py-6">
        <h2 className="text-xl font-semibold mb-4">การ์ดตัวอย่าง</h2>
        <CardGrid cards={cards} />
      </main>
    </div>
  )
}
