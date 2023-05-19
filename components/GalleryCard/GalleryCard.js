import React from "react";
import styles from "./../GalleryCard/GalleryCard.module.css";
import Image from "next/image";
import Link from "next/link";
import project_1 from "./../../public/images/gallery_bopha.png";

export default function GalleryCard({ project }) {
  return (
    <>
      <article className={project.style} data-aos="fade-down">
        <Image
          src={`/images/${project.image_1}`}
          alt={`projet${project.id}`}
          width="1920"
          height="1080"
        />
        <div className="overlay">
          <div className={styles.description}>
            <h2 className={styles.title}>{project.name}</h2>
            <ul className={styles.action}>
              <li>
                <Link
                  className={styles.btnOutline}
                  href={`/projets/projet/${project.id}`}
                >
                  Voir
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </article>
    </>
  );
}
