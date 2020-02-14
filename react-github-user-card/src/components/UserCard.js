import React from 'react';

const UserCard = ({ user }) => {
   return (
      <div>
         <img src={user.avatar_url} alt='Jensen Koch' />
         <h2>{user.name}</h2>
         <h3>{user.bio}</h3>
         <h3>{user.location}</h3>
      </div>
   )
}

export default UserCard; 