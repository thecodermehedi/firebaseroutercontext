import {useContext} from "react";
import {Link} from "react-router-dom";
import {AuthContext} from "../../context/AuthProvider";

const Profile = () => {
  const {user} = useContext(AuthContext);
  return (
    <div className="h-screen flex flex-col justify-center items-center bg-gray-900 text-slate-300 gap-4">
      <h1 className="text-4xl font-bold">Profile</h1>
      <img src={user?.photoURL} alt="profile_picture" className="w-fit" />
      <h2>{user?.displayName}</h2>
      <Link to={`mailto:${user?.email}`}>{user?.email}</Link>
    </div>
  );
};

export default Profile;
