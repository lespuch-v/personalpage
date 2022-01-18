import React from "react";

export default function Contacts(props){
    const darkStyle = {
        backgroundColor: "#2D4263",
        color: "#FEFBF3",
      }
    return (
        <div style={props.darkModeON ? darkStyle : null} className="App-header container tool-container">
            <hr />
        <h2 id="contacts">Contacts</h2>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident distinctio facere vero error, sapiente deserunt vitae consequatur doloremque debitis quis.</p>
        </div>
    )
}