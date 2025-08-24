import "./caresoul.css";
import img1 from "../../assets/img1.webp";
import img2 from "../../assets/img3.webp";
import img3 from "../../assets/img5.webp";
import img4 from "../../assets/img7.webp";
import img5 from "../../assets/img9.webp";
import img6 from "../../assets/img11.webp";
import img7 from "../../assets/img14.webp";
import img8 from "../../assets/img15.webp";
import { gsap } from "gsap";
import { useRef, useEffect, useState } from "react";
import { style } from "framer-motion/client";

function Carousel() {
  const images = [img1, img2, img3, img4, img5, img6, img7, img8];
  const bgref = useRef<HTMLDivElement | null>(null);
  const imagesref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    gsap.fromTo(
      bgref.current,
      {
        autoAlpha: 0,
      },
      {
        autoAlpha: 1,
        duration: 1,
        onStart: () => {
          if (bgref.current) {
            bgref.current.style.backgroundImage = `url(${images[1]})`;
          }
        },
      }
    );
  }, []);

  return (
    <section className="carousel">
      <div className="background" ref={bgref}></div>

      <div className="carousel_container">
        <div
          className="slider"
          style={{ "--quantity": images.length } as React.CSSProperties}
        >
          {images.map((src, index) => (
            <div
              key={index}
              className="my_images"
              style={{ "--position": index + 1 } as React.CSSProperties}
              ref={imagesref}
            >
              <img src={src} alt={src} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Carousel;
