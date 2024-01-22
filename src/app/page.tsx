import Image from "next/image";
import styles from "./page.module.css";
import Check from "@/app/Check";

export default function Home() {
  return (
    <main className={styles.main}>
      <Check/>    
    </main>
  );
}
