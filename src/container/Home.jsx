import React, { useState, useRef, useEffect } from "react";
import "../styles/home.scss";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import useLocoScroll from "../hooks/useLocoScroll";
import About from "../components/About";
import Gallery from "../components/Gallery";
import Featured from "../components/Featured";
import CustomCursor from "../CustomCursor";
import Footer from "../components/Footer";

const Home = () => {
  const [preloader, setPreloader] = useState(true);

  useLocoScroll(!preloader);

  const [timer, setTimer] = useState(1);
  const id = React.useRef(null);
  const ref = useRef(null);

  const clear = () => {
    window.clearInterval(id.current);
    setPreloader(false);
  };

  useEffect(() => {
    id.current = window.setInterval(() => {
      setTimer((timer) => timer - 1);
    }, 1000);
  }, []);

  useEffect(() => {
    if (timer === 0) {
      clear();
    }
  }, [timer]);
  return (
    <>
      <CustomCursor />

      {preloader ? (
        <div className="loader-wrapper absolute">
          <h1>NXT</h1>
          <h2>MEDIA</h2>
        </div>
      ) : (
        <div
          className="main-container"
          id="main-container"
          data-scroll-section
          ref={ref}
        >
          <Navbar />
          <Header />
          <About />
          <Gallery />
          <Featured />
          <Footer />
        </div>
      )}
    </>
  );
};

export default Home;
