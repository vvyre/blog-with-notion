'use client'
import { useEffect, useRef } from 'react'
import { Btn } from '../../../basics/button/btn'
import { LOGO } from './about-btn.css'
import { useBackgroundStore } from '../../background/store'
export function AboutBtn({ ...props }) {
  const profileButtonRef = useRef<HTMLButtonElement>(null)
  const addRef = useBackgroundStore(state => state.addRef)

  useEffect(() => {
    addRef('profileBtn', profileButtonRef)
  }, [profileButtonRef.current])

  return (
    <Btn
      ref={profileButtonRef}
      className={LOGO}
      aria-label="About Me"
      {...props}
    >
      Brewcold
    </Btn>
  )
}
