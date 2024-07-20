import React from 'react'
import "./overlay.css"
function Overlay() {
  return (
    <div className="object-fill bg-repeat">
      <div>
        <svg 
          width="100%"
          height="100%"
          xmlns="http://www.w3.org/2000/svg"
          className="noise-svg"
        >
          <defs>
            <filter id="noiseFilter">
              <feTurbulence 
                type="fractalNoise" 
                baseFrequency="0.8" 
                numOctaves="3" 
                stitchTiles="stitch" 
              />
            </filter>
            <pattern id="noisePattern" patternUnits="userSpaceOnUse" width="200" height="200">
              <rect width="100%" height="100%" filter="url(#noiseFilter)" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#noisePattern)" />
        </svg>
      </div>
    </div>
  )
}

export default Overlay