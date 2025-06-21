"use client";

import styles from "./styles/PicturesHome.module.css";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function PicturesHome() {
  const [pictures, setPictures] = useState([]);

  useEffect(() => {
    fetch("/api/pictures")
      .then((res) => res.json())
      .then((resJS) => setPictures(resJS));
  }, []);

  return (
    <div className={styles.container}>
      {pictures.slice(0, 2).map((pictures) => {
        const pictureWidth = 500;
        const pictureHeight = 300;
        return (
          <div key={pictures.id} className={styles.images}>
            <Image
              src={pictures.img}
              alt=""
              width={pictureWidth}
              height={pictureHeight}
            />
          </div>
        );
      })}
    </div>
  );
}
