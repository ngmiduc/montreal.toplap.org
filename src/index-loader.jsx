import React from "react"
import ReactDOM from "react-dom"

// packages
import posed from "react-pose"

// external componentx
import ReactLoading from "react-loading"

// styles
import styles from "./stylesheet.scss"

const Loader = posed.div({
  hidden: {
    opacity: 0,
    zIndex: -1
  },
  visible: {
    opacity: 1,
    zIndex: 9999
  }
})

class IndexLoader extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Loader
        pose={
          !this.props.documentready && !this.props.artistsready
            ? "visible"
            : "hidden"
        }
        className={styles.loader}
      >
        <ReactLoading
          type="bars"
          height={"5%"}
          width={"5%"}
          color="#fff"
          className={styles.loading}
        />
        <p>refresh if necessary</p>
      </Loader>
    )
  }
}

export default IndexLoader
