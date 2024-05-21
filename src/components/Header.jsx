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
    <header className="flex items-center sticky top-0 gap-2 w-full z-40 bg-white   py-3">
      <input
        className=" block p-2 w-full bg-gray-100 border rounded-xl placeholder:text-sm placeholder:font-light"
        type="text"
        placeholder="Search for product"
        required
      />
      <div className=" relative">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
          />
        </svg>
        <span className=" w-5 h-5 -right-2 -top-1 rounded-full bg-emerald-500 text-white text-xs flex justify-center items-center p-1 absolute  ">
          1
        </span>
      </div>
    </header>
  );
};

export default Header;
