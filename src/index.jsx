import React from "react"
import ReactDOM from "react-dom"

import app from "./firebase.js"

import Sidebar from "react-sidebar"
import { BrowserRouter, Route, Link, Switch } from "react-router-dom"
import posed, { PoseGroup } from "react-pose"

import Loadable from "react-loadable"

const Load = () => (
  <ReactLoading
    type="bars"
    height={"5%"}
    width={"5%"}
    color="#fff"
    className={styles.loading}
  />
)

const Home = Loadable({
  loader: () => import("./Home" /* webpackChunkName: "home" */),
  loading: Load
})
const Artists = Loadable({
  loader: () => import("./Artists" /* webpackChunkName: "artist" */),
  loading: Load
})
// const Entree = Loadable({
//   loader: () => import("./Entree" /* webpackChunkName: "entry" */),
//   loading: Load
// });
const Project = Loadable({
  loader: () => import("./Project" /* webpackChunkName: "proj" */),
  loading: Load
})
const Call = Loadable({
  loader: () => import("./Call" /* webpackChunkName: "call" */),
  loading: Load
})
const P5GUILLAUME = Loadable({
  loader: () => import("./P5GUILLAUME" /* webpackChunkName: "P5GUILLAUME" */),
  loading: Load
})
const PS5MINH = Loadable({
  loader: () => import("./PS5MINH" /* webpackChunkName: "PS5MINH" */),
  loading: Load
})

import ReactLoading from "react-loading"

import styles from "./stylesheet.scss"

import randomColor from "randomcolor"

const mql = window.matchMedia(`(min-width: 800px)`)

const RouteContainer = posed.div({
  enter: {
    opacity: 1,
    delay: 300,
    beforeChildren: true
  },
  exit: {
    opacity: 0,
    transition: { duration: 200 }
  }
})

const today = new Date()

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

if (process.env.NODE_ENV !== "production")
  console.log("Looks like we are in development mode!")

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      sidebarDocked: mql.matches,
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

    this.mediaQueryChanged = this.mediaQueryChanged.bind(this)
    this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this)
    this.findWork = this.findWork.bind(this)
    this.changecolor = this.changecolor.bind(this)
  }

  componentDidMount() {
    mql.addListener(this.mediaQueryChanged)

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

  componentWillUnmount() {
    mql.removeListener(this.mediaQueryChanged)
  }

  onSetSidebarOpen(open) {
    this.setState({ sidebarOpen: open })
  }

  mediaQueryChanged() {
    this.setState({ sidebarDocked: mql.matches, sidebarOpen: false })
  }

  findWork(id) {
    return this.state.events.find(item => item.urlTitle === id)
  }

  render() {
    return (
      <BrowserRouter>
        <div
          className={styles.container}
          style={{ backgroundColor: this.state.bg }}
        >
          <Loader
            pose={
              !this.state.documentready && !this.state.artistsready
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
              <nav>
                <ul onClick={() => this.onSetSidebarOpen(false)}>
                  {this.state.sidebarDocked ? null : (
                    <li
                      className={styles.close}
                      onClick={() => this.onSetSidebarOpen(false)}
                    >
                      x close menu
                    </li>
                  )}
                  <li>
                    <Link to="/about">about</Link>
                  </li>
                  <li>
                    <Link to="/artists">artists</Link>
                  </li>
                  <li className={styles.head}>projects</li>
                  {this.state.events.map((item, index) => {
                    if (new Date(item.date) >= today)
                      return (
                        <li key={index}>
                          <Link to={"/" + item.urlTitle}>{item.title}</Link>
                        </li>
                      )
                  })}
                  {this.state.events.map((item, index) => {
                    if (new Date(item.date) < today)
                      return (
                        <li key={index}>
                          <Link to={"/" + item.urlTitle}>{item.title}</Link>
                        </li>
                      )
                  })}
                  <li className={styles.head}>open call</li>
                  <li>
                    <Link to="/opencall">apply</Link>
                  </li>
                  <li className={styles.head}>online art</li>
                  <li>
                    <Link to="/onlineart">Guillaume Pelletier-Auger</Link>
                  </li>
                  <li>
                    <Link to="/onlineart_2">Minh Duc Nguyen</Link>
                  </li>
                  <li className={styles.head}>community</li>
                  <li>
                    <a
                      rel="noopener"
                      target="_blank"
                      title="toplap website"
                      href="https://toplap.org/"
                    >
                      TOPLAP
                    </a>
                  </li>
                  <li>
                    <a
                      rel="noopener"
                      target="_blank"
                      title="algorave website"
                      href="https://algorave.com/"
                    >
                      Algorave
                    </a>
                  </li>
                </ul>
              </nav>
            }
            open={this.state.sidebarOpen}
            docked={this.state.sidebarDocked}
            onSetOpen={this.onSetSidebarOpen}
            shadow={false}
            sidebarClassName={styles.sidebar}
            contentClassName={styles.content}
            rootClassName={styles.root}
            styles={{
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
            }}
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
            <div className={styles.view}>
              <Route
                render={({ location }) => {
                  return (
                    <PoseGroup>
                      <RouteContainer key={location.pathname}>
                        <Switch location={location}>
                          <Route
                            exact
                            path="/"
                            key="home"
                            component={P5GUILLAUME}
                          />
                          <Route
                            path="/about"
                            key="about"
                            render={props => {
                              return (
                                <Home change={this.changecolor} {...props} />
                              )
                            }}
                          />
                          <Route
                            path="/artists"
                            key="artists"
                            render={props => {
                              if (this.state.artistsready)
                                return (
                                  <Artists
                                    artistlist={this.state.artists}
                                    change={this.changecolor}
                                    app={app}
                                    {...props}
                                  />
                                )
                              else return <div />
                            }}
                          />
                          <Route
                            path="/opencall"
                            key="opencall"
                            render={props => {
                              return (
                                <Call change={this.changecolor} {...props} />
                              )
                            }}
                          />
                          <Route
                            path="/onlineart"
                            component={P5GUILLAUME}
                            key="onlineart"
                          />
                          <Route
                            path="/onlineart_2"
                            component={PS5MINH}
                            key="onlineart_2"
                          />
                          <Route
                            path="/:id"
                            key="project"
                            render={props => {
                              let work = this.findWork(props.match.params.id)
                              if (this.state.documentready)
                                return (
                                  <Project
                                    work={work}
                                    change={this.changecolor}
                                    app={app}
                                    {...props}
                                  />
                                )
                              else return <div />
                            }}
                          />
                        </Switch>
                      </RouteContainer>
                    </PoseGroup>
                  )
                }}
              />
            </div>
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
      </BrowserRouter>
    )
  }
}

export default App

ReactDOM.render(<App />, document.getElementById("app"))

if (process.env.NODE_ENV !== "production")
  if (module.hot) {
    module.hot.accept()
    console.log("activated hot module")
  }
