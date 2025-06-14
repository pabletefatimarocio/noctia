import Link from "next/link";
import styles from "./Drawings.module.css";
import { BsArrowLeft } from "react-icons/bs"
import Drawings from "@/components/Drawings";
export default function Drawing(){
    return(
        <div className={styles.container}>
        <Link href="/"><BsArrowLeft className={styles.icon}/></Link>
        <Drawings />
        </div>
    )
}