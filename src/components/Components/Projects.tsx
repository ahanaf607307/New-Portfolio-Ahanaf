"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { motion, useInView } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

export default function Projects() {
  const ref = useRef<HTMLElement | null>(null); // ✅ Type fixed here
  const isInView = useInView(ref, { once: false, amount: 0.1 });

  const projects = [
    {
      id: 1,
      title: "Matrimony Website",
      description:
        "A comprehensive matrimony platform connecting people for meaningful relationships. Features advanced search filters, profile management, and secure communication systems.",
      technologies: ["React", "Firebase", "Tailwind CSS", "Node.js"],
      liveUrl: "https://marriage-bd.web.app/",
      githubUrl: "https://github.com/ahanaf607307/marriage-bd-client-a12",
      imageUrl: "https://i.ibb.co/Mk73Zd2s/marrige.png",
      bgColor: "bg-gradient-to-br from-rose-50 to-pink-100",
      hoverBg: "hover:from-rose-100 hover:to-pink-200",
      accentColor: "from-rose-500 to-pink-600",
    },
    {
      id: 2,
      title: "Learning & Assignment Platform",
      description:
        "An interactive educational platform for students and teachers. Features assignment submission, grading system, and collaborative learning tools.",
      technologies: ["React", "MongoDB", "Express.js", "Firebase Auth"],
      liveUrl: "https://study-today1.web.app/",
      githubUrl: "https://github.com/ahanaf607307/study-today-a11-client",
      imageUrl: "https://i.ibb.co/dwn0LrCQ/assignment.png",
      bgColor: "bg-gradient-to-br from-blue-50 to-indigo-100",
      hoverBg: "hover:from-blue-100 hover:to-indigo-200",
      accentColor: "from-blue-500 to-indigo-600",
    },
    {
      id: 3,
      title: "Crowdfunding Platform",
      description:
        "A modern crowdfunding website enabling entrepreneurs to raise funds for their innovative projects. Includes payment integration and project tracking.",
      technologies: ["React", "Node.js", "MongoDB", "Stripe API"],
      liveUrl: "https://croud-funding-2024.web.app/",
      githubUrl: "https://github.com/ahanaf607307/client-crowd-found-a10",
      imageUrl: "https://i.ibb.co/MDFszLJf/planmake.png",
      bgColor: "bg-gradient-to-br from-emerald-50 to-green-100",
      hoverBg: "hover:from-emerald-100 hover:to-green-200",
      accentColor: "from-emerald-500 to-green-600",
    },
    {
      id: 4,
      title: "E-commerce Website",
      description:
        "A full-featured e-commerce platform with product catalog, shopping cart, user authentication, and secure payment processing.",
      technologies: ["React", "JavaScript", "CSS3", "Local Storage"],
      liveUrl: "https://buy-plus-2024.surge.sh/",
      githubUrl: "https://github.com/ahanaf607307/buy-plus-a8",
      imageUrl: "https://i.ibb.co/hRysRLHf/buyplus.png",
      bgColor: "bg-gradient-to-br from-amber-50 to-orange-100",
      hoverBg: "hover:from-amber-100 hover:to-orange-200",
      accentColor: "from-amber-500 to-orange-600",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2,
      },
    },
  };

  const headerVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 60,
      rotateX: 15,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      scale: 1,
      transition: {
        duration: 0.7,
        ease: "easeOut",
      },
    },
  };

  const floatingVariants = {
    animate: {
      y: [0, -10, 0],
      transition: {
        duration: 3,
        repeat: Number.POSITIVE_INFINITY,
        ease: "easeInOut",
      },
    },
  };

  return (
    <motion.section
      ref={ref}
      id="projects"
      className="py-20 px-4 bg-[#250c44f8] relative overflow-hidden"
      initial="hidden"
      animate={isInView ? "visible" : "visible"}
      variants={containerVariants}
    >
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-10 w-32 h-32 bg-purple-400/10 rounded-full blur-xl"
          animate={{ x: [0, 100, 0], y: [0, -50, 0] }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-48 h-48 bg-pink-400/10 rounded-full blur-xl"
          animate={{ x: [0, -80, 0], y: [0, 30, 0] }}
          transition={{
            duration: 10,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="container max-w-7xl mx-auto relative z-10">
        <motion.div className="text-center mb-16" variants={headerVariants}>
          <motion.h1
            className="text-5xl font-bold mb-6 text-white"
            variants={floatingVariants}
            animate="animate"
          >
            Featured Projects
          </motion.h1>
          <motion.p
            className="text-xl text-purple-100 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            Explore my portfolio of innovative web applications, each crafted
            with modern technologies and attention to detail.
          </motion.p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
          variants={containerVariants}
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              variants={cardVariants}
              whileHover={{
                scale: 1.05,
                rotateY: 5,
                transition: { duration: 0.3 },
              }}
              whileTap={{ scale: 0.98 }}
            >
              <Card
                className={`group relative overflow-hidden border-0 shadow-2xl ${project.bgColor} ${project.hoverBg} transition-all duration-500 hover:shadow-purple-500/25`}
                style={{ transformStyle: "preserve-3d" }}
              >
                <div className="relative h-64 w-full overflow-hidden">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Image
                      src={project.imageUrl || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                  </motion.div>
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-500"></div>
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    animate={
                      isInView
                        ? { scale: 1, rotate: 0 }
                        : { scale: 0, rotate: -180 }
                    }
                    transition={{ delay: index * 0.1 + 0.5, duration: 0.6 }}
                  >
                    <Badge
                      className={`absolute top-4 right-4 bg-gradient-to-r ${project.accentColor} text-white border-0`}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </Badge>
                  </motion.div>
                </div>

                <div
                  className={`absolute inset-0 bg-gradient-to-r ${project.accentColor} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                ></div>

                <CardHeader className="relative z-10 pb-4">
                  <motion.div
                    initial={{ x: -20, opacity: 0 }}
                    animate={
                      isInView ? { x: 0, opacity: 1 } : { x: -20, opacity: 0 }
                    }
                    transition={{ delay: index * 0.1 + 0.7, duration: 0.6 }}
                  >
                    <CardTitle className="text-2xl font-bold text-gray-900 group-hover:text-gray-800 transition-colors duration-300">
                      {project.title}
                    </CardTitle>
                  </motion.div>
                  <motion.div
                    initial={{ x: -20, opacity: 0 }}
                    animate={
                      isInView ? { x: 0, opacity: 1 } : { x: -20, opacity: 0 }
                    }
                    transition={{ delay: index * 0.1 + 0.8, duration: 0.6 }}
                  >
                    <CardDescription className="text-gray-600 text-base leading-relaxed mt-2">
                      {project.description}
                    </CardDescription>
                  </motion.div>
                </CardHeader>

                <CardContent className="relative z-10 space-y-6">
                  <motion.div
                    className="flex flex-wrap gap-2"
                    initial={{ y: 20, opacity: 0 }}
                    animate={
                      isInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }
                    }
                    transition={{ delay: index * 0.1 + 0.9, duration: 0.6 }}
                  >
                    {project.technologies.map((tech, techIndex) => (
                      <motion.div
                        key={techIndex}
                        initial={{ scale: 0 }}
                        animate={isInView ? { scale: 1 } : { scale: 0 }}
                        transition={{
                          delay: index * 0.1 + 1 + techIndex * 0.1,
                          duration: 0.4,
                          type: "spring",
                          stiffness: 200,
                        }}
                      >
                        <Badge
                          variant="secondary"
                          className="bg-white/70 text-gray-700 hover:bg-white transition-colors duration-300"
                        >
                          {tech}
                        </Badge>
                      </motion.div>
                    ))}
                  </motion.div>

                  <motion.div
                    className="flex gap-4 pt-4"
                    initial={{ y: 30, opacity: 0 }}
                    animate={
                      isInView ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }
                    }
                    transition={{ delay: index * 0.1 + 1.2, duration: 0.6 }}
                  >
                    <motion.div
                      className="flex-1"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Button
                        asChild
                        className={`w-full bg-gradient-to-r ${project.accentColor} hover:shadow-lg text-white border-0 transition-all duration-300`}
                      >
                        <Link
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Live Demo
                        </Link>
                      </Button>
                    </motion.div>
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Button
                        variant="outline"
                        asChild
                        className="border-gray-300 text-gray-700 hover:bg-gray-50 hover:border-gray-400 transition-all duration-300"
                      >
                        <Link
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Github className="h-4 w-4 mr-2" />
                          Code
                        </Link>
                      </Button>
                    </motion.div>
                  </motion.div>

                  <motion.div
                    className={`h-1 bg-gradient-to-r ${project.accentColor} rounded-full`}
                    initial={{ scaleX: 0 }}
                    animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
                    transition={{ delay: index * 0.1 + 1.4, duration: 0.8 }}
                    style={{ originX: 0 }}
                  />
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
