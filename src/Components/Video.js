import React from 'react'
import  ReactDOM  from 'react-dom'
import "./Video.css"
const Video = (props) => {
    const handleClick=(e)=>{
        e.preventDefault();
        e.target.muted=!e.target.muted;
    } 
    const handleScroll=(e)=>{
        let next=ReactDOM.findDOMNode(e.target).parentNode.nextSibling
        if(next)
        {
            next.scrollIntoView()
            e.target.muted=true;
        }
    }
  return (
    // <div className="video-div" >
    <video src={props.src} onEnded={handleScroll} className="videos-styling" muted="muted" onClick={handleClick} />
    // </div>

  )
    
}

export default Video