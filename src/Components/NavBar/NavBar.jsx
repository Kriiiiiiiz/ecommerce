import React from 'react'

export const NavBar = ({cartCount}) => {
  return (
    <div style={{display:'flex', justifyContent:"space-around", width: "100%", backgroundColor: "lightblue"}}>
    <p>Home</p>
    <p>About</p>
    <p>Contact</p>
    <p>Count: {cartCount} articles</p>
    </div>
  )
}
