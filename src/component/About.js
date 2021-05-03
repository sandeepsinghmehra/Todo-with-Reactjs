import React from 'react'

const About = () => {
    const ImgStyle = {
        width:"200px",
        height:"200px",
    }
    const pStyle = {
        textAlign:"center",
    }
    return (
       <div>
           <img style={ImgStyle} src="" alt="avtar" />
          <p style={pStyle}> Lorem ipsum dolor sit amet consectetur adipisicing elit.
           Quae soluta beatae excepturi non nihil, id corrupti dolore
           magnam qui deserunt maiores in consequatur aliquid libero
           quis expedita minima voluptate a?
          </p>
        </div>
    )
}

export default About
