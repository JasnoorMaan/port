import React, { useEffect,useRef } from "react";
import gsap from "gsap";
import { Power2, Power3, Expo } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from 'split-type'
import './NavBar.css'


const NavBar = () => {
  const navRef=useRef(null);
  useEffect(()=>{
    const nevi= gsap.fromTo(navRef.current,{
      y:'-100%',
    },{
      y:0,
      delay:3,
      ease:'Power4.easeOut'
    });
  },[])
  return (
    <>
    <nav className='nav-wrapper'>
      <div ref={navRef} className='nav-links'>
        <a href="#aboutt">ABOUT</a>
        <a href="#projectt">PROJECTS</a>
        <a href="#contactt">CONTACT</a>
      </div>
      
    </nav>
    <hr
    style={{
      background: '#111',
      color: '#111',
      height: '2px',
    }}
  />
  </>
  )
}

export default NavBar;