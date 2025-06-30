"use client";

import { Card, CardContent } from "@/components/ui/card";
import { motion, useInView } from "framer-motion";
import {
  Braces,
  Chrome,
  Database,
  Figma,
  GitBranch,
  Github,
  Layers,
  Terminal,
} from "lucide-react";
import { useRef } from "react";
import { FaCss3, FaHtml5, FaNode, FaReact } from "react-icons/fa";
import {
  SiExpress,
  SiMongodb,
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

export function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });

  const skills = [
    { name: "HTML5", icon: FaHtml5, color: "from-orange-500 to-red-500" },
    { name: "CSS3", icon: FaCss3, color: "from-blue-500 to-cyan-500" },
    { name: "Bootstrap", icon: Layers, color: "from-purple-500 to-purple-700" },
    {
      name: "Tailwind CSS",
      icon: SiTailwindcss,
      color: "from-teal-400 to-blue-500",
    },
    {
      name: "JavaScript",
      icon: Braces,
      color: "from-yellow-400 to-orange-500",
    },
    {
      name: "TypeScript",
      icon: SiTypescript,
      color: "from-blue-400 to-violet-500",
    },
    { name: "React", icon: FaReact, color: "from-cyan-400 to-blue-500" },
    { name: "Next.js", icon: SiNextdotjs, color: "from-gray-700 to-gray-900" },
    { name: "Node.js", icon: FaNode, color: "from-green-500 to-emerald-600" },
    { name: "Express.js", icon: SiExpress, color: "from-gray-600 to-gray-800" },
    { name: "MongoDB", icon: SiMongodb, color: "from-green-600 to-green-800" },
    {
      name: "PostgreSQL",
      icon: Database,
      color: "from-blue-600 to-indigo-700",
    },
    { name: "Git", icon: GitBranch, color: "from-orange-600 to-red-600" },
    { name: "GitHub", icon: Github, color: "from-gray-700 to-black" },

    { name: "Figma", icon: Figma, color: "from-purple-400 to-pink-500" },
    { name: "VS Code", icon: Terminal, color: "from-blue-500 to-blue-700" },
    {
      name: "Chrome DevTools",
      icon: Chrome,
      color: "from-red-500 to-yellow-500",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.6, staggerChildren: 0.08 },
    },
  };

  const headerVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const skillCardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.8, rotateY: -15 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      rotateY: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        type: "spring",
        stiffness: 100,
      },
    },
  };

  const iconVariants = {
    hover: {
      rotate: [0, -10, 10, -10, 0],
      scale: 1.1,
      transition: { duration: 0.5, ease: "easeInOut" },
    },
  };

  return (
    <motion.section
      ref={ref}
      id="skills"
      className="w-full py-14 px-4 bg-[#250c44f8]"
      initial="hidden"
      animate={isInView ? "visible" : "visible"}
      variants={containerVariants}
    >
      <div className="w-full max-w-7xl mx-auto text-white">
        <motion.div className="text-center mb-8" variants={headerVariants}>
          <motion.h2 className="text-3xl md:text-4xl text-white font-bold mb-4 bg-gradient-to-r from-purple-200 to-pink-200 bg-clip-text">
            Skills & Technologies
          </motion.h2>
          <motion.p
            className="text-lg text-purple-100 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            Here are the technologies and tools I work with to bring ideas to
            life.
          </motion.p>
        </motion.div>

        <motion.div variants={containerVariants}>
          <motion.div
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6  gap-3 lg:gap-6"
            variants={containerVariants}
          >
            {skills.map((skill) => {
              const Icon = skill.icon;
              return (
                <motion.div
                  key={skill.name}
                  variants={skillCardVariants}
                  whileHover={{
                    scale: 1.1,
                    y: -5,
                    rotateY: 5,
                    transition: { duration: 0.2 },
                  }}
                  whileTap={{ scale: 0.95 }}
                  style={{ transformStyle: "preserve-3d" }}
                >
                  <Card className="group relative overflow-hidden border-2 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 cursor-pointer h-24">
                    <motion.div
                      className={`absolute inset-0 bg-gradient-to-br ${skill.color}`}
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 0.15 }}
                      transition={{ duration: 0.3 }}
                    />
                    <CardContent className="p-2 relative z-10 h-full flex flex-col items-center justify-center">
                      <div className="flex flex-col items-center space-y-1">
                        <motion.div
                          className={`p-2 rounded-lg bg-gradient-to-br ${skill.color} shadow-sm`}
                          variants={iconVariants}
                          whileHover="hover"
                        >
                          <Icon className="w-4 h-4 text-white" />
                        </motion.div>
                        <motion.h4
                          className="text-xs font-medium text-center leading-tight"
                          whileHover={{ scale: 1.05 }}
                          transition={{ duration: 0.2 }}
                        >
                          {skill.name}
                        </motion.h4>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}
