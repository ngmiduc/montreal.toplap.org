import React from "react";
import styles from "./styles.scss";

import P5Wrapper from "react-p5-wrapper";
import s from "./sketch";
import { ReactTitle } from "react-meta-tags";

const Entree = () => (
  <div className={styles.sketch}>
    <ReactTitle title="{toplap > montreal}" />
    <P5Wrapper sketch={s} w={window.innerWidth} h={window.innerHeight} />
  </div>
);

export default Entree;
