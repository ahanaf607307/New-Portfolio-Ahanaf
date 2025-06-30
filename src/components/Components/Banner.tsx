"use client";

import { Button } from "@/components/ui/button";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, Download, Github, Linkedin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Typewriter } from "react-simple-typewriter";
import bannerImage from "../../../public/okey.jpg";

export function Banner() {
  const [mounted, setMounted] = useState(false);
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 300], [0, -50]);
  const y2 = useTransform(scrollY, [0, 300], [0, -100]);

  useEffect(() => {
    setMounted(true);
  }, []);

  const resumeUrl = "../../../public/resume/pdf.pdf";

  const handleResumeDownload = (url: string) => {
    const resumeName = url.split("/").pop();
    const aTag = document.createElement("a");
    aTag.href = url;
    aTag.setAttribute("Download", resumeName || "resume.pdf");
    aTag.click();
    aTag.remove();
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut" as const,
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8, rotate: -10 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        duration: 1,
        ease: "easeOut" as const,
        delay: 0.5,
      },
    },
  };

  const floatingVariants = {
    animate: {
      y: [-10, 10, -10],
      rotate: [-2, 2, -2],
      transition: {
        duration: 6,
        repeat: Number.POSITIVE_INFINITY,
        ease: "easeInOut" as const,
      },
    },
  };

  if (!mounted) return null;

  return (
    <section
      id="home"
      className="min-h-screen pt-4 lg:-mt-20 flex items-center justify-center px-4 relative overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, #1a0b2e 0%, #2d1b4e 50%, #4a2c6a 100%)",
      }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Animated line pattern */}
        <motion.div
          className="absolute inset-0 overflow-hidden opacity-30"
          style={{ y: y1 }}
        >
          <svg
            className="absolute inset-0 w-full h-full"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <pattern
                id="grid"
                width="100"
                height="100"
                patternUnits="userSpaceOnUse"
              >
                <motion.path
                  d="M 100 0 L 0 0 0 100"
                  fill="none"
                  stroke="rgba(147, 51, 234, 0.3)"
                  strokeWidth="1"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 2, delay: 1 }}
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
          <div className="absolute inset-0">
            {Array.from({ length: 20 }).map((_, i) => (
              <motion.div
                key={i}
                className="absolute h-px bg-gradient-to-r from-transparent via-purple-400/20 to-transparent transform rotate-45"
                style={{
                  width: "200%",
                  left: `${i * 10 - 50}%`,
                  top: `${i * 5}%`,
                }}
                initial={{ scaleX: 0, opacity: 0 }}
                animate={{ scaleX: 1, opacity: 1 }}
                transition={{
                  duration: 1.5,
                  delay: i * 0.1,
                  ease: "easeOut" as const,
                }}
              />
            ))}
          </div>
        </motion.div>

        {/* Animated Background */}
        <motion.div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute top-20 left-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl"
            animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.3, 0.1] }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut" as const,
            }}
            style={{ y: y2 }}
          />
          <motion.div
            className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"
            animate={{ scale: [1.2, 1, 1.2], opacity: [0.3, 0.1, 0.3] }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut" as const,
              delay: 2,
            }}
            style={{ y: y1 }}
          />
        </motion.div>

        <div className="container mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text */}
            <motion.div
              className="space-y-8 text-left"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <div className="space-y-4">
                <motion.p
                  className="text-lg text-white/70 font-semibold"
                  variants={itemVariants}
                >
                  My self,
                </motion.p>
                <motion.h1
                  className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-tight"
                  variants={itemVariants}
                >
                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                  >
                    Ahanaf Mubasshir
                  </motion.span>
                </motion.h1>
                <motion.h2
                  className="text-2xl md:text-3xl font-semibold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"
                  variants={itemVariants}
                >
                  <motion.span
                    animate={{
                      backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    style={{
                      background:
                        "linear-gradient(90deg, #a855f7, #ec4899, #a855f7)",
                      backgroundSize: "200% 100%",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    <h1 className="text-3xl md:text-4xl text-purple-600 font-semibold mt-4 h-12">
                      <Typewriter
                        words={[
                          "Junior Fullstack Web Developer",
                          "MERN Stack Web Developer",
                          " Front-End Developer",
                        ]}
                        loop={Infinity}
                        cursor
                        cursorStyle="_"
                        typeSpeed={70}
                        deleteSpeed={50}
                        delaySpeed={1000}
                      />
                    </h1>
                  </motion.span>
                </motion.h2>
              </div>

              <motion.div className="max-w-lg" variants={itemVariants}>
                <p className="text-lg text-white/80 leading-relaxed">
                  Passionate and creative Web Developer with a keen eye for
                  detail and a strong understanding of user experience
                  principles. Dedicated to staying up-to-date with the latest
                  web design trends and technologies to deliver innovative and
                  effective solutions.
                </p>
              </motion.div>

              <motion.div
                className="flex flex-col sm:flex-row gap-4 items-start"
                variants={itemVariants}
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    onClick={() => handleResumeDownload(resumeUrl)}
                    className="hover:bg-purple-600 cursor-pointer hover:border-purple-600 hover:shadow-2xl hover:shadow-purple-600 text-white/90 font-semibold hover:text-white py-2 lg:px-4 px-2 border rounded duration-150 flex items-center gap-x-3"
                  >
                    <motion.div
                      animate={{ rotate: [0, 20] }}
                      transition={{
                        duration: 5,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                    >
                      <Download className="mr-2 h-4 w-4" />
                    </motion.div>
                    Download Resume
                  </Button>
                </motion.div>

                <div className="flex gap-3">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Link
                      href="https://github.com/ahanaf607307"
                      target="_blank"
                    >
                      <Button
                        size="icon"
                        variant="outline"
                        className="rounded-full cursor-pointer border-purple-400/50 text-purple-300 hover:bg-purple-400/20 transition-all duration-300 bg-transparent"
                      >
                        <Github className="h-4 w-4" />
                      </Button>
                    </Link>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: -5 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Link
                      href="https://www.linkedin.com/in/ahanaf-mubasshir-ab1a02333/"
                      target="_blank"
                    >
                      <Button
                        size="icon"
                        variant="outline"
                        className="rounded-full cursor-pointer border-purple-400/50 text-purple-300 hover:bg-purple-400/20 transition-all duration-300 bg-transparent"
                      >
                        <Linkedin className="h-4 w-4" />
                      </Button>
                    </Link>
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>

            {/* Image */}
            <motion.div
              className="flex justify-center lg:justify-end"
              variants={imageVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.div
                className="relative"
                variants={floatingVariants}
                animate="animate"
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-3xl blur-lg opacity-75"
                  animate={{ scale: [1, 1.05, 1], opacity: [0.75, 1, 0.75] }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut" as const,
                  }}
                />
                <motion.div
                  className="relative bg-gradient-to-br from-purple-600 to-pink-600 p-1 rounded-3xl"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="bg-gradient-to-br from-purple-900 to-purple-800 rounded-3xl p-6">
                    <Image
                      src={bannerImage}
                      alt="Ahanaf Mubasshir - Web Developer"
                      width={300}
                      height={400}
                      className="rounded-2xl object-cover"
                      priority
                    />
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Floating particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {Array.from({ length: 8 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-purple-300/30 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [-20, 20, -20],
                x: [-10, 10, -10],
                opacity: [0.3, 1, 0.3],
                scale: [1, 1.5, 1],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
                ease: "easeInOut" as const,
              }}
            />
          ))}
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-32 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 0.8 }}
        >
          <Link href="#about" className="inline-block">
            <motion.div
              className="flex flex-col items-center gap-2 group"
              animate={{ y: [0, 10, 0] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut" as const,
              }}
            >
              <div className="w-6 h-10 border-2 border-purple-400/50 rounded-full flex justify-center">
                <motion.div
                  animate={{ y: [0, 8, 0] }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut" as const,
                  }}
                >
                  <ArrowDown className="h-4 w-4 text-purple-300 group-hover:text-white transition-colors mt-2" />
                </motion.div>
              </div>
            </motion.div>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
