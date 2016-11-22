import React from 'react'

var ChatBox = React.createClass({
    add() {
        var headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        fetch(`/api/post/`, {method: 'POST', body: JSON.stringify(post), headers})
            .then(function(response) {
                if(response.status == 200) return response.json()
                else throw new Error('Something went wrong on api server!')
            })
            .then(function(data) {
                component.props.parent.refresh() // Tell feed to update
            })
            .catch(function(error) {
                console.error(error)
            });
    },
    render() {
        return (
            <form className="ui form fluid segment stacked blue">
              <div className="required field">
                 <h4>{this.props.displayName} says</h4>
              </div>
              <div className="field">
                <div className="ui icon input">
                  <input required type="text" placeholder="Whats on your mind?" />
                  <i className="chat icon"></i>
                </div>
              </div>
              <input className="ui button blue right floated" type="submit" value="Send" id="send" onClick={this.add} />
            </form>
        )
    }
})

export default ChatBox
