import React from 'react';

const UserCard = ({ user }) => {
   return (
      <div className="user-card">
         <img className="user-card-image" src={user.avatar_url} alt='Jensen Koch' />
         <h2>{user.name}</h2>
         <h3 className="bio">{user.bio}</h3>
         <h3 className="location">{user.location}</h3>
      </div>
   )
}

export default UserCard; 