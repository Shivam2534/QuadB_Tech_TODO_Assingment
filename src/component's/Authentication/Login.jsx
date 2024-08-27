import { useState } from "react";
import { useDispatch } from "react-redux";
import { isUserLoggedIn } from "../../Store/authSlice";
import { useNavigate } from "react-router";

function Login() {
  const [username, setusername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    const UserCradentials = {
      Username: username,
      Password: password,
    };

    localStorage.setItem("UserCradentials", JSON.stringify(UserCradentials));
    dispatch(isUserLoggedIn(true));

    navigate("/");
  };

  return (
    <div className="dark:bg-[#232323] flex items-center justify-center h-full bg-gray-100">
      <div className="dark:bg-[#232323] border bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="dark:text-white text-black text-2xl font-bold mb-6 text-center">
          Login
        </h2>
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label
              className="block text-gray-700 font-semibold mb-2 dark:text-white"
              htmlFor="email"
            >
              Username
            </label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setusername(e.target.value)}
              className="dark:text-white dark:bg-[#232323] w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 "
              required
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 font-semibold mb-2 dark:text-white"
              htmlFor="password"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className=" dark:bg-[#232323] dark:text-white w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-green-400 text-black dark:text-white py-3 rounded hover:bg-green-300 transition duration-300"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
