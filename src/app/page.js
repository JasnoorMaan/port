"use client"
import Image from 'next/image'
import {useEffect} from 'react'
import styles from './page.module.css'
import Hero from './components/Hero/Hero'
import NavBar from './components/NavBar/NavBar'
import Loading from './components/Loading/Loading'


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
    <Loading />
    <Hero />
    </>
  )
}
