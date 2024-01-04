import React, { useEffect, useState } from "react";
import { gsap, Expo, Power3 } from "gsap";
import "./Loading.css";

const Loading = () => {

  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const count = setInterval(() => {
      setCounter((counter) =>
        counter < 100
          ? counter + 1
          : (clearInterval(count), setCounter(100), reveal())
      );
    }, 50);
  }, []);

  const reveal = () => {
    const t1 = gsap.timeline({
      onComplete: () => {
        console.log("completed");
      },
    });
    t1.to(".count-hide", { opacity: 0, duration: 0.3 })
      .to(".count-hide", { display: "none", duration: 0.3 })
      .to(".progress-hide", {
        height: "100vh",
        ease: Power3.easeOut,
        duration: 0.25,
        delay: 0.1,
      })
      .to(".loading-container", { display: "none", ease: Expo.easeOut });
  };

  return (
    <div className="loading-container">
      <div className="progress-hide" style={{ width: counter + "%" }}></div>
      <div className="count-hide">{counter}</div>
    </div>
  );
};

export default Loading;
