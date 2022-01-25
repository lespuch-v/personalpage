import React from "react";
import vscode from "../images/tools and technologies/vscode.png";
import htmllogo from "../images/tools and technologies/html-logo-1.png";
import csslogo from "../images/tools and technologies/css-logo.png";
import javascriptlogo from "../images/tools and technologies/Javascript-shield.svg";
import reactlogo from "../images/tools and technologies/react-logo.png";
import jestlogo from "../images/tools and technologies/jest.svg";
import gitLogo from "../images/tools and technologies/git.png";
import typescript from "../images/tools and technologies/Typescript_logo.svg";
import webpacklogo from "../images/tools and technologies/webpack.png";

export default function Tools(props) {
  const darkStyle = {
    backgroundColor: "#2D4263",
    color: "#FEFBF3",
  };
  return (
    <div
      style={props.darkModeON ? darkStyle : null}
      className="App-header container tool-container"
    >
      <hr className="myLine" />
      <h2 id="tools">Tools & Technologies</h2>
      <p>
        My favorite text editor is
        <a
          style={props.darkModeON ? darkStyle : null}
          className="inline-para-links"
          href="https://code.visualstudio.com/"
        >
          Visual Studio Code.
        </a>
        Which is rich in features and has a giant community of developers. As
        for code I mainly work with JavaScript, HTML, CSS, and React. Here you
        can see list of tools and technologeis that i worked with.
      </p>
      <div className="tools-container">
        <a
          className="tools-technologies-imgs"
          href="https://developer.mozilla.org/en-US/docs/Web/HTML"
        >
          <img src={htmllogo} alt="The HyperText Markup Language" />
        </a>
        <a
          className="tools-technologies-imgs"
          href="https://developer.mozilla.org/en-US/docs/Web/CSS"
        >
          <img src={csslogo} alt="Cascading Style Sheets" />
        </a>
        <a
          className="tools-technologies-imgs"
          href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
        >
          <img src={javascriptlogo} alt="JavaScript" />
        </a>
        <a
          className="tools-technologies-imgs"
          href="https://code.visualstudio.com/"
        >
          <img src={vscode} alt="Visual Studio Code" />
        </a>
        <a className="tools-technologies-imgs" href="https://reactjs.org/">
          <img src={reactlogo} alt="react logo" />
        </a>
        <a className="tools-technologies-imgs" href="https://jestjs.io/">
          <img src={jestlogo} alt="Jest - Logo" />
        </a>
        <a className="tools-technologies-imgs" href="https://git-scm.com/">
          <img src={gitLogo} alt="Git - Logo" />
        </a>
        <a
          className="tools-technologies-imgs"
          href="https://www.typescriptlang.org/"
        >
          <img src={typescript} alt="TypeScript - Logo" />
        </a>
        <a className="tools-technologies-imgs" href="https://webpack.js.org/">
          <img src={webpacklogo} alt="Webpack - Logo" />
        </a>
      </div>
    </div>
  );
}
