
import { HeroSection } from "@/sections/HeroSection";
import ProjectsSection from "./projects/page";
import AboutMe from "./about/page";

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
