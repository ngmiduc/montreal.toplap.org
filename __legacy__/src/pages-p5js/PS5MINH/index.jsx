import React from "react"
import styles from "./styles.scss"

// p5-js
import P5Wrapper from "react-p5-wrapper"
import minh from "./minh"

// meta tag changer
import { ReactTitle } from "react-meta-tags"

const PS5MINH = () => (
  <div className={styles.sketch}>
    <ReactTitle title="{toplap > montreal > online art}" />
    <P5Wrapper wid={window.innerWidth} hei={window.innerHeight} sketch={minh} />
  </div>
)

export default PS5MINH
