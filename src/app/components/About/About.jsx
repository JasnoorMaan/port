"use client";
import React from "react";
import gsap from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import './About.css'

const About = () => {

    
    gsap.registerPlugin(ScrollTrigger);
    const t1=gsap.timeline({
        scrollTrigger:{
            trigger:".about-wrapper",
            start:".about-wrapper",
            end:"+=500px",
            scrub:true,
            markers:true,
        }
    });
    return (
    <div className="about-wrapper">
      <div className="about-content">
        <p className="about-written">
          Dolore eiusmod dolore tempor sunt tempor exercitation et consequat
          tempor sit sint ex nulla ad. Culpa cupidatat elit mollit id fugiat
          aliqua laboris adipisicing voluptate dolore proident. Lorem nulla
          incididunt voluptate pariatur officia voluptate aliquip ad. 
          Nostrud quis ex esse qui incididunt pariatur laborum ipsum id. Ipsum ut duis
          magna labore quis nulla ut. Tempor nulla ullamco mollit ex consectetur
          tempor elit. 
          <br/>Qui nulla cupidatat officia irure enim ad elit commodo.
          Occaecat Lorem ea in nostrud. Ullamco ad magna quis sint do
          incididunt. Ea proident voluptate sit enim id sit laborum nostrud qui
          velit. Magna mollit labore laborum proident. Fugiat irure voluptate
          aliqua occaecat non eiusmod magna ullamco cupidatat reprehenderit ut.
        </p>
      </div>
    </div>
  );
};

export default About;
