import React, { useState, useRef, useEffect } from 'react';

import '../Styles/styles.css';

const Expander = props => {
  const [active, setActive] = useState(true);
  const contentRef = useRef(null);
  let audio = new Audio("/click.mp4")

  const start = () => {
    audio.play()
  }

  useEffect(() => {
    contentRef.current.style.maxHeight = active ? `${contentRef.current.scrollHeight}px` : '0px'
  }, [contentRef, active])

  const toogleActive = () => {
    setActive(!active)
  }

  const titleStyle = {
    fontWeight: 600,
    fontSize: '14px',
  }

  return (
    <div className="expander-section">
      <button className="expander-title">


        <img className="iconImage" src={props.icon}/>
        <p style={titleStyle}> {props.title}</p>
      </button>

      <div
        ref={contentRef}
        className="expander-content"
      >
        {props.children}
      </div>
    </div>
  )
}

export default Expander;