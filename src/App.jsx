import { useState } from "react";

import Navbar from "./router/Navbar.jsx";
import HeroSection from "./components/HeroSection.jsx";
import CurvedLoopSection from "./components/CurvedLoopSection.jsx";
import CardSection from "./components/CardSection.jsx";
import ScrollVelocitySection from "./components/ScrollVelocitySection.jsx";
import LogoLoopSection from "./components/LogoLoopSection.jsx";

function App() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <div className="relative flex flex-col items-center container mx-auto md:px-24">
        <div
          className="relative w-full backdrop-blur-lg mb-15 md:px-2"
          style={{
            WebkitMaskImage: `
              linear-gradient(to bottom, transparent 0%, black 0%, black 85%, transparent 100%),
              linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)
            `,
            maskImage: `
              linear-gradient(to bottom, transparent 0%, black 0%, black 85%, transparent 100%),
              linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)
            `,
            WebkitMaskComposite: "intersect",
            maskComposite: "intersect",
          }}          
        >
          <LogoLoopSection />
        </div>
        <CardSection />
        <div
          className="relative w-full backdrop-blur-lg mt-20 mb-15"
          style={{
            WebkitMaskImage: `
              linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)
            `,
            maskImage: `
              linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)
            `,
            WebkitMaskComposite: "intersect",
            maskComposite: "intersect",
          }}
        >
          <ScrollVelocitySection />
          <CurvedLoopSection />
        </div>
      </div>
    </div>
  );
}

export default App;
