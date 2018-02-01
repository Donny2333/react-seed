import React from 'react'
import { HashRouter, Route, Link } from 'react-router-dom'
import _ from 'lodash'
import menus from '../mock/menus'

export default class Router extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      route: window.location.hash.substr(1)
    }
  }

  componentDidMount() {
    window.addEventListener('hashchange', () => {
      this.setState({
        route: window.location.hash.substr(1)
      })
    })
  }

  render() {
    const Child = () => {
      const Tag = _.find(menus, { path: this.state.route }).component
      return <Tag />
    }

    return (
      <div>
        <h1>App</h1>
        <hr />
        <HashRouter>
          <div>
            <ul>
              {menus.map((router, i) => {
                return (
                  <li key={i}>
                    <Link to={router.path}>{router.name}</Link>
                  </li>
                )
              })}
            </ul>

            <hr />
            <Route component={Child} />
          </div>
        </HashRouter>
      </div>
    )
  }
}
