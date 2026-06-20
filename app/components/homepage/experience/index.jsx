// @flow strict

import { experiences } from "@/utils/data/experience";
import Image from "next/image";
import { BsPersonWorkspace } from "react-icons/bs";
import { MdKeyboardArrowRight } from "react-icons/md";
import experience from '../../../assets/lottie/code.json';
import AnimationLottie from "../../helper/animation-lottie";
import GlowCard from "../../helper/glow-card";

function Experience() {
  return (
    <div id="experience" className="relative z-50 border-t my-12 lg:my-24 border-[#25213b]">
      <Image
        src="/section.svg"
        alt="Hero"
        width={1572}
        height={795}
        className="absolute top-0 -z-10"
      />

      <div className="flex justify-center my-5 lg:py-8">
        <div className="flex  items-center">
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
          <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-xl rounded-md">
            Experiences
          </span>
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>

      <div className="py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          <div className="flex justify-center items-start">
            <div className="w-full h-full">
              <AnimationLottie animationPath={experience} />
            </div>
          </div>

          <div>
            <div className="flex flex-col gap-6">
              {
                experiences.map(experience => (
                  <GlowCard key={experience.id} identifier={`experience-${experience.id}`}>
                    <div className="p-3 relative">
                      <Image
                        src="/blur-23.svg"
                        alt="Hero"
                        width={1080}
                        height={200}
                        className="absolute bottom-0 opacity-80"
                      />
                      <div className="flex justify-center">
                        <p className="text-xs sm:text-sm text-[#16f2b3]">
                          {experience.duration}
                        </p>
                      </div>
                      <div className="flex items-center gap-x-8 px-3 py-5">
                        <div className="text-violet-500  transition-all duration-300 hover:scale-125">
                          <BsPersonWorkspace size={36} />
                        </div>
                        <div>
                          <p className="text-base sm:text-xl mb-2 font-medium uppercase">
                            {experience.title}
                          </p>
                          <p className="text-sm sm:text-base">
                            {experience.company}
                          </p>
                        </div>
                      </div>

                      {/* Projects Section */}
                      {experience.projects && experience.projects.length > 0 && (
                        <div className="px-3 pb-5 space-y-4">
                          {experience.projects.map((project, idx) => (
                            <div key={idx} className="border-l-2 border-[#16f2b3] pl-3">
                              <p className="text-sm font-semibold text-[#16f2b3] mb-1">
                                Project: {project.name}
                              </p>
                              <p className="text-xs sm:text-sm text-gray-300 mb-2">
                                {project.description}
                              </p>
                              <ul className="space-y-1">
                                {project.achievements.map((achievement, aidx) => (
                                  <li key={aidx} className="flex gap-2 text-xs sm:text-sm text-gray-300">
                                    <MdKeyboardArrowRight className="text-[#16f2b3] flex-shrink-0 mt-0.5" size={16} />
                                    <span>{achievement}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                      )}

                      {/* Achievements Section */}
                      {experience.achievements && experience.achievements.length > 0 && (
                        <div className="px-3 pb-5">
                          <ul className="space-y-2">
                            {experience.achievements.map((achievement, idx) => (
                              <li key={idx} className="flex gap-2 text-xs sm:text-sm text-gray-300">
                                <MdKeyboardArrowRight className="text-[#16f2b3] flex-shrink-0 mt-0.5" size={16} />
                                <span>{achievement}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {/* Additional Achievements Section */}
                      {experience.additionalAchievements && experience.additionalAchievements.length > 0 && (
                        <div className="px-3 pb-5 border-t border-[#25213b] pt-4">
                          <p className="text-xs font-semibold text-[#16f2b3] mb-2">
                            Infrastructure & Cloud Operations
                          </p>
                          <ul className="space-y-2">
                            {experience.additionalAchievements.map((achievement, idx) => (
                              <li key={idx} className="flex gap-2 text-xs sm:text-sm text-gray-300">
                                <MdKeyboardArrowRight className="text-[#16f2b3] flex-shrink-0 mt-0.5" size={16} />
                                <span>{achievement}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  </GlowCard>
                ))
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;