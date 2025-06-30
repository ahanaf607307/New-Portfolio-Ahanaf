import { About } from "@/components/Components/About";
import { Banner } from "@/components/Components/Banner";
import { Contact } from "@/components/Components/Contact";
import { Footer } from "@/components/Components/Footer";

import { Navbar } from "@/components/Components/Navbar";
import Projects from "@/components/Components/Projects";

import { Skills } from "@/components/Components/Skills";

export default function Home() {
  return (
    <div className="min-h-screen ">
      <Navbar />
      <main>
        <Banner />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
