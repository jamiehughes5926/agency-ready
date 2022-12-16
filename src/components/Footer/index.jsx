import React, { useEffect, useRef, useState } from "react";
import useOnScreen from "../../hooks/useOnScreen";
import SectionHeader from "../SectionHeader";
import gsap from "gsap";
import SplitText from "../../utils/Split3.min";
import cn from "classnames";
import "./contact.scss";

import "./styles.scss";

function Footer() {
  const ref = useRef(null);

  const [reveal, setReveal] = useState(false);
  const onScreen = useOnScreen(ref, 0.5);

  useEffect(() => {
    if (onScreen) setReveal(onScreen);
  }, [onScreen]);

  useEffect(() => {
    if (reveal) {
      const split = new SplitText("#location-text", {
        type: "lines",
        linesClass: "lineChildren",
      });
      gsap.fromTo(
        split.lines,
        { y: 200 },
        {
          duration: 1,
          y: 0,
          // opacity: 1,
          stagger: 0.1,
          ease: "power2",
        }
      );
    }
  }, [reveal]);
  return (
    <>
      <section className="footer" data-scroll-section>
        <div>
          {" "}
          <div class="contact-form">
            <span class="circle one"></span>
            <span class="circle two"></span>

            <form action="index.html" autocomplete="off">
              <h3 class="title">Contact us</h3>
              <div class="input-container">
                <input
                  type="text"
                  name="name"
                  class="input"
                  placeholder="Name"
                />
                <label for=""> </label>
              </div>
              <div class="input-container">
                <input
                  type="email"
                  name="email"
                  class="input"
                  placeholder="email"
                />
                <label for=""></label>
              </div>
              <div class="input-container">
                <input
                  type="tel"
                  name="phone"
                  class="input"
                  placeholder="Phone"
                />
                <label for=""></label>
              </div>
              <div class="input-container textarea">
                <textarea
                  name="message"
                  class="input"
                  placeholder="Your Message"
                ></textarea>
                <label for=""></label>
              </div>
              <input type="submit" value="Send" class="btn" />
            </form>
          </div>
        </div>{" "}
        <SectionHeader title="" />
        <h1
          className={cn("location", { "is-reveal": reveal })}
          id="location-text"
          ref={ref}
        >
          MADE IN NZ
        </h1>
      </section>
    </>
  );
}

export default Footer;
