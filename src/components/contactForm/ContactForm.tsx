import React from 'react';
import styles from "./ContactForm.module.css"


export const ContactForm = () => {
    return (
        <div className={styles.mainContainer}>
            <h3>Contact</h3>
            <form className={styles.formContainer}>
                <input type="text"/>
                <input type="text"/>
                <textarea></textarea>
            </form>
        </div>
    );
};