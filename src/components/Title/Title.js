import React from 'react'
import './Title.css'
export default function Title(props) {
  return (
    <h1 onClick={props.onClick} className={`${props.className} h1`} style={{display: `${props.display}`, color: `${props.color}`, fontSize: `${props.fontSize}`, fontWeight: `${props.fontWeight}`, position: `${props.position}` , right: `${props.right}`, cursor: `${props.cursor}`}}>{props.content}</h1>
  )
}
