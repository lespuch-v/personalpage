import React from "react"
import vscode from "../images/tools and technologies/vscode.png"
import htmllogo from "../images/tools and technologies/html-logo-1.png"
import csslogo from "../images/tools and technologies/css-logo.png"
import javascriptlogo from "../images/tools and technologies/Javascript-shield.svg"
import reactlogo from "../images/tools and technologies/react-logo.png"


export default function Tools(props) {
    const darkStyle = {
        backgroundColor: "#2D4263",
        color: "#FEFBF3",
      }
    return (
        <div style={props.darkModeON ? darkStyle : null}className="App-header container tool-container">
            <hr className="myLine" />
            <h2 id="tools">Tools & Technologies</h2>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error natus deserunt distinctio nisi aliquam officia ut ducimus, qui eaque, nobis, cupiditate perspiciatis molestiae eum tempore dicta beatae? Doloremque, esse iste.
            </p>
            <div className="tools-container">
                <a className="tools-technologies-imgs" href="https://developer.mozilla.org/en-US/docs/Web/HTML"> <img src={htmllogo} alt="The HyperText Markup Language" /></a>
                <a className="tools-technologies-imgs" href="https://developer.mozilla.org/en-US/docs/Web/CSS"> <img src={csslogo} alt="Cascading Style Sheets" /></a>
                <a className="tools-technologies-imgs" href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"> <img src={javascriptlogo} alt="JavaScript" /></a>
                <a className="tools-technologies-imgs" href="https://code.visualstudio.com/"> <img src={vscode} alt="Visual Studio Code" /></a>
                <a className="tools-technologies-imgs" href="https://reactjs.org/"> <img src={reactlogo} alt="react logo" /></a>
            </div>
        </div>
    )
}