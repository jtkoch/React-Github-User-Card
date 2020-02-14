import React from 'react';

const FollowerCard = ({ follower }) => {
   return (
      <div>
         <img src={follower.avatar_url} alt='Images of user' />
         <h2>{follower.login}</h2>
         <h2>{follower.html_url}</h2>
      </div>
   )
}

export default FollowerCard;