import React from "react";
import Gallery from "@/components/Gallery/Gallery";
import styles from "@/styles/projets.module.css";

export default function index() {
  return (
    <>
      <section className={styles.banner}  data-aos="fade-right">
        <h1 className={styles.title}>Projets</h1>
      </section>
      <main id="projects">
        <Gallery />
      </main>      
    </>
  );
}