import React from "react";
import gsap from "gsap";
import SplitText from "../../utils/Split3.min.js";
import "./styles.scss";
import { useEffect } from "react";
import { motion, AnimateSharedLayout, AnimatePresence } from "framer-motion";
import Banner from "../Banner/Banner.jsx";

function Header() {
  useEffect(() => {
    const split = new SplitText("#header-text", {
      type: "lines",
      linesClass: "lineChildren",
    });

    gsap.to(split.lines, {
      duration: 1,
      y: 0,
      opacity: 1,
      stagger: 0.1,
      ease: "power2",
    });
  }, []);

  return (
    <section className="header-container" data-scroll-section>
      <ul className="header-menu"></ul>
      <div className="container">
        <AnimateSharedLayout>
          <AnimatePresence>
            <div className="title-container">
              <h1 id="header-text">WE CREATE</h1>
              <h1 id="header-text">DIGITAL </h1>
              <Banner />
            </div>
          </AnimatePresence>
        </AnimateSharedLayout>
      </div>
    </section>
  );
}

export default Header;
