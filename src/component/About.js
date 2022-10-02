import React from "react";
import JohneDoe from "./image/John-Doe.jpg"

const About = ({name}) => {
    console.log(name)
    return(
        <div>
       <h1>
        Hello, my name is
        <span class="rotate text-important">{name}</span>,<br />
        and i make horrible websites.
       </h1>
       <img class="avatar" src={JohneDoe} alt="jhon-doe" />
        </div>
    )
}

export default About