import React from "react";

const Header = () => {
  // const [showMenu, setShowMenu] = useState(false);
  // const dispatch = useDispatch();
  // const navigate = useNavigate();

  // const logoutUser = async () => {
  //   await dispatch(logout());
  //   await dispatch(RESET_AUTH);
  //   navigate("/login");
  // };

  return (
    <header className=" sticky top-0 w-full z-40 bg-white   py-3">
      <input
        className=" block p-2 w-full bg-gray-100 border rounded placeholder:text-sm placeholder:font-light"
        type="text"
        placeholder="Search for product"
        required
      />
    </header>
  );
};

export default Header;
