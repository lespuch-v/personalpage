import React from 'react';

export default function Contacts() {
  return (
    <div className="App-header container tool-container">
      <hr className="myLine" />
      <h2 id="contacts">Contacts</h2>
      <p>
        You can contact me by
        <a
          className="inline-para-links"
          href="https://www.facebook.com/vasyl.lespuch.3/"
        >
          facebook
        </a>
        or by an email address: info[`at`]lespuch.com
      </p>
    </div>
  );
}
