import axios from "axios";

// const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
export const API_URL = `/api/v1/users/`;

//Register User
const registerUser = async (userData) => {
  const res = await axios.post(API_URL + "register", userData, {
    withCredentials: true,
  });

  return res.data;
};

//Login User
const loginUser = async (userData) => {
  const res = await axios.post(API_URL + "login", userData);

  return res.data;
};

//Logout User
const logoutUser = async () => {
  const res = await axios.get(API_URL + "logout");

  return res.data;
};

//Logout User
const loginStatus = async () => {
  const res = await axios.get(API_URL + "loginStatus");

  return res.data;
};

//get User
const getUser = async () => {
  const res = await axios.get(API_URL + "getUser");

  return res.data;
};

//update User
const updateUser = async (userData) => {
  const res = await axios.patch(API_URL + "updateUser", userData);

  return res.data;
};

//update Photo
const updatePhoto = async (userData) => {
  const res = await axios.patch(API_URL + "updatePhoto", userData);

  return res.data;
};

const authService = {
  registerUser,
  loginUser,
  logoutUser,
  loginStatus,
  getUser,
  updateUser,
  updatePhoto,
};

export default authService;
