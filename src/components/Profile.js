import React from 'react';
import { Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Profile = () => {
  const { user: currentUser } = useSelector(state => state.auth);

  if (!currentUser) {
    return <Redirect to="/login" />;
  }

  return (
    <div className="container">
      <h3>
        Welcome to your profile <strong>{currentUser.user.name}!</strong>
        {' '}
      </h3>
      <p>
        <strong>Name:</strong>
        {' '}
        {currentUser.user.name}
      </p>
      <p>
        <strong>Token:</strong>
        {currentUser.jwt}
      </p>
      <p>
        <strong>User Id:</strong>
        {' '}
        {currentUser.user.id}
      </p>
      <p>
        <strong>Email:</strong>
        {' '}
        {currentUser.user.email}
      </p>
      
    </div>
  );
};

export default Profile;
