'use client'
import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

export default function AnimationObserver() {
  const pathname = usePathname()

  useEffect(() => {
    if (typeof window === 'undefined' || typeof document === 'undefined') return

    // Immediately reveal elements if IntersectionObserver is not supported
    if (!('IntersectionObserver' in window)) {
      const elements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-down')
      elements.forEach((el) => el.classList.add('active'))
      return
    }

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active')
        }
      })
    }

    const observer = new IntersectionObserver(observerCallback, {
      threshold: 0.1,
      rootMargin: '0px 0px -20px 0px',
    })

    const elements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-down')
    elements.forEach((el) => observer.observe(el))

    return () => {
      elements.forEach((el) => observer.unobserve(el))
    }
  }, [pathname])

  return null
}
