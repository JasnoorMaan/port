import React, { useEffect } from "react";
import gsap from "gsap";
import { Power2, Power3 } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./Hero.css";

const Hero = () => {
  useEffect(() => {
    const tl = gsap.timeline();
    gsap.registerPlugin(ScrollTrigger);

    ScrollTrigger.create({
      trigger: ".about-wrapper",
      start: "top 50%",
      end: "bottom 0%",

      onEnter: () => {
        gsap.to(".about-wrapper, .left-right", {
          duration: 1.0,
          backgroundColor: "#121212",
        });
      },

      onLeaveBack: () => {
        gsap.to(".about-wrapper, .left-right", {
          duration: 1.0,
          backgroundColor: "#D9D9D9",
        });
      },
    });
  }, []);

  return (
    <>
      <div className="left-right">
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
        <img className="me-img" src="/3.jpg" alt="me" />
      </div>

      <div className="about-wrapper">
        <div className="about-content">
          <h1 className="about-headings">ABOUT ME</h1>
        </div>

        <div className="about-wriiten-box">
          <p className="about-written">
            I am a passionate front-end developer, dedicated to delivering
            exceptional websites. To me, websites are more than just design;
            they're the storytellers of a product, narrating the solutions they
            offer to users. Whether it's crafting a user-friendly interface✨,
            optimizing web performance, or staying up-to-date with the latest
            web technologies, I enjoy turning complex problems into simple,
            beautiful, and intuitive designs. Let's work together to create
            something amazing!🚀
          </p>
        </div>
      </div>

      
      
      
      <div className="marquee-con">
      <div className="marquee-slider">
        <h1>Software Developer ✨ Freelancer ✨ UI/UX Designer</h1>
        </div>
        <span>   </span> 
        <div className="marquee-slider">
        <h1>Software Developer ✨ Freelancer ✨ UI/UX Designer</h1>
        </div>
      </div>

      
      
      
      <div className="headContainer">
        <h1 className="about-headings-skill">Skills</h1>
      </div>
      <div className="skill-con">
        <div className="skill-wrap">
          <div className="skillBox">
            <h1 className="skill-box-head">Languages</h1>
            <ul className="skillList">
              <li>C/C++</li>
              <li>HTML & CSS</li>
              <li>Javascript</li>
              <li>Typescript</li>
              <li>Python</li>
              <li>SQL</li>
            </ul>
          </div>
          <div className="skillBox">
            <h1 className="skill-box-head">Libraries/Frameworks</h1>
            <ul className="skillList">
              <li>React.js</li>
              <li>Next.js</li>
              <li>Node.js</li>
              <li>Astro</li>
            </ul>
          </div>
          <div className="skillBox">
            <h1 className="skill-box-head">Technologies</h1>
            <ul className="skillList">
              <li>Figma</li>
              <li>Git and Github</li>
              <li>Vite</li>
              <li>NPM</li>
              <li>Postman</li>
              <li>TailwindCSS</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
