"use client";

import Pictures from "@/components/Pictures";
import styles from "./PicturesPage.module.css";
import Image from "next/image";
import { BsArrowLeft } from "react-icons/bs";
import Link from "next/link";

export default function PicturesPage() {
  return (
    <div className={styles.container}>
      <div className={styles.flower}>
        <Image src="/assets/pictures/picture.jpg" alt="" fill />
      </div>
        <p className={styles.p}>
          La Zenit 12XP es mi primera y única cámara analógica. Con ella he
          aprendido lo poco que sé sobre fotografía analógica, pero me permite
          experimentar con profunda emoción cada encuadre.
        </p>
      <div>
        <Link href="/">
          {" "}
          <BsArrowLeft className={styles.icon} />
        </Link>
        <Pictures />
      </div>
    </div>
  );
}
