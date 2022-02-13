import "../App.css"
export default function Header() {
  return (
    <div className="App-header container">
      <h1 className="text-anim" id="VL-Header">
        <span className="letter-l">V</span>asyl{' '}
        <span className="letter-l">L</span>espuch
      </h1>
      <h2>Front End Developer</h2>
      <ul>
        <li>
          <a className="btn-header" href="#about">
            About Me
          </a>
        </li>
        <li>
          <a className="btn-header" href="https://github.com/lespuch-v">
            GitHub
          </a>
        </li>
        <li>
          <a className="btn-header" href="#portfolio">
            Portfolio
          </a>
        </li>
        <li>
          <a className="btn-header" href="#tools">
            Tools
          </a>
        </li>
        <li>
          <a className="btn-header" href="#contacts">
            Contacts
          </a>
        </li>
      </ul>
    </div>
  );
}
