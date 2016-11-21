import React from 'react'

var ChatFeed = React.createClass({
  render() {
    return (
      <article className="eight wide column">
        <form className="ui form fluid segment stacked blue">
          <div className="required field">
             <h4>Harrmalik says</h4>
          </div>
          <div className="field">
            <div className="ui icon input">
              <input required type="text" placeholder="Whats on your mind?" />
              <i className="chat icon"></i>
            </div>
          </div>
          <input className="ui button blue right floated" type="submit" value="Send" id="send" />
        </form>

        <h3 className="ui blue header"><i className="ui chat icon"></i>Chat Feed</h3>
        <div className="ui divider"></div>

        <div className="ui feed message">
          <div className="event">
              <div className="label">
                <img src="http://lorempixel.com/100/100/people/8/"></img>
              </div>
              <div className="content">
                  <div className="summary">
                      <a className="user">
                          Malik Harrison
                      </a>
                      <div className="date">
                          @Harrmalik 34m ago
                      </div>

                  </div>
                  <div className="extra text">
                      This is sample text
                  </div>

                  <div className="meta">
                      <a className="reply">
                          <i className="reply icon"></i> 1 Replies
                      </a>

                      <a className="retweet">
                          <i className="retweet icon"></i> 2 Reposts
                      </a>

                      <a className="like">
                          <i className="like icon"></i> 3 Likes
                      </a>
                  </div>
              </div>
          </div>
        </div>
      </article>
    )
  }
})

export default ChatFeed
