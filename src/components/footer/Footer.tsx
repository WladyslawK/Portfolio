import React from 'react';
import styles from "./Footer.module.css"
import stylesContainer from "../../common/styles/Container.module.css";


export const Footer = () => {
    return (
        <div className={styles.mainContainer}>
            <div className={styles.footerContainer}>
                <h3>Vladyslav Kurchenko</h3>
                <div className={stylesContainer.container}>
                    <div className={styles.imgItem}></div>
                    <div className={styles.imgItem}></div>
                    <div className={styles.imgItem}></div>
                    <div className={styles.imgItem}></div>
                </div>
                <h3>© 2022 All rights reserved</h3>
            </div>

        </div>
    );
};