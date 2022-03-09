import React, { Component } from "react";
import styles from "./Card.module.css";

export default class ButtonRow extends Component{
    render(){
        return(
            <div className={styles.wrapper}>
                <div className={styles.card}>
                    <img id={styles.pic1} src="./img_avatar.png"></img>
                    <div className={styles.text}>
                        <h2>John Doe</h2>
                        <p>Architect & Engineer</p>
                    </div>
                </div>
            </div>
        )
    }
}