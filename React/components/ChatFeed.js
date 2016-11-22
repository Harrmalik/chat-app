import React from 'react'
import ChatBox from './ChatBox'
import Post from './Post'
import _ from 'lodash'

var ChatFeed = React.createClass({
    getInitialState() {
        return {
            posts: []
        }
    },
    getPosts() {
        // Some API call to get posts
        this.setState({posts: [
            {
                id: 1,
                name: "Malik Harrison",
                displayName: "Harrmalik",
                avatar: "http://lorempixel.com/100/100/people/8/",
                text: "This is sample text",
                createdAt: "34m",
                replies: 1,
                reposts: 2,
                likes: 3
            },
            {
                id: 2,
                name: "Inner Me",
                displayName: "Inner Me",
                avatar: "http://lorempixel.com/100/100/people/7/",
                text: "DELETE ALL OF IT",
                createdAt: "34m",
                replies: 1,
                reposts: 2,
                likes: 3
            },
            {
                id: 3,
                name: "Malik Harrison",
                displayName: "Harrmalik",
                avatar: "http://lorempixel.com/100/100/people/8/",
                text: "Chill thats savage lol 😂",
                createdAt: "34m",
                replies: 1,
                reposts: 2,
                likes: 3
            },
        ]})
    },
    componentWillMount() {
        this.getPosts()
    },
    render() {
        var component = this
        return (
          <article className="eight wide column">
            <ChatBox displayName='Harrmalik' parent={component}></ChatBox>

            <h3 className="ui blue header"><i className="ui chat icon"></i>Chat Feed</h3>
            <div className="ui divider"></div>
            {
                _.map(component.state.posts, function(post) {
                    return (
                        <Post
                            key={post.id}
                            post={post}></Post>
                    )
                })
            }
          </article>
        )
    }
})

export default ChatFeed
