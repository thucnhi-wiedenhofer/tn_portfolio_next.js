/* eslint-disable react/no-unescaped-entities */
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "@/styles/Home.module.css";
import arrow from "./../public/images/icons/arrow-icon.svg";

export default function Home() {
  return (
    <section className={styles.banner}>
      <div className={styles.container}>
        <div className={styles.title}>
          <h1>
            <span className={styles.first}>Développeur</span> <span className={styles.second}>Web</span>
          </h1>
        </div>
        <div className={styles.content}>
          <p>
            Développeur d'applications web, <br />
            J'aimerais travailler pour votre prochain projet
          </p>
          <ul>
            <li className={styles.navItem}>
              <Link className={styles.btnSlide} href="/projets">
                <span>
                  Voir mon portfolio
                  <Image src={arrow} alt="flèche" className={styles.arrow} />
                </span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
