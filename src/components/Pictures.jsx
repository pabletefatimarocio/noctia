"use client";

import styles from "./styles/Pictures.module.css";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function Pictures() {
  const [pictures, setPictures] = useState([]);

  useEffect(() => {
    fetch("/api/pictures")
      .then((res) => res.json())
      .then((resJS) => setPictures(resJS));
  }, []);

  return (
    <div className={styles.container}>
        
      {pictures.map((pictures) => {
        const pictureWidth = 600;
        const pictureHeight = 400;
        return (
          <div key={pictures.id} className={styles.images} >
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
