"use client";
import styles from "./styles/Footer.module.css";
import { usePathname } from "next/navigation";
import Image from "next/image";

export default function Footer() {
  const pathname = usePathname();

  return (
    <div className={styles.container}>
      <h1 className={styles.h1}>© Pablete Fátima R.</h1>
      {pathname.startsWith("/") && (
        <div className={styles.img}>
            <Image src="/assets/footer/footer2.png" alt="" fill/>
        </div>
      )}
      
    </div>
  );
}
