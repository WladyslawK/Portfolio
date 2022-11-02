import React from 'react';
import styles from "./Project.module.css"
import {ProjectType} from "../../../App";

type ProjectFCType = {
    title: string
    description: string
    url: string
}

export const Project: React.FC<ProjectFCType> = (props) => {
    return (
         <div className={styles.mainContainer}>
             <img src={props.url} alt="project-img"/>
             <h4>{props.title}</h4>
             <p>
                 {props.description}
             </p>
         </div>
    );
};
