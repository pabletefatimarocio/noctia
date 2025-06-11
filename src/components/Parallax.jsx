"use client";

import { useRef, useEffect } from "react";
import styles from "./styles/Parallax.module.css";
import Image from "next/image";

export default function Parallax() {
  const moon = useRef(null);
  const bg = useRef(null);
  const mountain = useRef(null);
  const road = useRef(null);
  const text = useRef(null);

  useEffect(() => {
    const scrollEventListener = window.addEventListener("scroll", function () {
      var value = window.scrollY;

      bg.current.style.top = value * 0.5 + "px";
      moon.current.style.left = -value * 0.5 + "px";
      mountain.current.style.top = -value * 0.15 + "px";
      road.current.style.top = value * 0.15 + "px";
      text.current.style.top = value * 1 + "px";

      return () => {
        window.removeEventListener(scrollEventListener);
      };
    });
  }, [moon]);

  return (
    <div className={styles.container}>
      <div className={styles.images}>
        <Image ref={bg} src="/assets/parallax/bg.jpg" alt="" fill />
        <Image ref={moon} src="/assets/parallax/moon.png" alt="" fill />
        <Image ref={mountain} src="/assets/parallax/mountain.png" alt="" fill />
        <Image ref={road} src="/assets/parallax/road.png" alt="" fill />
        <h1 ref={text} fill>NOCTIA</h1>
      </div>
    </div>
  );
}
