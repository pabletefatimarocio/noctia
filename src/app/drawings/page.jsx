import Link from "next/link";
import styles from "./Drawings.module.css";
import { BsArrowLeft } from "react-icons/bs"

export default function Drawings(){
    return(
        <div className={styles.container}>
        <Link href="/"><BsArrowLeft/></Link>
        <h2 className={styles.h2}>DRAWINGS</h2>
        </div>
    )
}