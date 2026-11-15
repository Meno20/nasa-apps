'use client'

/**
 * "Still Out There" — a scroll-driven cosmic museum.
 *
 * A forgotten satellite named Echo guides you backward through time, diving
 * deeper into space to meet eleven real machines humanity left among the stars.
 * The experience lives in a self-contained HTML file (public/still-out-there.html)
 * and is embedded here as a full-viewport, fullscreen iframe so the scroll-driven
 * "dive" mechanics work exactly as designed.
 */

export default function Home() {
  return (
    <iframe
      src="/still-out-there.html"
      title="Still Out There"
      style={{
        position: 'fixed',
        inset: 0,
        width: '100vw',
        height: '100vh',
        border: 'none',
        margin: 0,
        padding: 0,
        display: 'block',
      }}
      allow="autoplay; fullscreen"
    />
  )
}
