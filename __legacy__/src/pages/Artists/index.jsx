import React from "react"
import styles from "./styles.scss"

// meta tag changer
import { ReactTitle } from "react-meta-tags"

// stack grid template layout
import StackGrid from "react-stack-grid"
import sizeMe from "react-sizeme"

class Artists extends React.Component {
  constructor(props) {
    super(props)
    this.props.change("#000")

    this.state = {
      img: []
    }
  }

  render() {
    const {
      size: { width }
    } = this.props

    return (
      <div>
        <ReactTitle title="{toplap > montreal > artists}" />
        <StackGrid
          columnWidth={width <= 768 ? "40%" : 130}
          monitorImagesLoaded={true}
          duration={0}
          gridRef={grid => (this.grid = grid)}
          className={styles.artistgrid}
        >
          <div className={styles.item} key="0">
            <p>
              send us a short description about yourself and a photo in order to
              get added into the community list
            </p>
          </div>

          {this.props.artistlist.map((item, index) => {
            return (
              <div className={styles.item} key={index}>
                <img src={item.pic[0].url} alt="" />
                <p>
                  {item.name + " "}
                  {item.pseudo == "" ? "" : " (" + item.pseudo + ") % "}
                  {item.domain.map((tag, index) => {
                    return (
                      <span key={index} className={styles.tags}>
                        {tag}
                      </span>
                    )
                  })}
                  {" %  (" + item.country + ") => "}
                  {item.url == "" ? null : (
                    <a rel="nofollow" target="blank" href={item.url}>
                      website
                    </a>
                  )}
                </p>
              </div>
            )
          })}
        </StackGrid>
      </div>
    )
  }
}

export default sizeMe()(Artists)
