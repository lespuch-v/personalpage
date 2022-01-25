import logo from "../images/imgs/user.png";
import youtube from "../images/imgs/yourube1.svg";
import facebook from "../images/imgs/facebook1.svg";
import github from "../images/imgs/github.svg";
import twitter from "../images/imgs/twitter.svg";

export default function Introduction(props) {
  const darkStyle = {
    backgroundColor: "#2D4263",
    color: "#FEFBF3",
  };

  return (
    <div
      style={props.darkModeON ? darkStyle : null}
      className="App-header container introduction--container"
    >
      <div>
        <h2 id="about">Hi, I'm Vasyl!</h2>
        <p>
          And I'm a Front-end Developer. I love creating web applications that
          users can view and interact with.
        </p>
        <p>
          My main focus is Front-End development which client-side development
          with the use of technologies such as
          <a
            style={props.darkModeON ? darkStyle : null}
            className="inline-para-links"
            href="https://developer.mozilla.org/en-US/docs/Web/HTML"
          >
          HTML,
          </a>
          <a
            style={props.darkModeON ? darkStyle : null}
            className="inline-para-links"
            href="https://developer.mozilla.org/en-US/docs/Web/CSS"
          >
            CSS,
          </a>
          <a
            style={props.darkModeON ? darkStyle : null}
            className="inline-para-links"
            href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
          >
          JavaScript
          </a>
          and
          <a style={props.darkModeON ? darkStyle : null} className="inline-para-links" href="https://reactjs.org/">
            React.
          </a>
        </p>

        <h3 className="heading-social">Social Media:</h3>
        <div className="social-media-icons">
          <a
            className="social-media-icons-image"
            href="https://www.youtube.com/"
          >
            
            <img src={youtube} alt="Youtube" />
          </a>
          <a
            className="social-media-icons-image"
            href="https://www.facebook.com/vasyl.lespuch.3/"
          >
            <img src={facebook} alt="Facebook" />
          </a>
          <a
            className="social-media-icons-image"
            href="https://github.com/lespuch-v"
          >
            
            <img src={github} alt="GitHub" />
          </a>
          <a className="social-media-icons-image" href="https://twitter.com/">
            
            <img src={twitter} alt="Twitter" />
          </a>
        </div>
      </div>
      <div>
        <img className="img-headshot" src={logo} alt="user-logo" width="50px" />
      </div>
    </div>
  );
}
