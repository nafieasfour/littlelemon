import "./specials.css"
import Card from "./Card.js";
import React from 'react'

export default function Specials() {
  return (
    <>
      <div className="top">
        <h1>This weeks speacials</h1>
        <button className="onlinemenu">Online Menu</button>
      </div>
      <div className="cards">
        <Card />

      </div>
    </>

  )
}
