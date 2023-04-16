import React from "react";
import styles from "./../Gallery/Gallery.module.css";
import Image from "next/image";
import Link from "next/link";
import project_1 from "./../../public/images/services_1.png";

export default function Gallery() {
  return (
    <section id="gallery">
      <div className={styles.row}>
        <article className={styles.card}>
          <Image src={project_1} alt="projet 1"  width="1920" height="1080" />
          <div className={styles.overlay}>
            <h2 className={styles.title}>Titre</h2>
          </div>
        </article>
        <article className={styles.card}>
          <Image src={project_1} alt="projet 2"  width="1920" height="1080" />
          <div className={styles.overlay}>
            <h2 className={styles.title}>Titre</h2>
          </div>
        </article>
      </div>
    </section>
  );
}
