import React from "react";
import styles from "./../Galery/Galery.module.css";
import Image from "next/image";
import Link from "next/link";

export default function Galery() {
  return (
    <section id="galery">
      <div classname={styles.row}>
        <article className={styles.card}>
          <Image src={projet1} alt="projet 1" className="img-fluid" />
          <div className={styles.overlay}>
            <h2 className={styles.title}>Titre</h2>
          </div>
        </article>
        <article className={styles.card}>
          <Image src={projet2} alt="projet 2" className="img-fluid" />
          <div className={styles.overlay}>
            <h2 className={styles.title}>Titre</h2>
          </div>
        </article>
      </div>
    </section>
  );
}
