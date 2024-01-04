import React, { useEffect,useRef } from "react";
import gsap from "gsap";
import { Power2, Power3, Expo } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./Hero.css";
import SplitType from 'split-type'

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

  const target = useRef(null);
  const target1 = useRef(null);
  const target2 = useRef(null);
  const target3 = useRef(null);
  const descRef=useRef(null);

  useEffect(() => {
    if (target.current) {
      gsap.set('.hero-headingg', { visibility: "visible" });
      const text = new SplitType('.hero-headingg');
      gsap.to(text.chars, {
        y: 0,
        delay:3,
        stagger: {
          from: "bottom",
          each: 0.03
        },
        duration: 1,
        ease: "Power4.easeOut"
      });
    }
  }, [target]);
  useEffect(() => {
      gsap.fromTo(target1.current, {
        opacity: 0,
        scale:1.5,
        duration: 4,
        ease: "Power4.easeOut"
      },{
        opacity:1,
        delay:5,
        scale:1
      });
  }, [target1]);
  useEffect(() => {
    gsap.fromTo(descRef.current, {
      duration: 3,
      x:'-100%'
    },{
      x:0,
      delay:6,
      ease: "Power4.out"
    });
}, [descRef]);

useEffect(() => {
  const aboutTextTl = gsap.timeline({
    scrollTrigger: {
      trigger: ".about-headings",
      start: "top bottom",
      end: "bottom 0%",
  
    },
  });

  if (target2.current) {
    gsap.set('.about-headings', { visibility: "visible" });
    const text = new SplitType('.about-headings');
    aboutTextTl.to(text.chars, {
      y: 0,
      stagger: {
        from: "bottom",
        each: 0.03
      },
      duration: 1,
      ease: "Power4.easeOut"
    });
  }
}, [target2]);

useEffect(() => {
  
  const skillTextTl = gsap.timeline({
    scrollTrigger: {
      trigger: ".about-headings-skill",
      start: "top bottom",
      end: "bottom 0%",
      
    },
  });

  if (target3.current) {
    gsap.set('.about-headings-skill', { visibility: "visible" });
    const text = new SplitType('.about-headings-skill');
    skillTextTl.to(text.chars, {
      y: 0,
      stagger: {
        from: "bottom",
        each: 0.03
      },
      duration: 1,
      ease: "Power4.easeOut"
    });
  }
}, [target3]);

  return (
    <>
      <div className="left-right">
        <div ref={target} className="hero-container">
          <h1  className="hero-headingg">
            Jasnoor <br /></h1>
            <h1 className="hero-headingg">
            Maan
          </h1>
          <p ref={descRef} className="hero-desc">
            A FRONTEND DEVELOPER AND DESIGNER
            <br />
            THIRD YEAR ENGINEERING STUDENT AT NITJ <br />
            BASED IN JALANDHAR
          </p>
        </div>
        <img ref={target1} className="me-img" src="/3.jpg" alt="me" />
      </div>

      <div className="about-wrapper">
        <div  className="about-content">
          <h1 ref={target2} className="about-headings">ABOUT ME</h1>
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
        <h1 ref={target3} className="about-headings-skill">Skills</h1>
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
