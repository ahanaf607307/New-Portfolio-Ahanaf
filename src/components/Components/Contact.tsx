"use client";

import type React from "react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { AnimatePresence, motion, useInView } from "framer-motion";
import { CheckCircle, Mail, MapPin, Phone, Send } from "lucide-react";
import { useRef, useState } from "react";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Refs for scroll-triggered animations
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const leftCardRef = useRef(null);
  const rightCardRef = useRef(null);

  // InView hooks that trigger every time the element comes into view
  const isSectionInView = useInView(sectionRef, {
    once: false,
    margin: "-100px",
  });
  const isHeaderInView = useInView(headerRef, { once: false, margin: "-50px" });
  const isLeftCardInView = useInView(leftCardRef, {
    once: false,
    margin: "-100px",
  });
  const isRightCardInView = useInView(rightCardRef, {
    once: false,
    margin: "-100px",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setIsSubmitted(true);

    // Reset form after 3 seconds
    setTimeout(() => {
      setFormData({ name: "", email: "", message: "" });
      setIsSubmitted(false);
    }, 3000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "ahanaf.mubasshir5@gmail.com",
      href: "mailto:ahanaf.mubasshir5@gmail.com",
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+880 1609961661",
      href: "tel:+880 1609961661",
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Dhaka, Bangladesh",
      href: "#",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="w-full bg-[#250c44f8] py-16 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 50 }}
          animate={
            isHeaderInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }
          }
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Get In Touch
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Let's discuss your project and bring your ideas to life
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Contact Information Section */}
          <motion.div
            ref={leftCardRef}
            initial={{ x: -100, opacity: 0 }}
            animate={
              isLeftCardInView ? { x: 0, opacity: 1 } : { x: -100, opacity: 0 }
            }
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="flex-1"
          >
            <Card className="h-full shadow-xl bg-white/5 border border-white/20 backdrop-blur-sm text-white">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-white">
                  Contact Information
                </CardTitle>
                <p className="text-sm text-gray-300">Get in touch with me</p>
              </CardHeader>
              <CardContent className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    initial={{ x: -50, opacity: 0 }}
                    animate={
                      isLeftCardInView
                        ? { x: 0, opacity: 1 }
                        : { x: -50, opacity: 0 }
                    }
                    transition={{
                      duration: 0.5,
                      delay: isLeftCardInView ? 0.2 + index * 0.1 : 0,
                      ease: "easeOut",
                    }}
                    className="flex items-center space-x-4 p-3 rounded-lg transition-all hover:bg-white/10 hover:scale-105 cursor-pointer group"
                  >
                    <div className="p-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg group-hover:shadow-lg transition-all">
                      <info.icon className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm text-white">
                        {info.title}
                      </h4>
                      {info.href !== "#" ? (
                        <a
                          href={info.href}
                          className="text-gray-300 hover:text-white transition-colors text-sm"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-gray-300 text-sm">{info.value}</p>
                      )}
                    </div>
                  </motion.div>
                ))}

                {/* Location Map Placeholder */}
                <motion.div
                  initial={{ y: 50, opacity: 0 }}
                  animate={
                    isLeftCardInView
                      ? { y: 0, opacity: 1 }
                      : { y: 50, opacity: 0 }
                  }
                  transition={{
                    duration: 0.6,
                    delay: isLeftCardInView ? 0.5 : 0,
                    ease: "easeOut",
                  }}
                  className="mt-6 p-4 bg-white/10 rounded-lg border border-white/20"
                >
                  <h4 className="font-semibold mb-2 text-sm text-white">
                    Our Location
                  </h4>
                  <div className="w-full h-32 bg-white/5 rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <MapPin className="h-8 w-8 mx-auto mb-2 text-gray-300" />
                      <p className="text-xs text-gray-300">
                        Interactive map coming soon
                      </p>
                    </div>
                  </div>
                </motion.div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Form Section */}
          <motion.div
            ref={rightCardRef}
            initial={{ x: 100, opacity: 0 }}
            animate={
              isRightCardInView ? { x: 0, opacity: 1 } : { x: 100, opacity: 0 }
            }
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="flex-1"
          >
            <Card className="h-full shadow-xl bg-white/5 border border-white/20 backdrop-blur-sm text-white">
              <CardHeader className="text-center pb-4">
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={
                    isRightCardInView
                      ? { scale: 1, opacity: 1 }
                      : { scale: 0.8, opacity: 0 }
                  }
                  transition={{
                    duration: 0.5,
                    delay: isRightCardInView ? 0.2 : 0,
                  }}
                >
                  <CardTitle className="text-xl font-bold text-white">
                    Send Message
                  </CardTitle>
                  <p className="text-sm text-gray-300 mt-2">
                    Let's discuss your project
                  </p>
                </motion.div>
              </CardHeader>

              <CardContent>
                <AnimatePresence mode="wait">
                  {!isSubmitted ? (
                    <motion.form
                      key="form"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      onSubmit={handleSubmit}
                      className="space-y-4"
                    >
                      <motion.div
                        initial={{ x: 50, opacity: 0 }}
                        animate={
                          isRightCardInView
                            ? { x: 0, opacity: 1 }
                            : { x: 50, opacity: 0 }
                        }
                        transition={{
                          duration: 0.5,
                          delay: isRightCardInView ? 0.3 : 0,
                          ease: "easeOut",
                        }}
                        className="space-y-2"
                      >
                        <Label htmlFor="name" className="text-white">
                          Name
                        </Label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Your name"
                          required
                          className="bg-white/10 border border-white/20 text-white placeholder:text-gray-300 transition-all duration-200 focus:scale-[1.02] focus:bg-white/15"
                        />
                      </motion.div>

                      <motion.div
                        initial={{ x: 50, opacity: 0 }}
                        animate={
                          isRightCardInView
                            ? { x: 0, opacity: 1 }
                            : { x: 50, opacity: 0 }
                        }
                        transition={{
                          duration: 0.5,
                          delay: isRightCardInView ? 0.4 : 0,
                          ease: "easeOut",
                        }}
                        className="space-y-2"
                      >
                        <Label htmlFor="email" className="text-white">
                          Email
                        </Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="your@email.com"
                          required
                          className="bg-white/10 border border-white/20 text-white placeholder:text-gray-300 transition-all duration-200 focus:scale-[1.02] focus:bg-white/15"
                        />
                      </motion.div>

                      <motion.div
                        initial={{ x: 50, opacity: 0 }}
                        animate={
                          isRightCardInView
                            ? { x: 0, opacity: 1 }
                            : { x: 50, opacity: 0 }
                        }
                        transition={{
                          duration: 0.5,
                          delay: isRightCardInView ? 0.5 : 0,
                          ease: "easeOut",
                        }}
                        className="space-y-2"
                      >
                        <Label htmlFor="message" className="text-white">
                          Message
                        </Label>
                        <Textarea
                          id="message"
                          name="message"
                          rows={4}
                          value={formData.message}
                          onChange={handleChange}
                          placeholder="Tell me about your project..."
                          required
                          className="bg-white/10 border border-white/20 text-white placeholder:text-gray-300 transition-all duration-200 focus:scale-[1.02] focus:bg-white/15 resize-none"
                        />
                      </motion.div>

                      <motion.div
                        initial={{ y: 50, opacity: 0 }}
                        animate={
                          isRightCardInView
                            ? { y: 0, opacity: 1 }
                            : { y: 50, opacity: 0 }
                        }
                        transition={{
                          duration: 0.6,
                          delay: isRightCardInView ? 0.6 : 0,
                          ease: "easeOut",
                        }}
                      >
                        <Button
                          type="submit"
                          className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 transition-all duration-300 hover:scale-105 group"
                        >
                          <Send className="h-4 w-4 mr-2 group-hover:translate-x-1 transition-transform duration-200" />
                          Send Message
                        </Button>
                      </motion.div>
                    </motion.form>
                  ) : (
                    <motion.div
                      key="success"
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      exit={{ scale: 0.8, opacity: 0 }}
                      className="text-center py-8"
                    >
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{
                          delay: 0.2,
                          type: "spring",
                          stiffness: 200,
                        }}
                      >
                        <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
                      </motion.div>
                      <motion.h3
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.4 }}
                        className="text-xl font-semibold text-green-400 mb-2"
                      >
                        Message Sent!
                      </motion.h3>
                      <motion.p
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.5 }}
                        className="text-gray-300"
                      >
                        Thank you for reaching out. I'll get back to you soon!
                      </motion.p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
