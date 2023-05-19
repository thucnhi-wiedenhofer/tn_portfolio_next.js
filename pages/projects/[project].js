import React from "react";
import Link from "next/link";
import styles from "@/styles/projet.module.css";
import Slider from "@/components/Slider/Slider";

export default function project({ project}) {
  return (
    <>
      <main className={styles.container} data-aos="fade-down">
        <h1 className={styles.title}>{project.name}</h1>
        <Slider />
        <section className={styles.content}>
          <div className={styles.tag}>
            <span className={styles.badge}>{project.tag_1}</span>
            <span className={styles.badge}>{project.tag_2}</span>
            <span className={styles.badge}>{project.tag_3}</span>
          </div>
          <p className={styles.description}>{project.presentation}
                <br />
                {project.description}</p>
                <ul className={styles.action}>
                <li>
                  <Link className={styles.btnOutline} href={project.link} target="_blank">
                    Visiter le site
                  </Link>
                </li>
              </ul>
        </section>
      </main>
    </>
  );
}
