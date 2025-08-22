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

function Carousel() {
  const images = [img1, img2, img3, img4, img5, img6, img7, img8];
  const imgref = useRef<Array<HTMLDivElement | null>>([]);
  const bgref = useRef<HTMLDivElement>(null);
  const [currentslide, setcurrentslide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setcurrentslide((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);
  useEffect(() => {
    gsap.to(imgref.current[currentslide], {
      xPercent: -50,
      left: "50%",
    });
    gsap.fromTo(
      bgref.current,
      { autoAlpha: 0 },
      {
        autoAlpha: 1,
        duration: 1,
        onStart: () => {
          if (bgref.current) {
            bgref.current.style.backgroundImage = `url(${images[currentslide]})`;
          }
        },
      }
    );
  }, [currentslide]);
  return (
    <section className="carousel">
      <div className="background" ref={bgref}></div>

      <div className="slider">
        {images.map((img, index) => (
          <div
            className="slide"
            key={index}
            ref={(el) => {
              imgref.current[index] = el;
            }}
          >
            <img src={img} alt={img} />
          </div>
        ))}
      </div>
    </section>
  );
}

export default Carousel;
