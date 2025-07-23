import Parallax from "@/components/Parallax";
import styles from "./Home.module.css";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";
import DrawingHome from "@/components/DrawingHome";
import PicturesHome from "@/components/PicturesHome";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className={styles.container}>
      <Parallax />
      <p className={styles.text}>
        Noctia es un espacio que nace del dibujo, la observación y el tiempo.
        Durante años he explorado formas de expresión que me permiten entender,
        registrar y compartir lo que me atraviesa: imágenes, ideas, emociones.
        Este sitio es mi forma de reunir todo eso. Aquí vas a encontrar
        ilustraciones, fotografías y fragmentos escritos que hablan de mi
        proceso, mis búsquedas y también de mi trabajo como programadora. Es un
        proyecto personal, pero también parte de mi portafolio profesional: una
        manera de mostrar cómo conviven lo técnico y lo sensible en lo que hago.
      </p>
      <Link href="/drawings" className={styles.drawings}>
           <h1 className={styles.titles}>Dibujos</h1>
          <BsArrowRight className={styles.icon} />
        
      </Link>
      <DrawingHome />

      <Link href="/pictures" className={styles.pictures}>
      <h1 className={styles.titles}>Zenit</h1>
        <BsArrowRight className={styles.icon} />
      </Link>
      <PicturesHome />
      <Footer />
    </div>
  );
}
