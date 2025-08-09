'use client'

import { useEffect } from 'react'
import dynamic from 'next/dynamic'

// 動的インポート
const Header = dynamic(() => import('../components/layout/Header'), { ssr: false })
const Hero = dynamic(() => import('../components/home/Hero'), { ssr: false })
const About = dynamic(() => import('../components/home/About'), { ssr: false })
const Services = dynamic(() => import('../components/home/Services'), { ssr: false })
const News = dynamic(() => import('../components/home/News'), { ssr: false })
const Company = dynamic(() => import('../components/home/Company'), { ssr: false })
const Contact = dynamic(() => import('../components/home/Contact'), { ssr: false })
const Footer = dynamic(() => import('../components/layout/Footer'), { ssr: false })

export default function Home() {
  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (target.tagName === 'A' && target.getAttribute('href')?.startsWith('#')) {
        e.preventDefault()
        const targetId = target.getAttribute('href')
        if (targetId === '#') return
        
        const targetElement = document.querySelector(targetId)
        if (targetElement) {
          window.scrollTo({
            top: targetElement.getBoundingClientRect().top + window.pageYOffset - 80,
            behavior: 'smooth'
          })
        }
      }
    }

    document.addEventListener('click', handleAnchorClick)
    return () => document.removeEventListener('click', handleAnchorClick)
  }, [])

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <About />
        <Services />
        <News />
        <Company />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}