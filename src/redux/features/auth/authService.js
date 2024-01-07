import axios from "axios";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
export const API_URL = `${BACKEND_URL}/api/v1/users/`;

//Register User
const registerUser = async (userData) => {
  const res = await axios.post(API_URL + "register", userData, {
    withCredentials: true,
  });

  return res.data;
};

const authService = { registerUser };

export default authService;
