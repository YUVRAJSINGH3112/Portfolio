import projects from '../assets/projects'
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }  
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.5 } 
  },
  exit: { opacity: 0, y: 50 } 
};

const Projects = () => {
  return (
    <section className="projects" id="projects">
      <h2 className='project-title'>Crafted with Code:</h2>
      <motion.div
        className="projects-container"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        exit="exit"
        viewport={{ once: false, amount: 0.2 }}
      >
        {projects.map((project, index) => (
          <motion.a 
           target="_blank"
            href={project.link} 
            key={index} 
            className="project-card" 
            variants={cardVariants}
          >
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </motion.a>
        ))}
      </motion.div>
    </section>
  );
};

export default Projects;
