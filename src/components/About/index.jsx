import React, { useEffect, useRef, useState } from "react";
import cn from "classnames";

import gsap from "gsap";
import SplitText from "../../utils/Split3.min";
import useOnScreen from "../../hooks/useOnScreen";

import "./styles.scss";

function About() {
  const ref = useRef(null);

  const [reveal, setReveal] = useState(false);
  const onScreen = useOnScreen(ref);

  useEffect(() => {
    if (onScreen) setReveal(onScreen);
  }, [onScreen]);

  useEffect(() => {
    if (reveal) {
      const split = new SplitText("#headline", { type: "lines" });

      gsap.to(split.lines, {
        duration: 1,
        y: -20,
        opacity: 1,
        stagger: 0.1,
        ease: "power4.out",
        // onComplete: () => split.revert(),
      });
    }
  }, [reveal]);

  return (
    <section className={cn("about-section", { "is-reveal": reveal })}>
      <p ref={ref} id="headline" className={cn({ "is-reveal": reveal })}>
        At NXT Digital Agency, we believe that a website is more than just a
        digital storefront - it's an extension of your brand. We take a holistic
        approach to web development, combining creative design with technical
        expertise to create websites that are both visually appealing and highly
        functional. Contact us today to learn more about how we can help your
        business succeed online.
      </p>
    </section>
  );
}

export default About;
