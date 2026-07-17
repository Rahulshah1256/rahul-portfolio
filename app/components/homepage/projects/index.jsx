'use client';
import { projectsData } from '@/utils/data/projects-data';
import ProjectCard from './project-card';
import { motion } from 'framer-motion';

const Projects = () => {
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  return (
    <div id='projects' className="relative z-50 my-12 lg:my-24">
      <motion.div
        className="sticky top-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <motion.div
          className="w-[80px] h-[80px] bg-violet-100 rounded-full absolute -top-3 left-0 translate-x-1/2 filter blur-3xl opacity-30"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
          }}
        />
        <div className="flex items-center justify-start relative">
          <motion.span
            className="bg-gradient-to-r from-[#1a1443] to-[#2a1f5f] absolute left-0 w-fit text-white px-5 py-3 text-xl rounded-md border border-violet-500/30 font-semibold"
            animate={{
              x: [0, 5, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
            }}
          >
            PROJECTS
          </motion.span>
          <motion.span
            className="w-full h-[2px] bg-gradient-to-r from-transparent via-[#1a1443] to-transparent"
            animate={{
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
            }}
          />
        </div>
      </motion.div>

      <div className="pt-24">
        <motion.div
          className="flex flex-col gap-6"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {projectsData.slice(0, 4).map((project, index) => (
            <motion.div
              id={`sticky-card-${index + 1}`}
              key={index}
              className="sticky-card w-full mx-auto max-w-2xl sticky"
              variants={item}
            >
              <motion.div
                className="box-border flex items-center justify-center rounded shadow-lg transition-all duration-500"
                whileHover={{
                  boxShadow: '0 0 50px rgba(236, 72, 153, 0.4)',
                }}
              >
                <ProjectCard project={project} />
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;