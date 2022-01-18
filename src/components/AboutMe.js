import React from "react"


export default function AboutMe(props){

    const darkStyle = {
        backgroundColor: "#2D4263",
        color: "#FEFBF3",
      }

    return(
        <div style={props.darkModeON ? darkStyle : null} className="about-me-container container ">
           <h1 id="my-about-heading" >About Me</h1>
           <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut consequuntur ea sunt voluptate, blanditiis incidunt cupiditate maxime itaque est cumque ipsa saepe iure quis molestias pariatur distinctio quaerat at ullam.
           Fugiat est necessitatibus, iste voluptate pariatur repudiandae earum perferendis nihil quam numquam. Facere accusantium et ipsum sint alias delectus voluptatum iste sequi, quasi fugit numquam nihil ullam facilis rem ea?</p>
        </div>
    )
}