import React from 'react'

var Post = React.createClass({
  render() {
      var post = this.props.post
    return (
        <div className="ui feed message">
          <div className="event">
              <div className="label">
                <img src={post.avatar}></img>
              </div>
              <div className="content">
                  <div className="summary">
                      <a className="user">
                          {post.name}
                      </a>
                      <div className="date">
                          @{post.displayName} {post.createdAt} ago
                      </div>

                  </div>
                  <div className="extra text">
                      {post.text}
                  </div>

                  <div className="meta">
                      <a className="reply">
                          <i className="reply icon"></i> {post.replies} Replies
                      </a>

                      <a className="retweet">
                          <i className="retweet icon"></i> {post.reposts} Reposts
                      </a>

                      <a className="like">
                          <i className="like icon"></i> {post.likes} Likes
                      </a>
                  </div>
              </div>
          </div>
        </div>
    )
  }
})

export default Post
