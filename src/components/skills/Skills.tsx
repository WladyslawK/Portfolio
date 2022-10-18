import React from 'react';
import styles from "./Skills.module.css"
import stylesContainer from "../../common/styles/Container.module.css"
import {Skill, SkillType} from "./skill/Skill";

type SkillsType = {
    skills: Array<SkillType>
}

export const Skills: React.FC<SkillsType> = (props) => {
    return (
        <div className={styles.skillsBlock}>
            <div className={`${stylesContainer.container} ${styles.skillsContainer}`}>
                <h2 className={styles.title}>Skills</h2>
                <div className={styles.skills}>
                    {props.skills.map((skill, index) => <Skill key={index} title={skill.title} description={skill.description}/>)}

                </div>
            </div>
        </div>
    );
};