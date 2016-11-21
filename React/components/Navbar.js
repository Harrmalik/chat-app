import React from 'react'

var Navbar = React.createClass({
  render() {
    return (
      <header className="ui sixteen wide column">
          <nav className="ui secondary pointing menu blue floating top fixed">
              <a className="item" href="#">
              <i className="home icon"></i> Home
              </a>
          </nav>
      </header>
    )
  }
})

export default Navbar
