
import React, { useContext } from "react";
import { Context } from "../main";
import Loader from "../components/Loader";

const Profile = () => {

  const {  loading, userr } = useContext(Context);
  console.log(userr);
  return loading ? (
    <Loader />
  ) : (
    <div className="profile">
      <h1 style={{alignItems:'center'}}>Name :- {userr?.name}</h1>
      <p>Email :- {userr?.email}</p>
    </div>

  //  return <div>Profile</div>
  );
};

export default Profile;