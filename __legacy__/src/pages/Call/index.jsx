import React from "react"
import styles from "./styles.scss"

// meta tag changer
import { ReactTitle } from "react-meta-tags"

class Call extends React.Component {
  constructor(props) {
    super(props)
    this.props.change("#000")
  }

  render() {
    return (
      <div className={styles.call}>
        <ReactTitle title="{toplap > montreal > open call}" />
        <h3>online art featuring for processing sketches</h3>
        <p>send us your online artwork to get featured on our website</p>
        <h3>audio visual performances</h3>
        <p>send us your performance idea</p>
      </div>
    )
  }
}
export default Call
