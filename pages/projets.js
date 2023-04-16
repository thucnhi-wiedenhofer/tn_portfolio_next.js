import React from "react";
import Gallery from "@/components/Gallery/Gallery";
import styles from "@/styles/projets.module.css";


export default function Projets() {
  return (
    <section id="projets">
      <div className={styles.container}>
        <h1 className={styles.title}>Projets</h1>
        <Gallery />
      </div>
    </section>
  );
}
