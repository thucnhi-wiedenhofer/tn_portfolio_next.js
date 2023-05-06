import React from "react";
import Link from "next/link";
import styles from "@/styles/projet.module.css";
import Slider from "@/components/Slider/Slider";

export default function projet() {
  return (
    <>
      <main className={styles.container} data-aos="fade-down">
        <h1 className={styles.title}>Projet Panama</h1>
        <Slider />
        <section className={styles.content}>
          <div className={styles.tag}>
            <span className={styles.badge}>Html</span>
            <span className={styles.badge}>Css</span>
            <span className={styles.badge}>Javascript</span>
          </div>
          <p className={styles.description}>Je crée des sites web dynamiques compatibles à tous support: PC,
                tablette et mobile.
                <br />
                Avec une intégration repectueuse des standard du web pour un
                référencement optimal.</p>
                <ul className={styles.action}>
                <li>
                  <Link className={styles.btnOutline} href="https://thuc-nhi-wiedenhofer.students-laplateforme.io/boutique/" target="_blank">
                    Visiter le site
                  </Link>
                </li>
              </ul>
        </section>
      </main>
    </>
  );
}
