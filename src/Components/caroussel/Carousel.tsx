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
import { useRef, useEffect } from "react";

function Carousel() {
  const images = [img1, img2, img3, img4, img5, img6, img7, img8];
  const sliderRef = useRef<HTMLDivElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  /*======================Gsap animation=======================*/
  useEffect(() => {
    const tl = gsap.timeline();
    tl.fromTo(
      containerRef.current,
      {
        yPercent: -100,
        opacity: 0,
      },
      {
        yPercent: 15,
        opacity: 1,
        duration: 2,
        ease: "elastic.out(1, 0.3)",
      }
    ).to(sliderRef.current, {
      rotateY: 360,
      duration: 30,
      repeat: -1,
      yoyo: true,
    });
  }, []);

  return (
    <section className="carousel">
      <div className="carousel_container" ref={containerRef}>
        <div
          className="slider"
          style={{ "--quantity": images.length } as React.CSSProperties}
          ref={sliderRef}
        >
          {images.map((src, index) => (
            <div
              key={index}
              className="my_images"
              style={{ "--position": index + 1 } as React.CSSProperties}
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
