import React, { useEffect } from "react";
import gsap from "gsap";
import { Power2, Power3 } from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import "./Hero.css";

const Hero = () => {
  useEffect(() => {
    const tl = gsap.timeline();
    gsap.registerPlugin(ScrollTrigger);


    ScrollTrigger.create({
   
      trigger: '.about-wrapper',
      start:"top 50%",
      end:"bottom 0%", 
    
      onEnter: () => {
        gsap.to('.about-wrapper, .hero-container', { duration: 1.0, backgroundColor: '#121212'})
      },
      
      onLeaveBack: () => {
        gsap.to('.about-wrapper,.hero-container', { duration: 1.0, backgroundColor: '#f5f5f5'})
      },
    
      
    })
  }, []);

  

  return (
    <>
      <div className="hero-container">
        <h1 className="hero-headingg">
          Jasnoor <br />
          Maan
        </h1>
        <p className="hero-desc">
          A FRONTEND DEVELOPER AND DESIGNER
          <br />
          THIRD YEAR ENGINEERING STUDENT AT NITJ <br />
          BASED IN JALANDHAR
        </p>
        </div>
        
      <div className="about-wrapper">
        <div className="about-content">
          <p className="about-written">
            Dolore eiusmod dolore tempor sunt tempor exercitation et consequat
            tempor sit sint ex nulla ad. Culpa cupidatat elit mollit id fugiat
            aliqua laboris adipisicing voluptate dolore proident. Lorem nulla
            incididunt voluptate pariatur officia voluptate aliquip ad. Nostrud
            quis ex esse qui incididunt pariatur laborum ipsum id. Ipsum ut duis
            magna labore quis nulla ut. Tempor nulla ullamco mollit ex
            consectetur tempor elit.
            <br />
            Qui nulla cupidatat officia irure enim ad elit commodo. Occaecat
            Lorem ea in nostrud. Ullamco ad magna quis sint do incididunt. Ea
            proident voluptate sit enim id sit laborum nostrud qui velit. Magna
            mollit labore laborum proident. Fugiat irure voluptate aliqua
            occaecat non eiusmod magna ullamco cupidatat reprehenderit ut.
          </p>
        </div>
      </div>
    </>
  );
};

export default Hero;
