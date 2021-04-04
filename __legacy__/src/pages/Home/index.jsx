import React from "react"
import styles from "./styles.scss"

// meta tag changer
import { ReactTitle } from "react-meta-tags"

class Home extends React.Component {
  constructor(props) {
    super(props)
    this.props.change("#000")
  }

  render() {
    return (
      <div className={styles.home}>
        <ReactTitle title="{toplap > montreal > about}" />
        <p>
          TOPLAP is an organisation founded in 2004, to explore and promote live
          coding.
        </p>
        <p>
          Live coding is a new direction in electronic music and video and is
          getting somewhere interesting. Live coders expose and rewire the
          innards of software while it generates improvised music and/or
          visuals. All code manipulation is projected for your pleasure. Live
          coding works across musical genres and has been seen in concert halls,
          late night jazz bars, as well as algoraves. There is also a strong
          movement of video-based live coders, writing code to make visuals, and
          many environments can do both sound and video, creating synaesthetic
          experiences.
        </p>
        <p>
          TOPLAP is represented by local communities worldwide. TOPLAP Montreal
          is the local node for the live-coding community in Montreal, who are
          hosting events of live-coding and experimental audio-visual concerts,
          creating a space for the exchange of knowledge. We have founded this
          web-site in order to create a representation about the live coding and
          art community in Montreal.
        </p>
        <p>
          We are focussing in <span className={styles.tag}>live coding</span>,{" "}
          <span className={styles.tag}>generative music</span>,{" "}
          <span className={styles.tag}>experimental music</span>,{" "}
          <span className={styles.tag}>a/v performances</span>,{" "}
          <span className={styles.tag}>creative coding</span>,{" "}
          <span className={styles.tag}>interactive installations</span>,{" "}
          <span className={styles.tag}>video art</span> and{" "}
          <span className={styles.tag}>visual art</span>.
        </p>
        <p>
          To contact us, visit our facebook page =>{" "}
          <a
            className={styles.faceb}
            rel="noopener"
            target="_blank"
            href="https://www.facebook.com/toplapmontreal"
          >
            <img src="img/icons/facebook.png" />
          </a>{" "}
          or you can also reach us out by messaging us over our facebook page :{" "}
          <a rel="noopener" target="_blank" href="http://m.me/toplapmontreal">
            message.me
          </a>
          .
        </p>
      </div>
    )
  }
}

export default Home
