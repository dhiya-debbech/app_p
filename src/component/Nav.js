import React from "react";

const Nav = ({name}) => {
    return(
        <div>
       <h1>{name}</h1>
      <ul class="navmenu">
        <li><a href="#">About</a></li>
        <li><a href="#">Projects</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
        </div>
    )
}
export default Nav