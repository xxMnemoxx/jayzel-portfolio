import React from "react";
import Navbar from "@/components/portfolio/Navbar";
import Hero from "@/components/portfolio/Hero";
import Experience from "@/components/portfolio/Experience";
import TechStack from "@/components/portfolio/TechStack";
import Projects from "@/components/portfolio/Projects";
import ContactForm from "@/components/portfolio/ContactForm";
import Footer from "@/components/portfolio/Footer";

export default function Home() { 
  return (
    <div className="game-shell min-h-screen selection:bg-amber-300/40 selection:text-stone-950">
      <Navbar />

      <main className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Hero />
        <Experience />
        <TechStack />
        <Projects />
        <ContactForm />
      </main>

      <Footer />
    </div>
  );
}
