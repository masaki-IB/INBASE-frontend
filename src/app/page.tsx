'use client'

import { useEffect } from 'react'
import dynamic from 'next/dynamic'

// 動的インポート
const Header = dynamic(
  () => import('../components/layout/Header'), 
  { 
    loading: () => <div className="min-h-[50vh] flex items-center justify-center">読み込み中...</div>,
    ssr: false 
  }
)

const Hero = dynamic(
  () => import('../components/home/Hero'), 
  { 
    loading: () => <div className="min-h-[50vh] flex items-center justify-center">読み込み中...</div>,
    ssr: false 
  }
)

const About = dynamic(
  () => import('../components/home/About'), 
  { 
    loading: () => <div className="min-h-[50vh] flex items-center justify-center">読み込み中...</div>,
    ssr: false 
  }
)

const Services = dynamic(
  () => import('../components/home/Services'), 
  { 
    loading: () => <div className="min-h-[50vh] flex items-center justify-center">読み込み中...</div>,
    ssr: false 
  }
)

const News = dynamic(
  () => import('../components/home/News'), 
  { 
    loading: () => <div className="min-h-[50vh] flex items-center justify-center">読み込み中...</div>,
    ssr: false 
  }
)

const Company = dynamic(
  () => import('../components/home/Company'), 
  { 
    loading: () => <div className="min-h-[50vh] flex items-center justify-center">読み込み中...</div>,
    ssr: false 
  }
)

const Contact = dynamic(
  () => import('../components/home/Contact'), 
  { 
    loading: () => <div className="min-h-[50vh] flex items-center justify-center">読み込み中...</div>,
    ssr: false 
  }
)

const Footer = dynamic(
  () => import('../components/layout/Footer'), 
  { 
    loading: () => <div className="min-h-[50vh] flex items-center justify-center">読み込み中...</div>,
    ssr: false 
  }
)

export default function Home() {
  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (target.tagName === 'A' && target.getAttribute('href')?.startsWith('#')) {
        e.preventDefault()
        const targetId = target.getAttribute('href')
        if (targetId === '#') return
        
        if (targetId === '#' || !targetId.startsWith('#')) return;
        
        const targetElement = document.getElementById(targetId.slice(1));
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