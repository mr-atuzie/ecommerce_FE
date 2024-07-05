import React, { useEffect, useState } from "react";
// import ProfileMenu from "../components/ProfileMenu";
import { useDispatch, useSelector } from "react-redux";
import { getUser, logout, updateUser } from "../redux/features/auth/authSlice";
import Loader from "../components/Loader";

// const cloud_name = process.env.REACT_APP_CLOUD_NAME;
// const upload_preset = process.env.REACT_APP_UPLOAD_PRESET;
// const url = "https://api.cloudinary.com/v1_1/domthgc9v/image/upload";

const Profile = () => {
  const { isLoading, user } = useSelector((state) => state.auth);

  const initialState = {
    name: user?.name || "",
    email: user?.email || "",
    phone: user?.phone || "",
  };

  const [profile, setProfile] = useState(initialState);

  const dispatch = useDispatch();

  useEffect(() => {
    if (user === null) {
      dispatch(getUser());
    }
  }, [dispatch, user]);

  useEffect(() => {
    if (user) {
      setProfile({
        name: user?.name || "",
        email: user?.email || "",
        phone: user?.phone || "",
      });
    }
  }, [user]);

  const saveProfile = async (e) => {
    e.preventDefault();

    const userData = {
      name: profile.name,
      phone: profile.phone,
    };

    await dispatch(updateUser(userData));
  };

  const handleInputChange = (e) => {
    const { value, name } = e.target;
    setProfile({ ...profile, [name]: value });
  };

  return (
    <>
      {isLoading && <Loader />}
      <section className=" py-4 lg:py-14">
        <div className="  lg:w-[40%] mx-auto">
          {!isLoading && (
            <>
              <form className="flex flex-col gap-3" onSubmit={saveProfile}>
                <div className="">
                  <label className=" text-sm   capitalize " htmlFor="email">
                    Name
                  </label>
                  <input
                    className=" bg-gray-100 capitalize p-2.5 lg:py-3 rounded-xl block w-full "
                    type="text"
                    name="name"
                    id="name"
                    value={profile.name}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div>
                  <label className=" text-sm  capitalize " htmlFor="email">
                    email
                  </label>
                  <input
                    className=" bg-gray-100  p-2.5 lg:py-3 rounded-xl block w-full "
                    type="email"
                    name="email"
                    id="email"
                    value={profile.email}
                    onChange={handleInputChange}
                    disabled
                  />
                </div>

                <div>
                  <label className=" text-sm   capitalize " htmlFor="phone">
                    phone
                  </label>
                  <input
                    className=" bg-gray-100 capitalize p-2.5 lg:py-3 rounded-xl block w-full "
                    type="text"
                    name="phone"
                    id="phone"
                    value={profile.phone}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <button className=" p-2.5 lg:py-3 mt-6 text-sm lg:text-base font-medium  bg-emerald-500  text-white text-center rounded-xl">
                  Update Profile
                </button>
              </form>
            </>
          )}
        </div>

        <div className="flex justify-center items-center mt-16">
          <button
            onClick={() => dispatch(logout())}
            className=" py-2 flex items-center gap-1 lg:py-3 px-4 w-fit bg-red-600 text-sm  text-white text-center rounded-xl"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15m-3 0-3-3m0 0 3-3m-3 3H15"
              />
            </svg>
            Logout
          </button>
        </div>
      </section>
    </>
  );
};

export const Username = () => {
  const { user } = useSelector((state) => state.auth);
  console.log(user);
  const username = user?.name || "...";
  return <h2 className=" text-red-600"> Hi, {username}</h2>;
};

export default Profile;
