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
