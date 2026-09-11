import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import HowIWork from "@/components/HowIWork";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Stack from "@/components/Stack";
import Footer from "@/components/Footer";
import CursorDot from "@/components/CursorDot";
import ProgressBar from "@/components/ProgressBar";
import RevealObserver from "@/components/RevealObserver";

export default function Home() {
  return (
    <>
      <div className="grain" />
      <ProgressBar />
      <CursorDot />
      <Nav />
      <main>
        <Hero />
        <HowIWork />
        <Projects />
        <Experience />
        <Education />
        <Stack />
        <Footer />
      </main>
      <RevealObserver />
    </>
  );
}
