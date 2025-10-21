import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React from "react";
import { useMediaQuery } from "react-responsive";

const Showcase = () => {
  const isTablet = useMediaQuery({ query: "(maxWidth:1024px)" });

  useGSAP(() => {
    if(!isTablet) {
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: "#showcase",
        start: "top top",
        end: "bottom top",
        scrub: true,
        pin:true,
      },
    });
    timeline
      .to(".mask img",{
        transform: "scale(1)",
      })
      .to(".content", { opacity: 1, y: 0, duration: 1, ease: "power1.in" });
    }
  },[isTablet]);
  return (
    <section id="showcase">
      <div className="media">
        <video src="/videos/game.mp4" loop autoPlay muted playsInline />
        <div className="mask">
          <img src="/mask-logo.svg" alt="mask" />
        </div>
      </div>
      <div className="content">
        <div className="wrapper">
          <div className="lg:max-w-md">
            <h2>Rocket Chip</h2>
            <div className="space-y-5 mt-7 pw-10">
              <p>
                Intoducing {""}
                <span className="text-white">
                  M4, the next-generation of Apple silicon.
                </span>
                . M4 powers
              </p>
              <p>
                itdrives Apple intelligence on iPad Pro so you can
                write,create,and accomblish more with ease. All in a design
                that's unbelievablt thin,light,and powerfull
              </p>
              <p>
                A brand-new display engine delivers breathtaking precisio,color
                accuracy,and brightness.And a next-gen GPU with
                hardware-accelerated ray tracing brings console-level graphics
                to fingertips.
              </p>
              <p className="text-primary">
                Learn more about Apple Intelligence
              </p>
            </div>
          </div>
          <div className="max-w-3xs space-y-14">
            <div className="space-y-2">
              <p>Uo to</p>
              <h3>4x faster </h3>
              <p>pro rendering performance than M2</p>
            </div>
            <div className="space-y-2">
              <p>Uo to</p>
              <h3>1.5x faster</h3>
              <p>CPU performance than M2</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Showcase;
