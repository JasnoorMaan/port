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
import CursorPointer from './components/Cursor';


export default function Home() {
  const [x, setX] = useState(0)
  const [y, setY] = useState(0)
  useEffect(() => {
    const handleMouseMovement = (e) => {
      setX(e.clientX)
      setY(e.clientY)
    }
    document.addEventListener('mousemove', handleMouseMovement);
    return () => {
      document.removeEventListener('mousemove', handleMouseMovement);
    }
  }, [x, y])
  useEffect( ()=>{
    (
      async()=>{
        const LocomotiveScroll=(await import('locomotive-scroll')).default
        const locomotiveScroll= new LocomotiveScroll();
      }
    )()
  },[])


  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3800);
  }, []);

  return (
    <>
    <CursorPointer 
     x={x}
     y={y}
     />
    <div className="container">
      {loading ? (
        <div className="loader-container">
            <Loading />
        </div>
      ) : (
        <div className="main-container">
    <NavBar />
    <Hero />
    <Projects />
    </div>
      )}
    </div>
    </>
  )
}
