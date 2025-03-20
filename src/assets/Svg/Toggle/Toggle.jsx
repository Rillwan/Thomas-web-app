import React from 'react'
import './Toggle.css'

const Toggle = (props) => {

  return (
    <div className={`Toggle__svg ${props?.toggle ? 'active' : ''}`}>
      <svg id="hamburger" className="Header__toggle-svg" viewBox="0 0 60 40">
        <g stroke="" strokeWidth={4} strokeLinecap="round" strokeLinejoin="round">
          <path id="top-line" d="M10,10 L50,10 Z" />
          <path id="middle-line" d="M10,20 L50,20 Z" />
          <path id="bottom-line" d="M10,30 L50,30 Z" />
        </g>
      </svg>
    </div>
  )
}

export default Toggle
