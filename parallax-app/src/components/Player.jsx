import React, {useRef} from 'react'

export default function Player({src}){
  const ref = useRef(null)
  const onPlay = ()=>{
    // pause other audio elements on the page
    document.querySelectorAll('audio').forEach(a=>{ if(a !== ref.current) a.pause() })
  }
  return (
    <div>
      <audio ref={ref} controls src={src} preload="none" onPlay={onPlay} className="w-48" />
    </div>
  )
}
