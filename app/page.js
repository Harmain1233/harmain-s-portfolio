import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";
import Experiences from "./components/Experiences";
import EmailSection from "./components/EmailSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="bg-main flex min-h-screen flex-col bg-[#121212]">
      <div className="cover-photo">
        <Navbar />
        <div className="container mt-24 mx-auto px-12 py-4">
          <HeroSection />
          <AboutSection id="about" />
          <ProjectsSection id="projects" />
          <Experiences />
          <EmailSection id="contact" />
          <Footer />
        </div>
      </div> 
    </main>
  );
}
