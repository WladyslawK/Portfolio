import React from 'react';
import styles from "./Projects.module.css"
import {ProjectType} from "../../App";
import {Project} from "./project/Project";
import stylesContainer from "../../common/styles/Container.module.css";

type ProjectsFCType = {
    projects: ProjectType[]
}

export const Projects: React.FC<ProjectsFCType> = (props) => {
    return (
        <div className={styles.mainContainer}>

            <div className={`${stylesContainer.container} ${styles.container}`}>
                <h2>My Projects</h2>
                <div className={styles.projectsContainer}>
                    {
                        props.projects.map(project => <Project
                            key={project.id}
                            title={project.title}
                            description={project.description}
                            url={project.url}/>)
                    }
                </div>
            </div>

        </div>

    );
};
