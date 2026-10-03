'use client'
import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

export default function AnimationObserver() {
  const pathname = usePathname()

  useEffect(() => {
    const observerCallback = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active')
        }
      })
    }

    const observer = new IntersectionObserver(observerCallback, {
      threshold: 0.12,
      rootMargin: '0px 0px -40px 0px',
    })

    const elements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-down')
    elements.forEach((el) => observer.observe(el))

    return () => {
      elements.forEach((el) => observer.unobserve(el))
    }
  }, [pathname])

  return null
}
