"use client"
import Image from 'next/image'
import {useEffect} from 'react'
import styles from './page.module.css'
import Hero from './components/Hero/Hero'
import Loading from './components/Loading/Loading'
import Projects from './components/Proj/Projects' 
import NavBar from './components/NavBar/NavBar'



export default function Home() {
  useEffect( ()=>{
    (
      async()=>{
        const LocomotiveScroll=(await import('locomotive-scroll')).default
        const locomotiveScroll= new LocomotiveScroll();
      }
    )()
  },[])
  
  return (
    <>
    
    <NavBar />
    <Hero />
    <Projects />
    </>
  )
}
