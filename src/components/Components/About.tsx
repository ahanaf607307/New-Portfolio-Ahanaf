import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
  Building,
  Calendar,
  Code,
  Coffee,
  Lightbulb,
  MapPin,
  Sparkles,
} from "lucide-react";

export function About() {
  return (
    <section
      id="about"
      className="py-20 px-4 relative overflow-hidden bg-[#250c44f8]"
    >
      <div className="">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-20 h-20 border border-white/20 rounded-full"></div>
          <div className="absolute top-32 right-20 w-16 h-16 border border-white/20 rounded-full"></div>
          <div className="absolute bottom-20 left-1/4 w-12 h-12 border border-white/20 rounded-full"></div>
          <div className="absolute bottom-40 right-1/3 w-8 h-8 border border-white/20 rounded-full"></div>
        </div>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-transparent to-indigo-900/20"></div>

        <div className="container max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 mb-4">
              <Sparkles className="h-6 w-6 text-purple-300" />
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                About Me
              </h2>
              <Sparkles className="h-6 w-6 text-purple-300" />
            </div>
            <p className="text-lg text-purple-100 max-w-2xl mx-auto">
              Crafting digital experiences with passion, creativity, and a touch
              of magic
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* About Text */}
            <div className="space-y-6">
              <div className="relative">
                <h3 className="text-2xl font-semibold text-white mb-4">
                  Hello! I'm a Creative Web Developer
                </h3>
                <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-purple-400 to-indigo-400 rounded-full"></div>
              </div>

              <div className="space-y-4 text-purple-100 leading-relaxed">
                <p className="hover:text-white transition-colors duration-300">
                  🚀 I'm a passionate web developer who recently embarked on an
                  exciting journey in the tech industry. My fascination with web
                  development began with a simple question: "How do websites
                  come to life?" This curiosity quickly blossomed into a deep
                  love for creating digital magic.
                </p>
                <p className="hover:text-white transition-colors duration-300">
                  I thrive on transforming creative ideas into functional,
                  beautiful websites and applications. Each project is like
                  solving a puzzle - challenging, rewarding, and always teaching
                  me something new.
                </p>
                <p className="hover:text-white transition-colors duration-300">
                  When I'm not immersed in code, you'll find me exploring
                  cutting-edge technologies, diving into tech articles, or
                  tinkering with personal projects that push my creative
                  boundaries.
                </p>
              </div>

              {/* Fun Facts */}
              <div className="grid grid-cols-3 gap-4 mt-8">
                <div className="text-center p-4 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 hover:bg-white/20 transition-all duration-300">
                  <Code className="h-6 w-6 text-purple-300 mx-auto mb-2" />
                  <div className="text-sm text-purple-100">Code Enthusiast</div>
                </div>
                <div className="text-center p-4 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 hover:bg-white/20 transition-all duration-300">
                  <Coffee className="h-6 w-6 text-purple-300 mx-auto mb-2" />
                  <div className="text-sm text-purple-100">Coffee Powered</div>
                </div>
                <div className="text-center p-4 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 hover:bg-white/20 transition-all duration-300">
                  <Lightbulb className="h-6 w-6 text-purple-300 mx-auto mb-2" />
                  <div className="text-sm text-purple-100">Problem Solver</div>
                </div>
              </div>
            </div>

            {/* Experience Card */}
            <div className="space-y-6">
              <Card className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/15 transition-all duration-300 group">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-gradient-to-br from-purple-400 to-indigo-400 rounded-lg group-hover:scale-110 transition-transform duration-300">
                      <Building className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-lg mb-2 text-white">
                        Web Developer
                      </h4>
                      <p className="text-purple-300 font-medium mb-2">
                        Atmosphere Company LTD
                      </p>
                      <div className="flex items-center space-x-4 text-sm text-purple-200 mb-3">
                        <div className="flex items-center">
                          <Calendar className="h-4 w-4 mr-1" />1 months
                          experience
                        </div>
                        <div className="flex items-center">
                          <MapPin className="h-4 w-4 mr-1" />
                          Professional Role
                        </div>
                      </div>
                      <p className="text-purple-100 text-sm leading-relaxed mb-4">
                        Gained invaluable hands-on experience in web
                        development, working on real-world projects and
                        collaborating with seasoned developers. Contributed to
                        building responsive, user-friendly websites while
                        mastering industry best practices.
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <Badge
                          variant="secondary"
                          className="bg-purple-500/20 text-purple-200 border-purple-400/30 hover:bg-purple-500/30"
                        >
                          Team Collaboration
                        </Badge>
                        <Badge
                          variant="secondary"
                          className="bg-purple-500/20 text-purple-200 border-purple-400/30 hover:bg-purple-500/30"
                        >
                          Project Development
                        </Badge>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Enhanced Stats */}
              <div className="grid grid-cols-2 gap-4">
                <Card className="bg-gradient-to-br from-purple-500/20 to-indigo-500/20 backdrop-blur-sm border-white/20 hover:from-purple-500/30 hover:to-indigo-500/30 transition-all duration-300 group">
                  <CardContent className="p-6 text-center">
                    <div className="text-3xl font-bold text-white mb-2 group-hover:scale-110 transition-transform duration-300">
                      1+
                    </div>
                    <div className="text-sm text-purple-200">
                      Months Experience
                    </div>
                    <div className="text-xs text-purple-300 mt-1">
                      & Growing Strong! 💪
                    </div>
                  </CardContent>
                </Card>
                <Card className="bg-gradient-to-br from-indigo-500/20 to-purple-500/20 backdrop-blur-sm border-white/20 hover:from-indigo-500/30 hover:to-purple-500/30 transition-all duration-300 group">
                  <CardContent className="p-6 text-center">
                    <div className="text-3xl font-bold text-white mb-2 group-hover:scale-110 transition-transform duration-300">
                      2+
                    </div>
                    <div className="text-sm text-purple-200">
                      Projects Completed
                    </div>
                    <div className="text-xs text-purple-300 mt-1">
                      Each One Unique! ⭐
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Call to Action */}
              <div className="text-center p-6 bg-gradient-to-r from-purple-500/20 to-indigo-500/20 backdrop-blur-sm rounded-lg border border-white/20">
                <p className="text-purple-100 mb-2">
                  Ready to bring your ideas to life?
                </p>
                <p className="text-white font-semibold">
                  Let's create something amazing together! 🚀
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
