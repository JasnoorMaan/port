"use client";
import React from "react";
import { useEffect, useState, useRef } from "react";
import { gsap, Expo, Power3 } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./Projects.css";
import projImages from "../images";

const Projects = () => {
  const trigRef = useRef(null);
  const sectRef = useRef(null);

  gsap.registerPlugin(ScrollTrigger);
  useEffect(() => {
    const anim = gsap.fromTo(
      sectRef.current,
      {
        translateX: 0,
      },
      {
        translateX: "-300vw",
        ease: "none",
        duration: 1,
        scrollTrigger: {
          trigger: trigRef.current,
          start: "top top",
          end: "2000 top",
          damp: 0.3,
          scrub: 0.6,
          pin: true,
        },
      }
    );
    return () => {
      {
      }
      anim.kill();
    };
  }, []);
  return (
    <>
      <section className="scroll-container">
        <div ref={trigRef}>
          <div ref={sectRef} className="scroll-inner">
            <div className="scroll-section">
              <h1 className="proj-headings">Featured Projects</h1>
              <button></button>
            </div>

            <div className="scroll-section">
              <img src="/project1.svg" alt="proj1" />
              <h1 className="proj-title">ConferenceAPI Website</h1>
            </div>

            <div className="scroll-section">
              <img src="/project2.svg" alt="proj1" />
              <h1 className="proj-title">Startup Website Design</h1>
            </div>

            <div className="scroll-section">
              <img src="/project3.png" alt="proj1" />
              <h1 className="proj-title">Hackathon Website</h1>
            </div>
          </div>
        </div>
      </section>

      <section className="footer-container">
        <div className="touch-heading">
          <button className="touch-button">Let's get in touch✌️</button>
        </div>
        <div className="social-links">
          <ul className="social-list">
            <li className="list-item">jasnoorm0001@gmail.com</li>
            <li className="list-item">Github</li>
            <li className="list-item">Linkedin</li>
            <li className="list-item">Twitter</li>
          </ul>
        </div>
      </section>
      <section className="last">
        <p className="last-line">Designed and Developed by me</p>
        <span>&#169; {new Date().getFullYear()}</span>
      </section>
    </>
  );
};

export default Projects;
