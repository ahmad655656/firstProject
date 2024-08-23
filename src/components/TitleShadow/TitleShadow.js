import React from 'react'
import './TitleShadow.css'
export default function TitleShadow(props) {
  return (
    <h1 style={{fontSize: `${props.fontSize}`, display: `${props.display}`}} className="firstH1">{props.content}</h1>
  )
}
