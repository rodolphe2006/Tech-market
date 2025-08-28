import Logo from "../../Components/Logo/Logo";
import "./welcome.css";
import "../../Components/menu_btn/Menu_btn";
import Menu_btn from "../../Components/menu_btn/Menu_btn";
import Carousel from "../../Components/caroussel/Carousel";
import gsap from "gsap";
import SideBar from "../../Components/side_bar/SideBar";
import { useEffect, useRef } from "react";
function Welcome() {
  const h1Ref = useRef<HTMLHeadingElement | null>(null);
  const pRef = useRef<HTMLHeadingElement | null>(null);
  const btnRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    const tl = gsap.timeline({ delay: 2 });
    tl.fromTo(
      h1Ref.current,
      {
        yPercent: -100,
        opacity: 0,
      },
      {
        yPercent: 0,
        opacity: 1,
        duration: 1.5,
      }
    )
      .fromTo(
        pRef.current,
        {
          opacity: 0,
        },
        {
          opacity: 1,
          duration: 1.5,
        }
      )
      .fromTo(
        btnRef.current,
        {
          yPercent: 100,
          opacity: 0,
        },
        {
          yPercent: 0,
          opacity: 1,
          duration: 1.5,
        }
      );
  }, []);
  return (
    <>
      <section className="welcome">
        <nav>
          <Logo />
          <Menu_btn />
        </nav>
        <section className="herosection">
          <h1 ref={h1Ref}>
            Welcome to <span>NovaZone</span>
          </h1>
          <p ref={pRef}>
            Welcome to <span>NovaZone</span> — your battlefield for the hottest
            games, nonstop action, and updates you can’t miss!
          </p>
          <button className="get_started_btn" ref={btnRef}>
            Start
          </button>
        </section>
        <Carousel />
      </section>
    </>
  );
}
export default Welcome;
