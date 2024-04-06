"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Mario Clone",
    description: "2D Mario clone game",
    image: "/images/projects/BG.png",
    tag: ["All", "Game"],
    gitUrl: "https://github.com/Raghavk4u/Mario-clone",
    previewUrl: "/images/projects/BG.png",
  },
  {
    id: 2,
    title: "Zombie Clasher",
    description: "3D Zombie destroyer game",
    image: "/images/projects/Zombie-clasher.jpg",
    tag: ["All", "Game"],
    gitUrl: "https://github.com/Raghavk4u/ZombieClasher/",
    previewUrl: "/images/projects/Zombie-clasher.jpg",
  },
  {
    id: 3,
    title: "Dodge Bomb",
    description: "Basic 2D game",
    image: "/images/projects/DodgeBall.png",
    tag: ["All", "Game"],
    gitUrl: "https://github.com/Raghavk4u/DodgeBall",
    previewUrl: "/images/projects/DodgeBall.png",
  },
  {
    id: 4,
    title: "Expense Tracker",
    description: "Expense tracker using React",
    image: "/images/projects/Expense-tracker.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Raghavk4u/Expense-Tracker-using-react",
    previewUrl: "/images/projects/Expense-tracker.png",
  },
  {
    id: 5,
    title: "To-Do List using Speech Recognition",
    description: "Speech recogntion in to-do list",
    image: "/images/projects/to-do-list.jpeg",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Raghavk4u/Speech-Recoginition-in-To-Do-List",
    previewUrl: "/images/projects/to-do-list.jpeg",
  },
  {
    id: 6,
    title: "Apna Bazar",
    description: "Inventory management using Cpp",
    image: "/images/projects/inventory.avif",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Raghavk4u/Apna-Bazar",
    previewUrl: "/images/projects/inventory.avif",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Game"
          isSelected={tag === "Game"}
        />
         <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
