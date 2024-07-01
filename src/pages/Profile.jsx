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
      <section className=" mt-4 mb-32">
        <div>
          {/* <ProfileMenu /> */}
          {/* <h2 className=" font-semibold text-3xl">Profile</h2> */}
        </div>
        <div>
          {!isLoading && (
            <>
              <form className="flex flex-col gap-3" onSubmit={saveProfile}>
                <div className="">
                  <label
                    className=" text-sm text-gray-600  capitalize "
                    htmlFor="email"
                  >
                    Name
                  </label>
                  <input
                    className=" bg-gray-100 capitalize p-2.5 rounded-xl block w-full lg:w-[350px]"
                    type="text"
                    name="name"
                    id="name"
                    value={profile.name}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div>
                  <label
                    className=" text-sm text-gray-600  capitalize "
                    htmlFor="email"
                  >
                    email
                  </label>
                  <input
                    className=" bg-gray-100 p-2.5 rounded-xl block w-full lg:w-[350px]"
                    type="email"
                    name="email"
                    id="email"
                    value={profile.email}
                    onChange={handleInputChange}
                    disabled
                  />
                </div>

                <div>
                  <label
                    className=" text-sm text-gray-600  capitalize "
                    htmlFor="phone"
                  >
                    phone
                  </label>
                  <input
                    className=" bg-gray-100 p-2.5 rounded-xl block w-full lg:w-[350px]"
                    type="text"
                    name="phone"
                    id="phone"
                    value={profile.phone}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                {/* <div>
                  <label htmlFor="address">address</label>
                  <input
                    className=" bg-gray-200 p-2.5 rounded-xl block w-full lg:w-[350px]"
                    type="text"
                    name="address"
                    id="address"
                    value={profile?.address?.address}
                    onChange={handleInputChange}
                  />
                </div>

                <div>
                  <label htmlFor="state">state</label>
                  <input
                    className=" bg-gray-200 p-2.5 rounded-xl block w-full lg:w-[350px]"
                    type="text"
                    name="state"
                    id="state"
                    value={profile?.address?.state}
                    onChange={handleInputChange}
                  />
                </div>

                <div>
                  <label htmlFor="country">country</label>
                  <input
                    className=" bg-gray-200 p-2.5 rounded-xl block w-full lg:w-[350px]"
                    type="text"
                    name="country"
                    id="country"
                    value={profile?.address?.country}
                    onChange={handleInputChange}
                  />
                </div> */}

                <button className=" p-2.5 mt-6 lg:w-[350px] bg-emerald-500  text-white text-center rounded-xl">
                  Update Profile
                </button>
              </form>
            </>
          )}
        </div>

        <div className="flex justify-center items-center mt-16">
          <button
            onClick={() => dispatch(logout())}
            className=" py-2 px-4 w-fit bg-red-600 text-sm  text-white text-center rounded-xl"
          >
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
