import React, { useEffect, useState } from "react";
import ProfileMenu from "../components/ProfileMenu";
import { useDispatch, useSelector } from "react-redux";
import SocialMediaLinks from "../components/SocialMediaLinks";
import {
  getUser,
  updatePhoto,
  updateUser,
} from "../redux/features/auth/authSlice";
import Loader from "../components/Loader";
import { AiOutlineCloudUpload } from "react-icons/ai";
import { toast } from "react-toastify";

const cloud_name = process.env.REACT_APP_CLOUD_NAME;
const upload_preset = process.env.REACT_APP_UPLOAD_PRESET;
const url = "https://api.cloudinary.com/v1_1/domthgc9v/image/upload";

const Profile = () => {
  const { isLoading, user } = useSelector((state) => state.auth);

  const initialState = {
    name: user?.name || "",
    email: user?.email || "",
    phone: user?.phone || "",
    photo: user?.photo || "",
    role: user?.role || "",
    address: {
      address: user?.address?.address || "",
      state: user?.address?.state || "",
      country: user?.address?.country || "",
    },
  };

  const [profile, setProfile] = useState(initialState);
  const [imagePreview, setImagePreview] = useState(null);
  const [profileImage, setProfileImage] = useState("");
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
        role: user?.role || "",
        photo: user?.photo || "",
        address: {
          address: user?.address?.address || "",
          state: user?.address?.state || "",
          country: user?.address?.country || "",
        },
      });
    }
  }, [user]);

  const saveProfile = async (e) => {
    e.preventDefault();

    const userData = {
      name: profile.name,
      phone: profile.phone,
      address: {
        address: profile.address,
        state: profile.state,
        country: profile.country,
      },
    };

    await dispatch(updateUser(userData));
  };

  const savePhoto = async (e) => {
    e.preventDefault();

    let imageURL;

    try {
      if (
        profileImage !== null &&
        (profileImage.type === "image/jpeg" || "image/jpg" || "image/png")
      ) {
        const saveImage = new FormData();
        saveImage.append("file", profileImage);
        saveImage.append("cloud_name", cloud_name);
        saveImage.append("upload_preset", upload_preset);

        const res = await fetch(url, { method: "post", body: saveImage });

        const imageData = await res.json();

        imageURL = imageData.secure_url.toString();

        const userData = {
          photo: profileImage ? imageURL : profile.photo,
        };

        await dispatch(updatePhoto(userData));
        setImagePreview(null);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  const handleImageChange = (e) => {
    setProfileImage(e.target.files[0]);
    setImagePreview(URL.createObjectURL(e.target.files[0]));
  };

  const handleInputChange = (e) => {
    const { value, name } = e.target;
    setProfile({ ...profile, [name]: value });
  };

  return (
    <>
      <section className=" w-[90%] lg:w-[80%]  mx-auto mt-10">
        {isLoading && <Loader />}
        <div>
          <ProfileMenu />
          <h2 className=" font-semibold text-3xl my-6">Profile</h2>
        </div>
        <div>
          {!isLoading && (
            <>
              <div>
                <div>
                  <img
                    className=" w-56 h-56 rounded-full object-cover"
                    src={imagePreview === null ? user?.photo : imagePreview}
                    alt="profile"
                  />

                  <h3>Role:{profile.role}</h3>
                  {imagePreview !== null && (
                    <button
                      onClick={savePhoto}
                      className=" rounded-xl bg-green-600 text-white w-fit p-2 flex gap-1 items-center"
                    >
                      <AiOutlineCloudUpload size={18} /> Upload photo
                    </button>
                  )}
                </div>
              </div>
              <form
                className=" my-8 flex flex-col gap-3"
                onSubmit={saveProfile}
              >
                <div>
                  <label htmlFor="image">Change Pic</label>
                  <input
                    className=" p-2.5 rounded-xl block w-full lg:w-[350px]"
                    type="file"
                    accept="image/"
                    name="image"
                    id="image"
                    onChange={handleImageChange}
                  />
                </div>

                <div className="">
                  <label htmlFor="email">Name</label>
                  <input
                    className=" bg-gray-200 p-2.5 rounded-xl block w-full lg:w-[350px]"
                    type="text"
                    name="name"
                    id="name"
                    value={profile.name}
                    onChange={handleInputChange}
                  />
                </div>

                <div>
                  <label htmlFor="email">email</label>
                  <input
                    className=" bg-gray-200 p-2.5 rounded-xl block w-full lg:w-[350px]"
                    type="email"
                    name="email"
                    id="email"
                    value={profile.email}
                    onChange={handleInputChange}
                    disabled
                  />
                </div>

                <div>
                  <label htmlFor="phone">phone</label>
                  <input
                    className=" bg-gray-200 p-2.5 rounded-xl block w-full lg:w-[350px]"
                    type="text"
                    name="phone"
                    id="phone"
                    value={profile.phone}
                    onChange={handleInputChange}
                  />
                </div>

                <div>
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
                </div>

                <button className=" p-2.5 w-[350px] bg-red-600 text-white text-center rounded-xl">
                  Submit
                </button>
              </form>
            </>
          )}
        </div>
      </section>
      <SocialMediaLinks />
    </>
  );
};

export const Username = () => {
  const { user } = useSelector((state) => state.auth);
  const username = user?.name || "...";
  return <h2 className=" text-red-600"> Hi, {username}</h2>;
};

export default Profile;
