import { useState } from 'react'

import Navbar from './router/Navbar.jsx'
import HeroSection from './components/HeroSection.jsx'
import CurvedLoopSection from './components/CurvedLoopSection.jsx'
import CardSection from './components/CardSection.jsx'

function App() {
  return (
    <div className="relative z-10 flex flex-col items-center container mx-auto">
      <Navbar />
      <HeroSection />
      <div className="relative w-full -mt-9 z-20 backdrop-blur-lg"
        style={{
          WebkitMaskImage:
            "linear-gradient(transparent 0%, black 15%, black 80%, transparent 100%)",
          maskImage:
            "linear-gradient(transparent 0%, black 15%, black 80%, transparent 100%)",
        }}>
        <CurvedLoopSection />
      </div>
      <CardSection />
    </div>
  )
}

export default App