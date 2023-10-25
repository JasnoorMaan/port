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

  const ballRef1 = useRef(null);
  const ballRef2 = useRef(null);

  gsap.registerPlugin(ScrollTrigger);
  useEffect(() => {
    const balls = gsap.fromTo(
      ballRef1.current,
      {
        y: 0,
        rotate: 720,
        ease: Power3.easeIn,
      },
      {
        translateY: -300,
        scrollTrigger: {
          trigger: ballRef1.current,
          start: "top top",
          end: "bottom bottom",
          scrub: true,
        },
      }
    );
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
          drag: 0.3,
          scrub: true,
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
            <div className="project-section-title">
              <img
                ref={ballRef1}
                className="ball-img"
                src="/ball2.svg"
                alt="syymbols"
              />

              <h1 className="proj-headings">
                Featured
                <br />
                Projects
              </h1>

              <img
                ref={ballRef2}
                className="ball-img"
                src="/ball1.svg"
                alt="syymbols"
              />
            </div>

            <div className="scroll-section">
              <img className="proj-img" src="/project1.svg" alt="proj1" />

              <div className="button-containers">
                <h1 className="proj-title">ConferenceAPI Website</h1>
                <div className="but-contain">
                  <button className="button-skills">Hackathon winner🏆</button>
                  <button className="button-skills">React</button>
                  <button className="button-skills">API</button>
                  <button className="button-skills">Figma</button>
                </div>
              </div>
            </div>

            <div className="scroll-section">
              <img className="proj-img" src="/project2.svg" alt="proj1" />

              <div className="button-containers">
                <h1 className="proj-title">Startup Website Design</h1>
                <div className="but-contain">
                  <button className="button-skills">Figma</button>
                  <button className="button-skills">Web Design</button>
                </div>
              </div>
            </div>

            <div className="scroll-section">
              <img className="proj-img" src="/project3.png" alt="proj1" />

              <div className="button-containers">
                <h1 className="proj-title">Hackathon Website</h1>
                <div className="but-contain">
                  <button className="button-skills">NextJS</button>
                  <button className="button-skills">Figma</button>
                  <button className="button-skills">TailwindCSS</button>
                </div>
              </div>
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
