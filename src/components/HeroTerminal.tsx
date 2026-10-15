'use client'

import { useEffect, useState } from 'react'

export type TerminalFrame = { command: string; lines: { label: string; value: string }[] }

export function HeroTerminal({ frames, locale }: { frames: TerminalFrame[]; locale: 'fr' | 'en' }) {
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)
  const fr = locale === 'fr'
  useEffect(() => {
    const motion = window.matchMedia('(prefers-reduced-motion: reduce)')
    let timer: ReturnType<typeof setInterval> | undefined
    function sync() {
      clearInterval(timer)
      if (!paused && !motion.matches) timer = setInterval(() => setIndex(current => (current + 1) % frames.length), 8500)
    }
    sync()
    motion.addEventListener('change', sync)
    return () => { clearInterval(timer); motion.removeEventListener('change', sync) }
  }, [paused, frames.length])

  const frame = frames[index % frames.length]
  return <aside className={`hero-terminal${paused ? ' is-paused' : ''}`} aria-label={fr ? 'Terminal de présentation' : 'Profile terminal'}>
    <div className="terminal-bar"><span className="terminal-lights" aria-hidden="true"><i /><i /><i /></span><span>habib@portfolio:~</span><button className="terminal-toggle" type="button" onClick={() => setPaused(value => !value)} aria-pressed={paused} aria-label={fr ? (paused ? 'Reprendre l’animation' : 'Mettre l’animation en pause') : (paused ? 'Resume animation' : 'Pause animation')}>{paused ? '▶' : 'Ⅱ'}</button></div>
    <div className="terminal-screen" key={frame.command} aria-live="off">
      <div className="terminal-command"><span aria-hidden="true">$</span><code>{frame.command}</code></div>
      <dl className="terminal-output">{frame.lines.map((line, row) => <div key={`${row}-${line.label}`} style={{ animationDelay: `${1.4 + row * 0.35}s` }}><dt>{line.label}</dt><dd>{line.value}</dd></div>)}</dl>
      <div className="terminal-prompt" aria-hidden="true">❯ <span /></div>
    </div>
    <div className="terminal-footer"><span>{fr ? 'Profil · compétences · projets' : 'Profile · skills · projects'}</span><span aria-hidden="true">{String(index + 1).padStart(2, '0')} / {String(frames.length).padStart(2, '0')}</span></div>
  </aside>
}
