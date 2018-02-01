import React from 'react'
import Home from '../pages/Home'
import About from '../pages/About'
import Inbox from '../pages/Inbox'

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
    let Child
    switch (this.state.route) {
      case '/about':
        Child = About
        break
      case '/inbox':
        Child = Inbox
        break
      default:
        Child = Home
    }

    return (
      <div>
        <h1>App</h1>
        <ul>
          <li>
            <a href="#/home">Home</a>
          </li>
          <li>
            <a href="#/about">About</a>
          </li>
          <li>
            <a href="#/inbox">Inbox</a>
          </li>
        </ul>
        <Child />
      </div>
    )
  }
}
