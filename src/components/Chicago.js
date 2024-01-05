import React from 'react'
import "./chicago.css"
import chef from "../assets/restaurant chef B.jpg"


export default function Chicago() {
    return (
        <div className='desc'>
            <div className='left'>
                <strong><h1 id='descheader'>Little Lemon</h1></strong>
                <p>Chicago</p>
                <p id='story'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
            <div className='right'>
                <img src={chef} alt="Logo" />
            </div>
        </div>
    )
}
