"use client";
import styles from "./styles/Drawing.module.css";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function Drawings() {
  const [drawings, setDrawings] = useState([]);

  useEffect(() => {
    fetch("/api/drawings")
      .then((res) => res.json())
      .then((resJS) => setDrawings(resJS));
  }, []);

  return (
   
    <div className={styles.container}>
      
      
      {drawings.map((drawing) => {
        const drawingWidth = 350;
        const drawingHeightRatio = drawing.height / drawing.width;
        const drawingHeight = Math.ceil(drawingWidth * drawingHeightRatio);
        const drawingFooterHeight = 40;
        const drawingHeightSpan =
        Math.ceil((drawingHeight + drawingFooterHeight) / 10) + 1;
        
        return (
          <div key={drawing.id} style={{ gridRow: `span ${drawingHeightSpan}` }} className={styles.images}>
            <Image
              src={drawing.img}
              alt=""
              width={drawingWidth}
              height={drawingHeight}
            />
          </div>
        );
      })}
    </div>
  );
}
