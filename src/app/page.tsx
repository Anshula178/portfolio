
import { Header } from "@/sections/Header";
import { HeroSection } from "@/sections/HeroSection";
import ProjectsSection from "./projects/page";
import AboutMe from "./about/page";
import Footer from "./footer/page";
import ContactPage from "./contact/page";
import ConnectBanner from "./connectBanner/page";





export default function Home() {
  return (
    <div className="">
      
      <HeroSection/>
      <ProjectsSection/>
      <AboutMe/>
      <ConnectBanner/>
      
    </div>
  );
}
