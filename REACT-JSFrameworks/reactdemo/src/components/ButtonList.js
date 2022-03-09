import React, { Component } from "react";
import styles from "./ButtonList.module.css";

export default class ButtonList extends Component{
    render(){
        return(
            <div className={styles.buttons}>
                <button class="ButtonList">Coffee</button>
                <button class="ButtonList">Tea</button>
                <button class="ButtonList">Beer</button>
            </div>
        )
    }
}