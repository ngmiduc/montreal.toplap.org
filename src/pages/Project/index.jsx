import React from "react"
import styles from "./styles.scss"

// packages
import ReactLoading from "react-loading"

// meta tags package
import { ReactTitle } from "react-meta-tags"

class Project extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      img: null
    }
  }

  componentDidMount() {
    this.props.change(this.props.work.color)
  }

  render() {
    return (
      <div>
        <ReactTitle
          title={
            "toplap > montreal > " + this.props.work.urlTitle.toLowerCase()
          }
        />

        {this.props.work.bgvideo == "null" ? (
          <div
            className={styles.vimeowrapper}
            style={{
              backgroundImage: 'url("' + this.props.work.banner[0].url + '")',
              opacity: 0.25,
              filter: "invert(100%) grayscale(100%)",
              zIndex: -1,
              backgroundPosition: "center"
            }}
          />
        ) : (
          <div className={styles.vimeowrapper}>
            <iframe
              src={
                "https://player.vimeo.com/video/" +
                this.props.work.bgvideo +
                "?background=1&muted=1&autoplay=1&loop=1&byline=0&title=0"
              }
              frameBorder="0"
              webkitallowfullscreen="true"
              mozallowfullscreen="true"
              allowFullScreen={true}
            />
          </div>
        )}

        {!("banner" in this.props) ? null : this.state.img == null ? (
          <div className={styles.load}>
            <ReactLoading
              type="bubbles"
              color="#FFF"
              height={"15%"}
              width={"15%"}
              className={styles.loader}
            />
          </div>
        ) : (
          <div className={styles.wrapper}>
            <img alt="" className={styles.banner} src={this.state.img} />
          </div>
        )}

        <div className={styles.projectbox}>
          <h3>
            {this.props.work.date.split("T")[0]} /{" "}
            {this.props.work.title.toUpperCase()}
          </h3>

          <div className={styles.tag}>
            {this.props.work.tags
              ? this.props.work.tags.map((item, index) => {
                  return <span key={index}>#{item}</span>
                })
              : null}
          </div>

          <p className={styles.location}>
            {this.props.work.facebook != "null" ? (
              <a
                className={styles.fb}
                href={this.props.work.facebook}
                target="blank"
                rel="nofollow"
              >
                <img alt="" src="img/icons/facebook2.png" />
              </a>
            ) : null}{" "}
            @{this.props.work.location} / {this.props.work.start} /{" "}
            {this.props.work.price == 0 ? "free" : this.props.work.price}
          </p>

          <div className={styles.link}>
            {this.props.work.links
              ? this.props.work.links.map((item, index) => {
                  return (
                    <a
                      key={index}
                      href={item.url}
                      target="blank"
                      ref="nofollow"
                    >
                      > {item.urlTitle}
                    </a>
                  )
                })
              : null}
          </div>

          <p className={styles.desc}>{this.props.work.description}</p>
        </div>
      </div>
    )
  }
}

export default Project
