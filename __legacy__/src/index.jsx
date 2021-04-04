import React from "react"
import ReactDOM from "react-dom"

// utils
import app from "./firebase.js"

// packages
import { BrowserRouter, Route, Switch, Link } from "react-router-dom"
import posed, { PoseGroup } from "react-pose"

// external componentx
import Sidebar from "react-sidebar"
import ReactLoading from "react-loading"

// components
import Navigation from "./navigation"
import View from "./view"
import IndexLoader from "./index-loader"

// styles
import styles from "./stylesheet.scss"
import randomColor from "randomcolor"

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      sidebarStyles: {
        root: {
          position: "relative",
          overflow: ""
        },
        content: {
          position: "relative",
          overflowY: "none"
        },
        sidebar: {
          zIndex: 999,
          bottom: "",
          overflowY: ""
        },
        overlay: {
          zIndex: 100,
          backgroundColor: "rgba(0,0,0,0.9)"
        }
      },

      sidebarDocked: window.matchMedia(`(min-width: 800px)`).matches,
      sidebarOpen: false,

      documentready: false,
      artistsready: false,
      footer: "#000",
      bg: randomColor({
        luminosity: "light",
        format: "hsla"
      }),

      events: [],
      artists: []
    }

    this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this)
    this.findWork = this.findWork.bind(this)
    this.changecolor = this.changecolor.bind(this)
  }

  componentDidMount() {
    let events = app.content
      .get({
        schemaKey: "events",
        populate: [
          {
            field: "banner",
            size: {
              width: 667,
              height: 9999,
              quality: 1
            }
          }
        ]
      })
      .then(events => {
        // console.log(events)
        for (var key in events)
          if (events.hasOwnProperty(key))
            this.setState(prevState => ({
              events: [...prevState.events, events[key]]
            }))
      })
      .then(() => {
        this.setState({
          events: this.state.events.sort((a, b) => {
            return new Date(b.date) - new Date(a.date)
          })
        })
        this.setState({ documentready: true })
      })
      .catch(error =>
        console.error(
          "Something went wrong while retrieving the entry. Details:",
          error
        )
      )

    app.content
      .get({
        schemaKey: "artists",
        populate: [
          {
            field: "pic",
            size: {
              width: 375,
              height: 9999,
              quality: 1
            }
          }
        ]
      })
      .then(artists => {
        // console.log(artists)
        for (var key in artists)
          if (artists.hasOwnProperty(key))
            this.setState(prevState => ({
              artists: [...prevState.artists, artists[key]]
            }))
      })
      .then(() => {
        this.setState({ artistsready: true })
      })
      .catch(error =>
        console.error(
          "Something went wrong while retrieving the entry. Details:",
          error
        )
      )
  }

  changecolor(color) {
    if (color != "#000")
      this.setState({
        bg: color,
        footer: "#000"
      })
    else
      this.setState({
        bg: color,
        footer: "#FFF"
      })
  }

  onSetSidebarOpen(open) {
    this.setState({ sidebarOpen: open })
  }

  findWork(id) {
    return this.state.events.find(item => item.urlTitle === id)
  }

  render() {
    return (
      <div
        className={styles.container}
        style={{ backgroundColor: this.state.bg }}
      >
        <IndexLoader
          documentready={this.state.documentready}
          artistsready={this.state.artistsready}
        />

        <header>
          <h1>
            <img src="img/logo/icon.jpg" alt="" />
            <Link to="/">TOPLAPMONTREAL</Link>
          </h1>
          <h2>
            open exchange for new media arts and audio visual performances
          </h2>
        </header>

        <Sidebar
          sidebar={
            <Navigation
              sidebarDocked={this.state.sidebarDocked}
              events={this.state.events}
              onSetSidebarOpen={this.onSetSidebarOpen}
            />
          }
          open={this.state.sidebarOpen}
          docked={this.state.sidebarDocked}
          onSetOpen={this.onSetSidebarOpen}
          shadow={false}
          sidebarClassName={styles.sidebar}
          contentClassName={styles.content}
          rootClassName={styles.root}
          styles={this.state.sidebarStyles}
        >
          {this.state.sidebarDocked ? null : (
            <button
              className={styles.burger}
              onClick={() => this.onSetSidebarOpen(true)}
            >
              <img src="img/menu.png" alt="" />
              menu
            </button>
          )}

          <View
            findWork={this.findWork}
            changecolor={this.changecolor}
            artistsready={this.state.artistsready}
            artists={this.state.artists}
            documentready={this.state.documentready}
          />
        </Sidebar>

        <footer style={{ color: this.state.footer }}>
          toplap montreal &copy; 2019 Montreal /
          <a
            href="https://www.pinkbeton.com"
            style={{
              marginLeft: "1vmin",
              textDecoration: "none",
              color: this.state.footer
            }}
            target="_blank"
          >
            &#9751; pinkbeton
          </a>
        </footer>
      </div>
    )
  }
}

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("app")
)

if (process.env.NODE_ENV !== "production")
  console.log("Looks like we are in development mode!")

if (process.env.NODE_ENV !== "production")
  if (module.hot) {
    module.hot.accept()
    console.log("activated hot module")
  }
