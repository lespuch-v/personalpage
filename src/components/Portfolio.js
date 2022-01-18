import React from "react"
import snake from "../images/portfolio-images/snake.png"
import porfoliopage from "../images/portfolio-images/portfolio-page.png"
import cryptoDashboard from "../images/portfolio-images/crypto-dashboard.png"
import quizzappimg from "../images/portfolio-images/QuizzAPP.jpg"
import xmaslogo from "../images/portfolio-images/xmascounter.png"
import movieimg from "../images/portfolio-images/movieapp.jpg"
import imagesmeme from "../images/portfolio-images/memegen.jpg"

export default function Portfolio(props) {
    const darkStyle = {
        backgroundColor: "#2D4263",
        color: "#FEFBF3",
      }


    return(
        <div style={props.darkModeON ? darkStyle : null} className="App-header container portfolio-container">
        <h2 id="portfolio" >Portfolio</h2>
            <div class="grid-container">
            <a className="myPortfolioImage" href="https://lespuch-v.github.io/SnameGame/">
            <div className="itm-container">
                <h5>Snake Game</h5>
                <img className="portfolio-pictures" src={snake} alt="Snake" />
                <h5  className="tools-used">HTML / CSS / JS</h5>
            </div>
            </a>

            <a className="myPortfolioImage" href="https://lespuch-v.github.io/React-Quizz-APP/" alt="Quizz APP">
            <div className="itm-container">
                <h5>Quizz APP</h5>
                <img className="portfolio-pictures" src={quizzappimg} alt="Quizz" />
                <h5>JS / React</h5>
            </div>
            </a>

            <a className="myPortfolioImage" href="https://lespuch-v.github.io/ReactJS-MemeGenerator/">
            <div className="itm-container">
                <h5>MemeGen</h5>
                <img className="portfolio-pictures" src={imagesmeme} alt="meme generator" />
                <h5>React / JS</h5>
            </div>
            </a>


            <a className="myPortfolioImage" href="https://lespuch-v.github.io/Chrome-Extension-Crypto-Dashboard/">
            <div className="itm-container">
                <h5>Chrome Ext. Crypto Dashboard</h5>
                <img className="portfolio-pictures" src={cryptoDashboard} alt="CryptoDash board" />
                <h5  className="tools-used">HTML / CSS / JS</h5>
            </div>
            </a>

            <a className="myPortfolioImage" href="https://lespuch-v.github.io/Christmas-Countdown-/">
            <div className="itm-container">
                <h5>X-Mas Counter</h5>
                <img className="portfolio-pictures" src={xmaslogo} alt="X-Mas Counter" />
                <h5>HTML / CSS / JS</h5>
            </div>
            </a>

            <div className="itm-container">
                <h4>Item - 1</h4>
            </div>


            <a className="myPortfolioImage" href="#about-me-start">
            <div className="itm-container">
                <h5>Portfolio Page</h5>
                <img className="portfolio-pictures" src={porfoliopage} alt="Personal Portfolio Page" />
                <h5 className="tools-used" >JS / React</h5>
            </div>
            </a>

            <a className="myPortfolioImage" href="https://lespuch-v.github.io/ReactJSMovieSearchApp/">
            <div className="itm-container">
                <h5>Movie DB APP</h5>
                <img className="portfolio-pictures" src={movieimg} alt="Personal Portfolio Page" />
                <h5>JS / React</h5>
            </div>
            </a>

            <div className="itm-container">
                <h4>Item - 1</h4>
            </div>
        </div>
        </div>
    )
}