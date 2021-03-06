import React from 'react';

export default function AboutMe() {
  return (
    <div className="about-me-container container ">
      <h2 id="my-about-heading">About Me</h2>
      <p className="about-me-text">
        I love web-technologies:
        <a
          className="inline-para-links"
          href="https://developer.mozilla.org/en-US/docs/Web/HTML"
        >
          HTML,
        </a>
        <a
          className="inline-para-links"
          href="https://developer.mozilla.org/en-US/docs/Web/CSS"
        >
          CSS,
        </a>
        <a
          className="inline-para-links"
          href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
        >
          JS
        </a>
        and
        <a className="inline-para-links" href="https://reactjs.org/">
          React
        </a>
        and I'm constantly learning new things. The first website that I managed
        to create was in High School. It was a simple
        <a className="inline-para-links" href="https://cs.wordpress.org/">
          WordPress
        </a>
        blog, and I have been fascinated by it ever since.
      </p>
      <p className="about-me-text">
        I'm a fan of testing the code! Which makes code more reliable, readable,
        and flexible - this is something that I'm currently learning & working
        on.
      </p>
      <p className="about-me-text">
        Recently I come across
        <a className="inline-para-links" href="https://www.typescriptlang.org/">
          Typescript,
        </a>
        which is a superset of
        <a
          className="inline-para-links"
          href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
        >
          JavaScript.
        </a>
        It gives my code additional strictness, predictability, and readability.
        This is something that I'm currently learning and working on. In the
        future, I plan to use it as much as possible.
      </p>
    </div>
  );
}
