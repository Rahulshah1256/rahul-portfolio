'use client';
// @flow strict
import { educations } from "@/utils/data/educations";
import Image from "next/image";
import { BsPersonWorkspace } from "react-icons/bs";
import lottieFile from '../../../assets/lottie/study.json';
import AnimationLottie from "../../helper/animation-lottie";
import GlowCard from "../../helper/glow-card";
import { motion } from 'framer-motion';

function Education() {
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
    <div id="education" className="relative z-50 border-t my-12 lg:my-24 border-[#25213b]">
      <Image
        src="/section.svg"
        alt="Hero"
        width={1572}
        height={795}
        className="absolute top-0 -z-10"
      />
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
        <div className="flex items-center">
          <motion.span
            className="w-24 h-[2px] bg-gradient-to-r from-transparent to-[#1a1443]"
            animate={{ scaleX: [0, 1, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <span className="bg-gradient-to-r from-[#1a1443] to-[#2a1f5f] w-fit text-white p-2 px-5 text-xl rounded-md border border-violet-500/30 font-semibold">
            Educations
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
            <div className="w-3/4 h-3/4">
              <AnimationLottie animationPath={lottieFile} />
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
                educations.map(education => (
                  <motion.div
                    key={education.id}
                    variants={item}
                  >
                    <GlowCard identifier={`education-${education.id}`}>
                      <motion.div
                        className="p-3 relative text-white"
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
                            {education.duration}
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
                              {education.title}
                            </p>
                            <p className="text-sm sm:text-base text-gray-300">{education.institution}</p>
                            {education.cgpa && (
                              <motion.p
                                className="text-xs sm:text-sm text-[#16f2b3] mt-1 font-semibold"
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ delay: 0.3 }}
                                viewport={{ once: true }}
                              >
                                CGPA: {education.cgpa}
                              </motion.p>
                            )}
                          </div>
                        </motion.div>
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

export default Education;