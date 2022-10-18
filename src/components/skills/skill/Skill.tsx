import React from 'react';
import styles from "./Skill.module.css"

type SkillType = {
    title: string
    description: string
}

export const Skill: React.FC<SkillType> = ({title, description}) => {
    return (
        <div className={styles.skill}>

                <div className={styles.icon}>

                </div>
                <h3>{title}</h3>
                <span>
                    {description}
                </span>

        </div>
    );
};