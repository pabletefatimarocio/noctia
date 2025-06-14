"use client";
import Image from "next/image";
import styles from "./styles/ParallaxDrawings.module.css";
import { useRef, useEffect } from "react";

export default function ParallaxDrawings() {
  const bg = useRef(null);
  const danzaIzquierda = useRef(null);
  const danzaDerecha = useRef(null);
  const ermitañaEsq = useRef(null);
  const ermitaña = useRef(null);
  const telonIz = useRef(null);
  const telonDer = useRef(null);
  const telon = useRef(null);

  useEffect(() => {
    telonIz.current.style.left = "-40vw";
    telonDer.current.style.left = "40vw";
    ermitañaEsq.current.style.opacity = 0;

    console.log(telon.current.height);

    const scrollEventListener = window.addEventListener("scroll", function () {
      var value = window.scrollY;

      telonIz.current.style.left = value * 0.05 - 40 + "vw";
      telonDer.current.style.left = -value * 0.05 + 40 + "vw";
      ermitañaEsq.current.style.opacity = value * 0.005;
      danzaIzquierda.current.style.left = -value * 0.02 + "vw";
      danzaDerecha.current.style.left = value * 0.02 + "vw";
    });
    return () => {
      window.removeEventListener("scroll", scrollEventListener);
    };
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.images}>
        <Image ref={bg} src="/assets/parallaxDrawings/bg.png" alt="" fill />
        <Image
          ref={danzaIzquierda}
          src="/assets/parallaxDrawings/danza-izquierda.png"
          alt=""
          fill
        />
        <Image
          ref={danzaDerecha}
          src="/assets/parallaxDrawings/danza-derecha.png"
          alt=""
          fill
        />
        <Image
          ref={ermitaña}
          src="/assets/parallaxDrawings/ermitaña.png"
          alt=""
          fill
        />
        <Image
          className={styles.ermitañaEsq}
          ref={ermitañaEsq}
          src="/assets/parallaxDrawings/ermitaña-esq.png"
          alt=""
          fill
        />
        <Image
          ref={telonIz}
          src="/assets/parallaxDrawings/telon-iz.png"
          alt=""
          fill
        />
        <Image
          ref={telonDer}
          src="/assets/parallaxDrawings/telon-der.png"
          alt=""
          fill
        />
        <Image
          className={styles.telon}
          ref={telon}
          src="/assets/parallaxDrawings/telón.png"
          alt=""
          fill
        />
      </div>
    </div>
  );
}
