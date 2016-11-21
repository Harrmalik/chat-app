import React from 'react'
import Navbar from './components/Navbar'
import UserInfoBox from './components/UserInfoBox'
import ChatFeed from './components/ChatFeed'

var Home = React.createClass({

  render() {
    return (
      <div>
        <Navbar></Navbar>

        <section className="main ui grid container">
          <UserInfoBox></UserInfoBox>
          <ChatFeed></ChatFeed>
        </section>

        <footer>
            <div className="ui inverted segment">
              <p>Chat Application 2016</p>
            </div>
        </footer>
      </div>
    )
  }
})

export default Home
