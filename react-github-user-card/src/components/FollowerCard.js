import React from 'react';

const FollowerCard = ({ follower }) => {
   return (
      <div className="follower-card">
         <img className="follower-card-image" src={follower.avatar_url} alt='Images of user' />
         <h2>{follower.login}</h2>
         <h2>{follower.html_url}</h2>
      </div>
   )
}

export default FollowerCard;