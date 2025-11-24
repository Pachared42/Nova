import React from 'react'

import MagicBento from '../style/MagicBento'

function CardSection() {
    return (
        <div className="w-full">
            <MagicBento
                textAutoHide={true}
                enableStars={false}
                enableSpotlight={true}
                enableBorderGlow={true}
                enableTilt={true}
                enableMagnetism={true}
                clickEffect={true}
                spotlightRadius={1000}
                particleCount={12}
                glowColor="127, 0, 255"
            />
        </div>
    )
}

export default CardSection