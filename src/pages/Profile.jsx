import React, { useState } from "react";
import ProfileMenu from "../components/ProfileMenu";
import { useSelector } from "react-redux";

const Profile = () => {
  const { isLoading, user } = useSelector((state) => state.auth);

  const initialState = {
    name: user?.name || "",
    email: user?.email || "",
    phone: user?.phone || "",
    role: user?.role || "",
    address: user?.address || {},
  };

  const [profile, setProfile] = useState(initialState);

  return (
    <>
      <section className=" w-[90%] lg:w-[80%]  mx-auto mt-10">
        <div>
          <ProfileMenu />
          <h2 className=" font-semibold text-3xl my-6">Profile</h2>
        </div>
        <div>
          {!isLoading && user && (
            <div></div>
          )}
        </div>
      </section>
    </>
  );
};

export default Profile;
