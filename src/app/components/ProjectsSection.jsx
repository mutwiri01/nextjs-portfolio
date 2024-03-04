"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Product Sourcing and Procurement:",
    description: "We offer a diverse selection of electrical components, mechanical parts, and hardware materials sourced from reputable manufacturers and suppliers",
    image: "/images/projects/101.jpg",
    tag: ["All", "Technical"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "Supply Chain Management:",
    description: "Our streamlined supply chain ensures prompt delivery of products to customers, minimizing lead times and optimizing inventory management",
    image: "/images/projects/102.jpg",
    tag: ["All", "Technical"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "Safety Inspections and Compliance",
    description: " We conduct thorough safety inspections to ensure that electrical installations, mechanical equipment, and hardware fixtures comply with industry regulations and standards",
    image: "/images/projects/103.jpg",
    tag: ["All", "Technical"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "Project Management",
    description: "Comprehensive Planning: We provide end-to-end project management services, from initial planning and design to execution and completion.Resource Coordination: Our project managers coordinate resources, schedules, and budgets to ensure that projects are delivered on time and within budget.Risk Management: We identify and mitigate potential risks and challenges to minimize disruptions and ensure successful project outcomes",
    image: "/images/projects/104.jpg",
    tag: ["Project"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 5,
    title: "Installation Services",
    description: "Our experienced technicians provide professional installation services for electrical systems, mechanical equipment, and hardware fixtures",
    image: "/images/projects/105.jpg",
    tag: ["All", "Technical"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 6,
    title: "Maintenance and Repair Services",
    description: "We offer scheduled maintenance programs to help customers maintain the performance and reliability of their electrical, mechanical, and hardware systems.",
    image: "/images/projects/106.jpg",
    tag: ["All", "Technical"],
    gitUrl: "/",
    previewUrl: "/",
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
        Our Services
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Technical"
          isSelected={tag === "Project Management"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Project"
          isSelected={tag === "Project Management"}
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
