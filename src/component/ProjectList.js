import React from "react";
import Projet from "./Projet";

const ProjectList = ({projects}) => {
   
    return(
        <div>
             <h2 class="text-important">Projects</h2>

{projects.map(el=><Projet el={el}/>)}
        </div>
    )
}

export default ProjectList