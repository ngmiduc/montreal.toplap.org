import React from "react";
import styles from "./styles.scss";

import P5Wrapper from "react-p5-wrapper";
import s from "./sketch";

import { ReactTitle } from "react-meta-tags";

const P5JS = () => (
  <div className={styles.sketch}>
    <ReactTitle title="{toplap > montreal > online art}" />
    <P5Wrapper w={window.innerWidth} h={window.innerHeight} sketch={s} />
  </div>
);

export default P5JS;
