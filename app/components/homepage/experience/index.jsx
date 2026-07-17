'use client';
// @flow strict

import { experiences } from "@/utils/data/experience";
import Image from "next/image";
import { BsPersonWorkspace } from "react-icons/bs";
import { MdKeyboardArrowRight } from "react-icons/md";
import experience from '../../../assets/lottie/code.json';
import AnimationLottie from "../../helper/animation-lottie";
import GlowCard from "../../helper/glow-card";
import { motion } from 'framer-motion';

function Experience() {
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
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <div id="experience" className="relative z-50 border-t my-12 lg:my-24 border-[#25213b]">
      <Image
        src="/section.svg"
        alt="Hero"
        width={1572}
        height={795}
        className="absolute top-0 -z-10"
      />

      <motion.div
        className="flex justify-center my-5 lg:py-8"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="flex items-center">
          <motion.span
            className="w-24 h-[2px] bg-gradient-to-r from-transparent to-[#1a1443]"
            animate={{ scaleX: [0, 1, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <span className="bg-gradient-to-r from-[#1a1443] to-[#2a1f5f] w-fit text-white p-2 px-5 text-xl rounded-md border border-violet-500/30 font-semibold">
            Experiences
          </span>
          <motion.span
            className="w-24 h-[2px] bg-gradient-to-l from-transparent to-[#1a1443]"
            animate={{ scaleX: [1, 0, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>

      <div className="py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          <motion.div
            className="flex justify-center items-start"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="w-full h-full">
              <AnimationLottie animationPath={experience} />
            </div>
          </motion.div>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <div className="flex flex-col gap-6">
              {
                experiences.map((exp, idx) => (
                  <motion.div
                    key={exp.id}
                    variants={item}
                  >
                    <GlowCard identifier={`experience-${exp.id}`}>
                      <motion.div
                        className="p-3 relative"
                        whileHover={{ y: -5 }}
                        transition={{ type: 'spring', stiffness: 300 }}
                      >
                        <Image
                          src="/blur-23.svg"
                          alt="Hero"
                          width={1080}
                          height={200}
                          className="absolute bottom-0 opacity-80"
                        />
                        <motion.div
                          className="flex justify-center"
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          transition={{ delay: 0.1 }}
                          viewport={{ once: true }}
                        >
                          <motion.p
                            className="text-xs sm:text-sm text-[#16f2b3] font-semibold"
                            animate={{
                              color: ['#16f2b3', '#00d4ff', '#16f2b3'],
                            }}
                            transition={{
                              duration: 3,
                              repeat: Infinity,
                            }}
                          >
                            {exp.duration}
                          </motion.p>
                        </motion.div>
                        <motion.div
                          className="flex items-center gap-x-8 px-3 py-5"
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          transition={{ delay: 0.2 }}
                          viewport={{ once: true }}
                        >
                          <motion.div
                            className="text-violet-500 transition-all duration-300"
                            whileHover={{ scale: 1.3, rotate: 10 }}
                          >
                            <BsPersonWorkspace size={36} />
                          </motion.div>
                          <div>
                            <p className="text-base sm:text-xl mb-2 font-medium uppercase">
                              {exp.title}
                            </p>
                            <p className="text-sm sm:text-base text-gray-300">
                              {exp.company}
                            </p>
                          </div>
                        </motion.div>

                        {/* Projects Section */}
                        {exp.projects && exp.projects.length > 0 && (
                          <motion.div
                            className="px-3 pb-5 space-y-4"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ delay: 0.3 }}
                            viewport={{ once: true }}
                          >
                            {exp.projects.map((project, pidx) => (
                              <motion.div
                                key={pidx}
                                className="border-l-2 border-[#16f2b3] pl-3"
                                initial={{ x: -10, opacity: 0 }}
                                whileInView={{ x: 0, opacity: 1 }}
                                transition={{ delay: 0.3 + pidx * 0.1 }}
                                viewport={{ once: true }}
                              >
                                <p className="text-sm font-semibold text-[#16f2b3] mb-1">
                                  Project: {project.name}
                                </p>
                                <p className="text-xs sm:text-sm text-gray-300 mb-2">
                                  {project.description}
                                </p>
                                <ul className="space-y-1">
                                  {project.achievements.map((achievement, aidx) => (
                                    <motion.li
                                      key={aidx}
                                      className="flex gap-2 text-xs sm:text-sm text-gray-300"
                                      initial={{ x: -5, opacity: 0 }}
                                      whileInView={{ x: 0, opacity: 1 }}
                                      transition={{ delay: 0.4 + aidx * 0.05 }}
                                      viewport={{ once: true }}
                                    >
                                      <MdKeyboardArrowRight className="text-[#16f2b3] flex-shrink-0 mt-0.5" size={16} />
                                      <span>{achievement}</span>
                                    </motion.li>
                                  ))}
                                </ul>
                              </motion.div>
                            ))}
                          </motion.div>
                        )}

                        {/* Achievements Section */}
                        {exp.achievements && exp.achievements.length > 0 && (
                          <motion.div
                            className="px-3 pb-5"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ delay: 0.4 }}
                            viewport={{ once: true }}
                          >
                            <ul className="space-y-2">
                              {exp.achievements.map((achievement, aidx) => (
                                <motion.li
                                  key={aidx}
                                  className="flex gap-2 text-xs sm:text-sm text-gray-300"
                                  initial={{ x: -5, opacity: 0 }}
                                  whileInView={{ x: 0, opacity: 1 }}
                                  transition={{ delay: 0.45 + aidx * 0.05 }}
                                  viewport={{ once: true }}
                                >
                                  <MdKeyboardArrowRight className="text-[#16f2b3] flex-shrink-0 mt-0.5" size={16} />
                                  <span>{achievement}</span>
                                </motion.li>
                              ))}
                            </ul>
                          </motion.div>
                        )}

                        {/* Additional Achievements Section */}
                        {exp.additionalAchievements && exp.additionalAchievements.length > 0 && (
                          <motion.div
                            className="px-3 pb-5 border-t border-[#25213b] pt-4"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ delay: 0.5 }}
                            viewport={{ once: true }}
                          >
                            <p className="text-xs font-semibold text-[#16f2b3] mb-2">
                              Infrastructure & Cloud Operations
                            </p>
                            <ul className="space-y-2">
                              {exp.additionalAchievements.map((achievement, aidx) => (
                                <motion.li
                                  key={aidx}
                                  className="flex gap-2 text-xs sm:text-sm text-gray-300"
                                  initial={{ x: -5, opacity: 0 }}
                                  whileInView={{ x: 0, opacity: 1 }}
                                  transition={{ delay: 0.55 + aidx * 0.05 }}
                                  viewport={{ once: true }}
                                >
                                  <MdKeyboardArrowRight className="text-[#16f2b3] flex-shrink-0 mt-0.5" size={16} />
                                  <span>{achievement}</span>
                                </motion.li>
                              ))}
                            </ul>
                          </motion.div>
                        )}
                      </motion.div>
                    </GlowCard>
                  </motion.div>
                ))
              }
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Experience;