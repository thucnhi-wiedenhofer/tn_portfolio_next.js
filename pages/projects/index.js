import { PrismaClient } from "@prisma/client";
import React from "react";
import GalleryCard from "@/components/GalleryCard/GalleryCard";
import styles from "@/styles/projets.module.css";

export default function index({ projects }) {
  return (
    <>
      <section className={styles.banner} data-aos="fade-right">
        <h1 className={styles.title}>Projets</h1>
      </section>

      <section id="projects" className={styles.container}>
        <div className={styles.row}>
          {projects.map((project, index) => (
            <GalleryCard key={index} project={project} />
          ))}
        </div>
      </section>
    </>
  );
}

export const getServerSideProps = async () => {
  const prisma = new PrismaClient();
  const projects = await prisma.projects.findMany();
  return {
    props: {
      projects,
    },
  };
};
