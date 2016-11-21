import React from 'react'

var UserInfoBox = React.createClass({
  render() {
    return (
      <article className="four wide column">
        <div className="ui segment stacked blue">
        <h3 className="ui header">
           <img src="http://lorempixel.com/100/100/people/8/" className="ui image tiny floated left avatar"></img>
           <a href="/#/user/{{user.displayName}}">BestCoderNA</a>
        </h3>
         <div className="ui mini statistic floated">
           <div className="label">
             Posts
           </div>
           <div className="value">
             2
           </div>
         </div>
         <div className="ui mini statistic floated">
           <div className="label">
            Following
           </div>
           <div className="value">
            0
           </div>
         </div>
         <div className="ui mini statistic floated">
           <div className="label">
            Followers
           </div>
           <div className="value">
            0
           </div>
         </div>
      </div>
      </article>
    )
  }
})

export default UserInfoBox
