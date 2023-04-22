import React from "react";
import styles from "./../Gallery/Gallery.module.css";
import Image from "next/image";
import Link from "next/link";
import project_1 from "./../../public/images/services_1.png";
import project_2 from "./../../public/images/gallery_panama.png";
import project_3 from "./../../public/images/myfood.png";
import project_5 from "./../../public/images/gallery_kasa.png";
import project_6 from "./../../public/images/gallery_cms.png";
import project_4 from "./../../public/images/gallery_fisheye.jpg";

export default function Gallery() {
  return (
    <section className="container">
      <div className={styles.row}>
        <article className={styles.smallCard}>
          <Image src={project_1} alt="projet 1"  width="1920" height="1080" />
          <div className={styles.overlay}>
            <h2 className={styles.title}>Titre</h2>
          </div>
        </article>
        <article className={styles.bigCard}>
          <Image src={project_2} alt="projet 2"  width="1920" height="1080" />
          <div className={styles.overlay}>
            <h2 className={styles.title}>Titre</h2>
          </div>
        </article>
      </div>
      <div className={styles.row}>
        <article className={styles.smallCard}>
        <Image src={project_3} alt="projet 2"  width="1907" height="928" />
         
          <div className={styles.overlay}>
            <h2 className={styles.title}>Titre</h2>
          </div>
        </article>
        <article className={styles.bigCard}>
        <Image src={project_4} alt="projet 1"  width="1920" height="1080" />
          <div className={styles.overlay}>
            <h2 className={styles.title}>Titre</h2>
          </div>
        </article>
      </div>
      <div className={styles.row}>
        <article className={styles.smallCard}>
          <Image src={project_5} alt="projet 5"  width="1920" height="1080" />
          <div className={styles.overlay}>
            <h2 className={styles.title}>Titre</h2>
          </div>
        </article>
        <article className={styles.bigCard}>
          <Image src={project_6} alt="projet 2"  width="1920" height="1080" />
          <div className={styles.overlay}>
            <h2 className={styles.title}>Titre</h2>
          </div>
        </article>
      </div>
    </section>
  );
}
