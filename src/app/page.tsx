'use client'

import { useEffect } from 'react'
import dynamic from 'next/dynamic'

// 静的エクスポート用に動的インポートを最適化
const dynamicImportOptions = {
  loading: () => <div className="min-h-[50vh] flex items-center justify-center">読み込み中...</div>,
  ssr: false
}

// 動的インポート
const Header = dynamic(() => import('../components/layout/Header'), dynamicImportOptions)
const Hero = dynamic(() => import('../components/home/Hero'), dynamicImportOptions)
const About = dynamic(() => import('../components/home/About'), dynamicImportOptions)
const Services = dynamic(() => import('../components/home/Services'), dynamicImportOptions)
const News = dynamic(() => import('../components/home/News'), dynamicImportOptions)
const Company = dynamic(() => import('../components/home/Company'), dynamicImportOptions)
const Contact = dynamic(() => import('../components/home/Contact'), dynamicImportOptions)
const Footer = dynamic(() => import('../components/layout/Footer'), dynamicImportOptions)

export default function Home() {
  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (target.tagName === 'A' && target.getAttribute('href')?.startsWith('#')) {
        e.preventDefault()
        const targetId = target.getAttribute('href')
        if (targetId === '#') return
        
        if (!targetId) return; // targetIdがnullの場合は早期リターン
        const targetElement = document.querySelector(targetId)
        if (targetElement) {
          window.scrollTo({
            top: targetElement.getBoundingClientRect().top + window.pageYOffset - 80,
            behavior: 'smooth'
          })
        }
      }
    }

    document.addEventListener('click', handleAnchorClick as EventListener)
    return () => document.removeEventListener('click', handleAnchorClick as EventListener)
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