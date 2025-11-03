export async function tryShare({title, text, url}){
  if(navigator.share){
    try{ await navigator.share({title, text, url}); return true }catch(e){ return false }
  }
  return false
}

export function fbShareUrl(url){
  return `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`
}
