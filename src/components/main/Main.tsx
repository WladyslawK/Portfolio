import React from 'react';
import style from "./Main.module.css"

export const Main = () => {
    return (
        <div className={style.main}>
            <div className={style.container}>
                <div className={style.greeting}>
                    <p>Hi there</p>
                    <h1>I am Wladyslaw Kurczeznko</h1>
                    <p>Frontend Developer</p>
                </div>
                <div className={style.photo}>

                </div>
            </div>
        </div>
    );
};