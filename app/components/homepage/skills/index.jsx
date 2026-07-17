'use client';

import { skillsData } from "@/utils/data/skills";
import { skillsImage } from "@/utils/skill-image";
import Image from "next/image";
import { useState } from "react";
import { GiGraduateCap } from "react-icons/gi";
import { motion } from 'framer-motion';

function Skills() {
  const [activeCategory, setActiveCategory] = useState('Programming Languages');
  const categories = Object.keys(skillsData);

  const categoryColors = {
    'Programming Languages': { bg: 'from-blue-900/20 to-blue-800/20', border: 'border-blue-500/30', text: 'text-blue-400', accent: 'bg-blue-500/20' },
    'Frameworks': { bg: 'from-purple-900/20 to-purple-800/20', border: 'border-purple-500/30', text: 'text-purple-400', accent: 'bg-purple-500/20' },
    'Web Dev Tools': { bg: 'from-pink-900/20 to-pink-800/20', border: 'border-pink-500/30', text: 'text-pink-400', accent: 'bg-pink-500/20' },
    'Cloud & Database': { bg: 'from-cyan-900/20 to-cyan-800/20', border: 'border-cyan-500/30', text: 'text-cyan-400', accent: 'bg-cyan-500/20' },
    'Familiar': { bg: 'from-green-900/20 to-green-800/20', border: 'border-green-500/30', text: 'text-green-400', accent: 'bg-green-500/20' },
  };

  const currentColor = categoryColors[activeCategory];

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <div id="skills" className="relative z-50 border-t my-12 lg:my-24 border-[#25213b]">
      <motion.div
        className="w-[100px] h-[100px] bg-violet-100 rounded-full absolute top-6 left-[42%] translate-x-1/2 filter blur-3xl opacity-20"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-violet-900/5 to-transparent pointer-events-none"></div>

      <div className="flex justify-center -translate-y-[1px]">
        <div className="w-3/4">
          <motion.div
            className="h-[1px] bg-gradient-to-r from-transparent via-violet-500 to-transparent w-full"
            animate={{
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
            }}
          />
        </div>
      </div>

      <motion.div
        className="flex justify-center my-5 lg:py-8"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="flex items-center gap-3">
          <motion.span
            className="w-24 h-[2px] bg-[#1a1443]"
            animate={{ scaleX: [0, 1, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <div className="flex items-center gap-2 bg-gradient-to-r from-[#1a1443] to-[#2a1f5f] w-fit text-white p-2 px-5 text-xl rounded-md border border-violet-500/30">
            <motion.div animate={{ rotate: [0, 10, -10, 0] }} transition={{ duration: 2, repeat: Infinity }}>
              <GiGraduateCap className="text-violet-400" size={28} />
            </motion.div>
            <span>Skills</span>
          </div>
          <motion.span
            className="w-24 h-[2px] bg-[#1a1443]"
            animate={{ scaleX: [1, 0, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>

      <div className="w-full px-4 lg:px-8 py-8">
        {/* Category Tabs */}
        <motion.div
          className="flex flex-wrap justify-center gap-2 lg:gap-4 mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setActiveCategory(category)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-4 lg:px-6 py-2 lg:py-3 rounded-full font-semibold text-sm lg:text-base transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-gradient-to-r from-violet-500 to-pink-500 text-white shadow-lg shadow-violet-500/50 scale-105'
                  : 'bg-[#1a1443] text-gray-300 hover:bg-gradient-to-r hover:from-[#2a1f5f] hover:to-[#1a1a3e] hover:text-violet-300 border border-[#25213b]'
              }`}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          className={`bg-gradient-to-br ${currentColor.bg} backdrop-blur-md rounded-2xl border ${currentColor.border} p-8 lg:p-12 transition-all duration-500 glassmorphic`}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 lg:gap-6"
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {skillsData[activeCategory]?.map((skill, id) => {
              const skillImage = skillsImage(skill);
              return (
                <motion.div
                  key={id}
                  className="group relative"
                  variants={item}
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-violet-500/20 to-purple-500/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"
                    whileHover={{ scale: 1.2 }}
                  />

                  <motion.div
                    className="relative h-full bg-gradient-to-br from-[#16213e]/40 to-[#0f3460]/40 border-2 border-[#1f223c]/50 hover:border-violet-500/50 rounded-xl p-5 flex flex-col items-center justify-center gap-3 transition-all duration-300 hover:shadow-lg hover:shadow-violet-500/20 hover:scale-105 cursor-pointer backdrop-blur-sm"
                    whileHover={{
                      boxShadow: '0 0 30px rgba(168, 85, 247, 0.4)',
                      y: -5,
                    }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    <motion.div
                      className="h-12 w-12 lg:h-14 lg:w-14 flex items-center justify-center rounded-lg transition-transform duration-300"
                      whileHover={{ scale: 1.15, rotate: 5 }}
                    >
                      {skillImage ? (
                        <Image
                          src={skillImage?.src}
                          alt={skill}
                          width={50}
                          height={50}
                          className="h-full w-auto rounded-lg drop-shadow-lg"
                        />
                      ) : (
                        <div className={`h-full w-full flex items-center justify-center bg-gradient-to-br ${currentColor.accent} rounded-lg text-white font-bold text-xs lg:text-sm`}>
                          {skill.substring(0, 2).toUpperCase()}
                        </div>
                      )}
                    </motion.div>

                    <motion.p
                      className="text-white text-xs lg:text-sm font-medium text-center line-clamp-2 transition-colors duration-300"
                      whileHover={{ color: '#a78bfa' }}
                    >
                      {skill}
                    </motion.p>

                    <motion.div
                      className={`h-[2px] ${currentColor.text}`}
                      initial={{ width: 0 }}
                      whileHover={{ width: '100%' }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.div>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>

        {/* Stats */}
        <motion.div
          className="mt-12 grid grid-cols-2 lg:grid-cols-4 gap-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          {categories.map((category, idx) => (
            <motion.div
              key={category}
              className="bg-gradient-to-br from-[#1a1443] to-[#0f1a35] border border-[#25213b] rounded-lg p-4 text-center hover:border-violet-500/50 transition-all duration-300 cursor-pointer"
              whileHover={{
                scale: 1.05,
                boxShadow: '0 0 20px rgba(168, 85, 247, 0.3)',
              }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
            >
              <motion.p
                className="text-violet-400 text-2xl lg:text-3xl font-bold"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                {skillsData[category].length}
              </motion.p>
              <p className="text-gray-400 text-xs lg:text-sm mt-1">{category}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Skills;