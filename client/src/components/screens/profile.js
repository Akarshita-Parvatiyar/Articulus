import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Sidebar from '../controllers/sidebar'
import './profile.css'

const Profile = () => {
  const [error, setError] = useState("");
  const [userData, setUserData] = useState("");

  useEffect(() => {
    const fetchUserData = async () => {
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("authToken")}`,
        },
      };

      try {
          let id = localStorage.getItem("id")
        const { data } = await axios.get(`/api/private/getuser/${id}`, config);
        setUserData(data);
      } catch (error) {
        localStorage.removeItem("authToken");
        localStorage.removeItem("id")
        setError("You are not authorized please login");
      }
    };

    fetchUserData();
  }, []);
    return (
        <div className='profile'>
        <Sidebar/>
        <div className='info'>
            <p>Name: {userData.username}</p>
            <p>Email: {userData.email}</p>
            <p>Age: {userData.age}</p>
            <p>Gender: {userData.gender}</p>
            <p>Subscription Status: {userData.sub}</p>
        </div>
        </div>
    )
}

export default Profile
