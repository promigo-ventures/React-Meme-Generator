import React from 'react'

const Header = () => {
  return (
    <header className="header">
    <img 
        src={process.env.PUBLIC_URL + "/trollFace.png"}
        alt="Funny Face" 
    />
    <h1>Meme Generator</h1>
</header>
  )
}

export default Header