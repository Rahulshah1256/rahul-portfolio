'use client';

import { skillsData } from "@/utils/data/skills";
import { skillsImage } from "@/utils/skill-image";
import Image from "next/image";
import { useState } from "react";
import { GiGraduateCap } from "react-icons/gi";

function Skills() {
  const [activeCategory, setActiveCategory] = useState('Programming Languages');
  const categories = Object.keys(skillsData);

  // Define colors for different categories
  const categoryColors = {
    'Programming Languages': { bg: 'from-blue-900/20 to-blue-800/20', border: 'border-blue-500/30', text: 'text-blue-400', accent: 'bg-blue-500/20' },
    'Frameworks': { bg: 'from-purple-900/20 to-purple-800/20', border: 'border-purple-500/30', text: 'text-purple-400', accent: 'bg-purple-500/20' },
    'Web Dev Tools': { bg: 'from-pink-900/20 to-pink-800/20', border: 'border-pink-500/30', text: 'text-pink-400', accent: 'bg-pink-500/20' },
    'Cloud & Database': { bg: 'from-cyan-900/20 to-cyan-800/20', border: 'border-cyan-500/30', text: 'text-cyan-400', accent: 'bg-cyan-500/20' },
    'Familiar': { bg: 'from-green-900/20 to-green-800/20', border: 'border-green-500/30', text: 'text-green-400', accent: 'bg-green-500/20' },
  };

  const currentColor = categoryColors[activeCategory];

  return (
    <div id="skills" className="relative z-50 border-t my-12 lg:my-24 border-[#25213b]">
      {/* Background effects */}
      <div className="w-[100px] h-[100px] bg-violet-100 rounded-full absolute top-6 left-[42%] translate-x-1/2 filter blur-3xl opacity-20"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-violet-900/5 to-transparent pointer-events-none"></div>

      <div className="flex justify-center -translate-y-[1px]">
        <div className="w-3/4">
          <div className="h-[1px] bg-gradient-to-r from-transparent via-violet-500 to-transparent w-full" />
        </div>
      </div>

      {/* Header */}
      <div className="flex justify-center my-5 lg:py-8">
        <div className="flex items-center gap-3">
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
          <div className="flex items-center gap-2 bg-[#1a1443] w-fit text-white p-2 px-5 text-xl rounded-md">
            <GiGraduateCap className="text-violet-400" size={28} />
            <span>Skills</span>
          </div>
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>

      <div className="w-full px-4 lg:px-8 py-8">
        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 lg:gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 lg:px-6 py-2 lg:py-3 rounded-full font-semibold text-sm lg:text-base transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-violet-500 text-white shadow-lg shadow-violet-500/50 scale-105'
                  : 'bg-[#1a1443] text-gray-300 hover:bg-[#2a1f5f] hover:text-violet-300 border border-[#25213b]'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className={`bg-gradient-to-br ${currentColor.bg} backdrop-blur-md rounded-2xl border ${currentColor.border} p-8 lg:p-12 transition-all duration-500`}>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 lg:gap-6">
            {skillsData[activeCategory]?.map((skill, id) => {
              const skillImage = skillsImage(skill);
              return (
                <div
                  key={id}
                  className="group relative"
                >
                  {/* Gradient background on hover */}
                  <div className="absolute inset-0 bg-gradient-to-r from-violet-500/20 to-purple-500/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"></div>

                  {/* Main card */}
                  <div className="relative h-full bg-gradient-to-br from-[#16213e]/40 to-[#0f3460]/40 border-2 border-[#1f223c]/50 hover:border-violet-500/50 rounded-xl p-5 flex flex-col items-center justify-center gap-3 transition-all duration-300 hover:shadow-lg hover:shadow-violet-500/20 hover:scale-105 cursor-pointer backdrop-blur-sm">
                    {/* Icon/Image */}
                    <div className="h-12 w-12 lg:h-14 lg:w-14 flex items-center justify-center rounded-lg transition-transform duration-300 group-hover:scale-110">
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
                    </div>

                    {/* Skill name */}
                    <p className="text-white text-xs lg:text-sm font-medium text-center line-clamp-2 group-hover:text-violet-300 transition-colors duration-300">
                      {skill}
                    </p>

                    {/* Bottom accent line */}
                    <div className={`w-0 h-[2px] ${currentColor.text} group-hover:w-full transition-all duration-300`}></div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Stats */}
        <div className="mt-12 grid grid-cols-2 lg:grid-cols-4 gap-4">
          {categories.map((category) => (
            <div
              key={category}
              className="bg-gradient-to-br from-[#1a1443] to-[#0f1a35] border border-[#25213b] rounded-lg p-4 text-center hover:border-violet-500/50 transition-all duration-300"
            >
              <p className="text-violet-400 text-2xl lg:text-3xl font-bold">{skillsData[category].length}</p>
              <p className="text-gray-400 text-xs lg:text-sm mt-1">{category}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;