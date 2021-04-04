import React from "react"
import ReactDOM from "react-dom"

// packages
import { Link } from "react-router-dom"

// styles
import styles from "./stylesheet.scss"

class Navigation extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      today: new Date()
    }
  }

  render() {
    return (
      <nav>
        <ul onClick={() => this.props.onSetSidebarOpen(false)}>
          {this.props.sidebarDocked ? null : (
            <li
              className={styles.close}
              onClick={() => this.props.onSetSidebarOpen(false)}
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
          {this.props.events.map((item, index) => {
            if (new Date(item.date) >= this.state.today)
              return (
                <li key={index}>
                  <Link to={"/" + item.urlTitle}>{item.title}</Link>
                </li>
              )
          })}
          {this.props.events.map((item, index) => {
            if (new Date(item.date) < this.state.today)
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
    )
  }
}

export default Navigation
