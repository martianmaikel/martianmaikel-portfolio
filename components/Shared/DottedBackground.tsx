import React from 'react'

function DottedBackground() {
  return (
    <div className="relative w-full h-full">
      <div className="absolute inset-0 grid grid-cols-25 gap-0.5">
        {Array.from({ length: 26 }, (_, index) => (
          <div
            className="relative aspect-w-1 aspect-h-1 bg-gray-400 rounded-full"
            key={index}
            style={{
              transform: 'scale(1) translateY(1px)',
              opacity: 0.35,
            }}
          ></div>
        ))}
      </div>
    </div>
  )
}

export default DottedBackground