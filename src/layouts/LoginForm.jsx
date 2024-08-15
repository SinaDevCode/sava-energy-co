import { useState } from "react";
import { Navigate } from "react-router-dom";
import { IconContext } from "react-icons";
import { FiEye, FiEyeOff } from "react-icons/fi";
import accounts from "../db/accounts/accounts";

const LoginForm = () => {
  const [isShowPassword, setIsShowPassword] = useState(false);
  const [usernameValue, setUsernameValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const [checkValue, setCheckValue] = useState(false);

  return (
    <div className="loginForm p-4 h-full flex flex-col items-center justify-center md:border-l-2 border-DarkBlue md:w-3/5">
      {checkValue ? <Navigate to={`/${checkValue.id}`} /> : <></>}
      <h2 className="text-2xl font-bold">Login</h2>
      <span className="relative my-2">
        <input
          type="text"
          name="Username"
          onChange={(e) => {
            e.target.value
              ? e.target.classList.add("fill")
              : e.target.classList.remove("fill");
            setUsernameValue(e.target.value);
          }}
          className="p-4 sm:w-96 w-80 border rounded focus:outline-DarkBlue"
        />
        <label
          htmlFor="Username"
          className="absolute left-2 top-4 pointer-events-none transition bg-White"
        >
          Username&nbsp;*
        </label>
      </span>
      <span className="relative my-2">
        <input
          type={isShowPassword ? "text" : "password"}
          name="Username"
          onChange={(e) => {
            e.target.value
              ? e.target.classList.add("fill")
              : e.target.classList.remove("fill");
            setPasswordValue(e.target.value);
          }}
          className="p-4 sm:w-96 w-80 border rounded focus:outline-DarkBlue"
        />
        <label
          htmlFor="Password"
          className="absolute left-2 top-4 pointer-events-none transition bg-White"
        >
          Password&nbsp;*
        </label>
        <IconContext.Provider value={{ size: 20 }}>
          <div
            className="cursor-pointer absolute top-[18px] right-3"
            onClick={() =>
              setIsShowPassword((previous) => {
                setIsShowPassword(!previous);
              })
            }
          >
            {isShowPassword ? <FiEye /> : <FiEyeOff />}
          </div>
        </IconContext.Provider>
      </span>
      <input
        type="submit"
        value="Sign In"
        className="sm:w-96 w-80 p-3 font-semibold rounded text-sm cursor-pointer mt-8 text-blue outline outline-2 outline-DarkBlue hover:bg-DarkBlue hover:text-White"
        onClick={() => {
          let result = accounts.find(
            (arr) =>
              arr.username === usernameValue.toLowerCase() &&
              arr.password === passwordValue.toLowerCase()
          );
          {
            result
              ? setCheckValue(result)
              : alert("Invalid username or password");
          }
        }}
      />
    </div>
  );
};

export default LoginForm;
