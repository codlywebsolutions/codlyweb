"use client"
import React, { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import Image from "next/image";
import Link from "next/link";

const SHAPE_COUNT = 8;

function getRandomShapes() {
  return Array.from({ length: SHAPE_COUNT }).map((_, i) => {
    const shapeType = i % 3;
    const size = Math.random() * (120 - 60) + 60;
    const top = Math.random() * (80 - 5) + 5;
    const left = Math.random() * (80 - 5) + 5;
    return { shapeType, size, top, left };
  });
}

const Hero = () => {
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subRef = useRef<HTMLParagraphElement>(null);
  const btn1Ref = useRef<HTMLButtonElement | null>(null);
  const btn2Ref = useRef<HTMLButtonElement | null>(null);
  const shapesRef = useRef<(HTMLDivElement | null)[]>([]);

  // Store random shapes only on the client
  const [shapes, setShapes] = useState<{ shapeType: number, size: number, top: number, left: number }[]>([]);

  // Entrance and floating animation
  useEffect(() => {
    gsap.fromTo(
      headlineRef.current,
      { y: 60, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power3.out" }
    );
    gsap.fromTo(
      subRef.current,
      { y: 40, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, delay: 0.3, ease: "power3.out" }
    );
    gsap.fromTo(
      [btn1Ref.current, btn2Ref.current],
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, delay: 0.6, stagger: 0.1, ease: "power3.out" }
    );
    // Animate shapes in and start floating
    shapesRef.current.forEach((el, i) => {
      if (!el) return;
      gsap.fromTo(
        el,
        { scale: 0, opacity: 0 },
        {
          scale: 1,
          opacity: 0.18 + i * 0.07,
          duration: 1,
          delay: 0.5 + i * 0.12,
          ease: "back.out(2)",
          onComplete: () => {
            // Floating animation
            gsap.to(el, {
              y: `+=${randomBetween(-30, 30)}`,
              x: `+=${randomBetween(-30, 30)}`,
              repeat: -1,
              yoyo: true,
              duration: randomBetween(3, 6),
              ease: "sine.inOut",
              delay: 0.2 * i,
            });
          },
        }
      );
    });
  }, []);

  useEffect(() => {
    setShapes(getRandomShapes());
  }, []);

  // Parallax effect on mouse move
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX / innerWidth - 0.5) * 2;
      const y = (e.clientY / innerHeight - 0.5) * 2;
      shapesRef.current.forEach((el, i) => {
        if (!el) return;
        gsap.to(el, {
          x: `+=${x * (10 + i * 4)}`,
          y: `+=${y * (10 + i * 4)}`,
          duration: 0.6,
          ease: "power2.out",
        });
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Hover effects for buttons
  const handleBtnHover = (ref: React.RefObject<HTMLButtonElement | null>) => {
    if (ref.current) {
      gsap.to(ref.current, { scale: 1.08, boxShadow: "0 4px 24px #fff", duration: 0.2 });
    }
  };
  const handleBtnLeave = (ref: React.RefObject<HTMLButtonElement | null>) => {
    if (ref.current) {
      gsap.to(ref.current, { scale: 1, boxShadow: "0 0px 0px #fff", duration: 0.2 });
    }
  };

  // Hover effect for headline
  const handleHeadlineHover = () => {
    gsap.to(headlineRef.current, { letterSpacing: 4, color: "#fff", duration: 0.2 });
  };
  const handleHeadlineLeave = () => {
    gsap.to(headlineRef.current, { letterSpacing: 0, color: "#fff", duration: 0.2 });
  };

  const renderShapes = () =>
    shapes.map((shape, i) => {
      const border = shape.shapeType === 1 ? "border-2 border-white" : "border border-gray-500";
      const opacity = 0.18 + i * 0.07;
      let shapeClass = "";
      if (shape.shapeType === 0) shapeClass = "rounded-full bg-white/10";
      if (shape.shapeType === 1) shapeClass = "rounded-lg bg-white/5";
      if (shape.shapeType === 2) shapeClass = "clip-triangle bg-white/10";
      return (
        <div
          key={i}
          ref={el => { shapesRef.current[i] = el; }}
          className={`absolute ${border} ${shapeClass} pointer-events-none`}
          style={{
            width: shape.size,
            height: shape.size,
            top: `${shape.top}%`,
            left: `${shape.left}%`,
            opacity,
            filter: "blur(1px)",
            zIndex: 1,
          }}
        />
      );
    });

  return (
    <header className="relative min-h-screen bg-black overflow-hidden flex items-center" aria-label="Hero section">
      {/* Floating geometric shapes */}
      <div className="absolute inset-0 pointer-events-none">
        {renderShapes()}
        {/* Triangle clip-path utility */}
        <style>{`
          .clip-triangle {
            clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
          }
        `}</style>
      </div>

      <main className="relative z-10 w-full">
        <div className="max-w-5xl mx-auto px-4 py-24 flex flex-col items-start">
          <h1
            ref={headlineRef}
            className="text-white text-5xl md:text-7xl font-extrabold tracking-tight mb-8 transition-all"
            onMouseEnter={handleHeadlineHover}
            onMouseLeave={handleHeadlineLeave}
          >
            Build <span className="text-gray-300">Smarter</span>
            <br />
            <span className="text-gray-400">Scale</span> <span className="text-white">Faster</span>
          </h1>
          <p
            ref={subRef}
            className="text-gray-300 text-xl md:text-2xl mb-10 max-w-2xl"
          >
            Transform your digital presence with <span className="text-white font-semibold">Codly</span>. Modern, minimal, and lightning fast web solutions.
          </p>
          <div className="flex flex-col md:flex-row gap-4 md:gap-6">
            <button
              ref={btn1Ref}
              className="px-8 py-4 bg-white text-black font-bold text-lg rounded-full shadow transition-all"
              onMouseEnter={() => handleBtnHover(btn1Ref)}
              onMouseLeave={() => handleBtnLeave(btn1Ref)}
            >
              <Link href="/contact">Start Your Project</Link>
            </button>
            <button
              ref={btn2Ref}
              className="px-8 py-4 border-2 border-white text-white font-bold text-lg rounded-full transition-all"
              onMouseEnter={() => handleBtnHover(btn2Ref)}
              onMouseLeave={() => handleBtnLeave(btn2Ref)}
            >
              <Link href="/work">View Portfolio</Link>
            </button>
          </div>
          {/* Minimal logo */}
          <div className="mt-16 flex items-center gap-4">
            <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center shadow">
              <Image src="/logo2.png" alt="Codly logo" width={64} height={64} priority />
            </div>
            <span className="text-white text-2xl font-bold tracking-widest">CODLY</span>
          </div>
        </div>
      </main>
    </header>
  );
};

export default Hero;

function randomBetween(min: number, max: number) {
  return Math.random() * (max - min) + min;
}

