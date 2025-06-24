"use client";
import styles from "./styles/DrawingHome.module.css";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function DrawingHome() {
  const [drawingsHome, setDrawingsHome] = useState([]);

  useEffect(() => {
    fetch("api/drawings")
      .then((res) => res.json())
      .then((resJS) => setDrawingsHome(resJS));
  }, []);

  return (
    <div className={styles.container}>
      {drawingsHome.slice(0, 3).map((drawingsHome) => {
        const drawingsHomeHeight = 350;
        const drawingsHomeRatio = drawingsHome.width / drawingsHome.height;
        const drawingsHomeWidth = drawingsHomeHeight * drawingsHomeRatio;

        return (
          <div key={drawingsHome.id} className={styles.images}>
            <Image
              src={drawingsHome.img}
              alt=""
              width={drawingsHomeWidth}
              height={drawingsHomeHeight}
            />
          </div>
        );
      })}
    </div>
  );
}
