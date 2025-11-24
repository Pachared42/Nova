import React from 'react'

import RotatingText from '../style/RotatingText'
import ColorBends from '../style/ColorBends'

import { HeroConstants } from '../constants/constants'

function HeroSection() {
    return (
        <div className="relative w-full h-fit overflow-visible items-center justify-center py-6">
            <div className="absolute inset-0 opacity-70 z-0 overflow-hidden">
                <ColorBends
                    className="pointer-events-auto"
                    colors={["#8A2CFF", "#7F00FF", "#3A86FF", "#00E5FF", "#C87BFF"]}
                    bendAmount={0.5}
                    rotation={0}
                    speed={0.2}
                    scale={1.1}
                    frequency={2}
                    warpStrength={1}
                    mouseInfluence={1}
                    parallax={0.5}
                    noise={0}
                    transparent={false}
                />
            </div>

            <div className="relative z-10 mt-40 mb-25 flex flex-col items-center justify-center  space-y-3">
                <div className="flex items-center justify-center space-x-5 ">
                    <h1 className="tracking-tighter text-xs sm:text-sm md:text-7xl font-bold"> {HeroConstants.mainTitle} </h1>
                    <RotatingText
                        texts={['Build', 'Test', 'Deploy']}
                        mainClassName="flex item-center justify-center leading-none px-2 sm:px-3 md:px-4 border-b border-white/30 backdrop-blur-xl text-white text-xs sm:text-sm md:text-7xl font-bold overflow-hidden py-0.5 sm:py-1 md:py-2 rounded-3xl shadow-xl"
                        staggerFrom={"last"}
                        initial={{ y: "100%" }}
                        animate={{ y: 0 }}
                        exit={{ y: "-130%" }}
                        staggerDuration={0.025}
                        splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
                        transition={{ type: "spring", damping: 30, stiffness: 400 }}
                        rotationInterval={2000}
                    />
                </div>
                <h1 className="tracking-tighter text-xs sm:text-sm md:text-5xl font-bold"> {HeroConstants.subTitle} </h1>
                <p className="tracking-tight text-xs sm:text-sm md:text-xl text-zinc-300 mt-20"> {HeroConstants.description} </p>
                <button className="mt-6 px-6 py-3 text-white tracking-tight text-xs sm:text-sm md:text-base font-medium cursor-pointer rounded-2xl border border-white/30 backdrop-blur-xl hover:bg-gray-500/15 transition-all duration-300 shadow-xl">
                    {HeroConstants.buttonTextNewProject}
                </button>
            </div>
        </div>
    )
}

export default HeroSection