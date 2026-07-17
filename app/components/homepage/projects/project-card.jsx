'use client';
// @flow strict

import * as React from 'react';
import { motion } from 'framer-motion';

function ProjectCard({ project }) {
  return (
    <motion.div
      className="from-[#0d1224] border-[#1b2c68a0] relative rounded-lg border bg-gradient-to-r to-[#0a0d37] w-full glassmorphic overflow-hidden group"
      whileHover={{ y: -10 }}
      transition={{ type: 'spring', stiffness: 300 }}
    >
      <motion.div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background: 'radial-gradient(circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(236, 72, 153, 0.15), transparent 50%)',
        }}
      />

      <div className="flex flex-row relative z-10">
        <motion.div
          className="h-[1px] w-full bg-gradient-to-r from-transparent via-pink-500 to-violet-600"
          animate={{
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
          }}
        />
        <motion.div
          className="h-[1px] w-full bg-gradient-to-r from-violet-600 to-transparent"
          animate={{
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            delay: 0.5,
          }}
        />
      </div>

      <div className="px-4 lg:px-8 py-3 lg:py-5 relative z-10">
        <div className="flex flex-row space-x-1 lg:space-x-2 absolute top-1/2 -translate-y-1/2">
          <motion.div
            className="h-2 w-2 lg:h-3 lg:w-3 rounded-full bg-red-400"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.7, 1, 0.7],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
          />
          <motion.div
            className="h-2 w-2 lg:h-3 lg:w-3 rounded-full bg-orange-400"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.7, 1, 0.7],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: 0.2,
            }}
          />
          <motion.div
            className="h-2 w-2 lg:h-3 lg:w-3 rounded-full bg-green-200"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.7, 1, 0.7],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: 0.4,
            }}
          />
        </div>
        <motion.p
          className="text-center ml-3 text-[#16f2b3] text-base lg:text-xl font-semibold"
          animate={{
            color: ['#16f2b3', '#00d4ff', '#16f2b3'],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
          }}
        >
          {project.name}
        </motion.p>
      </div>

      <div className="overflow-hidden border-t-[2px] border-indigo-900 px-4 lg:px-8 py-4 lg:py-8 relative z-10">
        <motion.code
          className="font-mono text-xs md:text-sm lg:text-base block"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="blink"
            animate={{
              opacity: [1, 0.7, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
          >
            <span className="mr-2 text-pink-500">const</span>
            <span className="mr-2 text-white">project</span>
            <span className="mr-2 text-pink-500">=</span>
            <span className="text-gray-400">{'{'}</span>
          </motion.div>
          <motion.div
            initial={{ x: -20, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
          >
            <span className="ml-4 lg:ml-8 mr-2 text-white">name:</span>
            <span className="text-gray-400">{`'`}</span>
            <span className="text-amber-300">{project.name}</span>
            <span className="text-gray-400">{`',`}</span>
          </motion.div>

          <motion.div
            className="ml-4 lg:ml-8 mr-2"
            initial={{ x: -20, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            <span className="text-white">tools:</span>
            <span className="text-gray-400">{` ['`}</span>
            {
              project.tools.map((tag, i) => (
                <React.Fragment key={i}>
                  <motion.span
                    className="text-amber-300"
                    whileHover={{ scale: 1.1, color: '#fbbf24' }}
                  >
                    {tag}
                  </motion.span>
                  {
                    project.tools?.length - 1 !== i &&
                    <span className="text-gray-400">{`', '`}</span>
                  }
                </React.Fragment>
              ))
            }
            <span className="text-gray-400">{"],"}</span>
          </motion.div>
          <motion.div
            initial={{ x: -20, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
          >
            <span className="ml-4 lg:ml-8 mr-2 text-white">myRole:</span>
            <span className="text-orange-400">{project.role}</span>
            <span className="text-gray-400">,</span>
          </motion.div>
          <motion.div
            className="ml-4 lg:ml-8 mr-2"
            initial={{ x: -20, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
          >
            <span className="text-white">Description:</span>
            <span className="text-cyan-400">{' ' + project.description}</span>
            <span className="text-gray-400">,</span>
          </motion.div>
          <div><span className="text-gray-400">{`};`}</span></div>
        </motion.code>
      </div>
    </motion.div>
  );
};

export default ProjectCard;