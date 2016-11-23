import React from 'react'
import Navbar from './components/Navbar'
import UserInfoBox from './components/UserInfoBox'
import ChatFeed from './components/ChatFeed'

var Home = React.createClass({
    getInitialState() {
        return ({
            loggedIn: false,
            user: {
                username: "harrmalik",
                password: "password"
            }
        })
    },
    componentWillMount() {
        let component = this
        component.checkIfLogged()
    },
    checkIfLogged() {
        let component = this
        let headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        fetch(`/login`, {method: 'POST', body: JSON.stringify(this.state.user), headers})
            .then(function(response) {
                if(response.status == 200) return response.json()
                else throw new Error('Something went wrong on api server!')
            })
            .then(function(data) {
                component.setState({loggedIn: true})
            })
            .catch(function(error) {
                console.error(error)
            });
    },
    loggedIn() {
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
    },
    loggedOut() {
        return (
            <div>
              <Navbar></Navbar>

              <section className="main ui grid container">
                <article className="six wide column">
                     <h2 className="ui header">
                        <div className="sub header">Hello There</div>
                        Log in to view and create awesome posts
                     </h2>
                </article>

                    <article className="ten wide column">
                     <form className="ui form fluid segment piled blue">
                      <h3 className="ui dividing header">Log in</h3>
                      <p className="text-warning"></p>
                      <div className="two fields">
                        <div className="required field">
                          <label>Username</label>
                          <div className="ui icon input">
                            <input type="text" placeholder="Username"></input>
                            <i className="user icon"></i>
                          </div>
                        </div>
                        <div className="required field">
                          <label>Password</label>
                          <div className="ui icon input">
                            <input type="password" placeholder="Password"></input>
                            <i className="lock icon"></i>
                          </div>
                        </div>
                      </div>
                      <div className="ui error message">
                        <div className="header">We noticed some issues</div>
                      </div>
                      <input type="submit" value="Log in" className="ui button blue" />
                      <a href="/#/register" className="ui button ">Register</a>
                      <a className="ui facebook button" href="/facebook/callback">
                       <i className="facebook icon"></i>
                       Facebook
                    </a>
                     <a className="ui twitter button" href="/twitter">
                       <i className="twitter icon"></i>
                       Twitter
                    </a>
                     <a className="ui google plus button" href="/logingoogle">
                       <i className="google plus icon"></i>
                       Google Plus
                    </a>
                    </form>
                    </article>
              </section>

              <footer>
                  <div className="ui inverted segment">
                    <p>Chat Application 2016</p>
                  </div>
              </footer>
            </div>
        )
    },
    render() {
        return (
            <div>
        {(this.state.loggedIn) ? this.loggedIn() : this.loggedOut()}
        </div>
    )
    }
})

export default Home
