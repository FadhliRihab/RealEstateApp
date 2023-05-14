import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Navbar from '../Navbar/Navbar';
import "./Profile.css";
import { delete_profile, get_current, update_profile } from '../redux/action/AuthAction';
import { Navigate, useNavigate } from 'react-router-dom';



const Profile = () => {
 
    const [isEditMode, setIsEditMode] = useState(false);
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const navigate = useNavigate();
 

  const dispatch=useDispatch()
  useEffect(() => {
   dispatch(get_current())
  }, [dispatch])
  const user=useSelector((state)=>state.UserReducer.user)
  useEffect(() => {
    setFirstName(user.firstName);
    setLastName(user.lastName);
    setEmail(user.email);
  }, [user]);


  const handleDeleteProfile = async () => {
    try {
      await dispatch(delete_profile());
      
      navigate('/'); // Redirect to home page after deletion
    } catch (error) {
      console.log(error);
    }
  };

  const handleUpdateProfile = () => {
    setIsEditMode(true);
  };

  const handleSaveProfile = () => {
    const updatedUser = {
      ...user,
      firstName,
      lastName,
      email,
    };
    dispatch(update_profile(updatedUser));
    setIsEditMode(false);
  };

  return (
    <div>
      <Navbar />
      <figure className="fir-image-figure">
        <a className="fir-imageover" rel="noopener" target="_blank" href="https://twitter.com/_davideast">
          <img className="fir-author-image fir-clickcircle" src="https://i.pinimg.com/564x/09/7a/7e/097a7e02d9d7183c77e813c36f1508b9.jpg" alt="Author" />
          <div className="fir-imageover-color" />
          <img className="fir-imageover-image fir-clickcircle" src="https://fir-rollup.firebaseapp.com/twitter-logo.png" />
        </a>
        <figcaption>
          <div className="fig-author-figure-title">{user.firstName} {" "} {user.lastName}</div>
          <div className="fig-author-figure-title">{user.email}</div>
          
        </figcaption>
      </figure>
      <div className='Buttons'>
      <button onClick={handleDeleteProfile}>DELETE Profile</button>
      <button onClick={handleUpdateProfile}>Update Profile</button>
      </div>
      {isEditMode && (
        <div className='EditProfile'>
          <input
            type='text'
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <input
            type='text'
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
          <input
            type='text'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button onClick={handleSaveProfile}>Save</button>
        </div>
      )}
    </div>
  );
};

export default Profile;
