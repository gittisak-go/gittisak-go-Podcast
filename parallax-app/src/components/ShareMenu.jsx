import React from 'react'

function copyToClipboard(text){
  if(navigator.clipboard) return navigator.clipboard.writeText(text)
  const ta = document.createElement('textarea'); ta.value = text; document.body.appendChild(ta); ta.select(); document.execCommand('copy'); ta.remove();
}

export default function ShareMenu({card}){
  const url = card.contentUrl || window.location.href

  const onShare = async ()=>{
    if(navigator.share){
      try{ await navigator.share({ title: card.title, text: card.excerpt, url }) }catch(e){}
    } else {
      // fallback: open facebook share and copy
      const fb = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`
      window.open(fb, '_blank')
      copyToClipboard(url)
      alert('ลิงก์ถูกคัดลอกแล้ว (fallback)')
    }
  }

  return (
    <button onClick={onShare} className="text-sm text-gray-700 underline">แชร์</button>
  )
}
