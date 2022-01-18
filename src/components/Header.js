export default function Header(props) {
  const darkStyle = {
    backgroundColor: "#2D4263",
    color: "#FEFBF3",
  }

  return (
    <div
      style={props.darkModeON ? darkStyle : null}
      classNameid="about-me-start"
      className="App-header container"
    >
      <div className="toggle-dark-mode">
        <spam className="dark-mode-text">Dark Mode </spam>
        <label class="switch">
          <input onClick={props.toggleDark} type="checkbox" />
          <span class="slider round"></span>
        </label>
      </div>
      <h1>
        Vasyl <span className="letter-l">L.</span> Lespuch
      </h1>
      <h2>Front End Developer</h2>
      <ul>
        <li>
          <a style={props.darkModeON ? darkStyle : null} className="btn-header" href="#about">
            About Me
          </a>
        </li>
        <li>
          <a style={props.darkModeON ? darkStyle : null} className="btn-header" href="https://github.com/lespuch-v">
            GitHub
          </a>
        </li>
        <li>
          <a style={props.darkModeON ? darkStyle : null} className="btn-header" href="#portfolio">
            Portfolio
          </a>
        </li>
        <li>
          <a style={props.darkModeON ? darkStyle : null} className="btn-header" href="#tools">
            Tools
          </a>
        </li>
        <li>
          <a style={props.darkModeON ? darkStyle : null} className="btn-header" href="#contacts">
            Contacts
          </a>
        </li>

      </ul>
    </div>
  );
}
