import React from "react"
import ReactDOM from "react-dom"

// utils
import app from "./firebase.js"

// packages
import { Route, Switch } from "react-router-dom"
import posed, { PoseGroup } from "react-pose"

// loaders
import Loadable from "react-loadable"
import ReactLoading from "react-loading"

// styles
import styles from "./stylesheet.scss"

// loading component
const Load = () => (
  <ReactLoading
    type="bars"
    height={"5%"}
    width={"5%"}
    color="#fff"
    className={styles.loading}
  />
)

// routes imports
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

class View extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className={styles.view}>
        <Route
          render={({ location }) => {
            return (
              <PoseGroup>
                <RouteContainer key={location.pathname}>
                  <Switch location={location}>
                    <Route exact path="/" key="home" component={P5GUILLAUME} />
                    <Route
                      path="/about"
                      key="about"
                      render={props => {
                        return (
                          <Home change={this.props.changecolor} {...props} />
                        )
                      }}
                    />
                    <Route
                      path="/artists"
                      key="artists"
                      render={props => {
                        if (this.props.artistsready)
                          return (
                            <Artists
                              artistlist={this.props.artists}
                              change={this.props.changecolor}
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
                          <Call change={this.props.changecolor} {...props} />
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
                        let work = this.props.findWork(props.match.params.id)
                        if (this.props.documentready)
                          return (
                            <Project
                              work={work}
                              change={this.props.changecolor}
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
    )
  }
}

export default View
