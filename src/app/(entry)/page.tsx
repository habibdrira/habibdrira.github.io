'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function EntryPage() {
  const router = useRouter()
  useEffect(() => {
    router.replace('/fr/')
  }, [router])
  return (
    <div style={{ display: 'grid', placeItems: 'center', height: '100vh', fontFamily: 'sans-serif', background: '#111719', color: '#eeeee8' }}>
      <p>Redirection vers <a style={{ color: '#b4d4e8' }} href="/fr/">/fr/</a>...</p>
    </div>
  )
}
