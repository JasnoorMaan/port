"use client"
import Image from 'next/image'
import dynamic from 'next/dynamic';

import {useEffect, useState} from 'react'
import styles from './page.module.css'
import Hero from './components/Hero/Hero'
import Loading from './components/Loading/Loading'
import Loader from './components/Loading/Loader'
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
    <Loading />
    <div className='main-container'>
    <NavBar />
    <Hero />

    <Projects />
    </div>
    </>
  )
}
