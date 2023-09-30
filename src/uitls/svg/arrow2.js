import { useState } from "react"

export default function Arrow2({onClick}) {
const [isHovered, setIsHovered] = useState(false)
const toggleHover = () => {
    setIsHovered(!isHovered)
}

const linkStyle = {
    color: '#008000',
    textTransform: 'uppercase',
    textDecoration: 'none',
  };
  
  const hoverStyle = {
    color: '#111',
    background: '#39ff14',
    boxShadow: '0 0 50px #39ff14',
  };

    return (<button  style={isHovered ? { ...linkStyle, ...hoverStyle } : linkStyle}  onMouseEnter={toggleHover} onMouseLeave={toggleHover} className={`flex items-center space-x-1 px-2 py-1.5 font-semibold rounded ${isHovered ? 'px-3' : 'none'} `} onClick={onClick}>
        <p>Read More</p>
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`w-5 h-5 transition-transform delay-100 ${isHovered ? 'translate-x-3' : 'none'}`}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5" />
  </svg>
  </button>
  )
}