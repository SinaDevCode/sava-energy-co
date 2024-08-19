import { useState } from "react";
import { Navigate } from "react-router-dom";
import { IconContext } from "react-icons";
import { FiEye, FiEyeOff } from "react-icons/fi";
import accounts from "../db/accounts/accounts";

const LoginForm = () => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [validInput, setValidInput] = useState(false);
  const [usernameValue, setUsernameValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");

  return (
    <div className="loginForm p-4 h-full flex flex-col items-center justify-center md:border-l-2 border-DarkBlue md:w-3/5">
      {validInput ? <Navigate to={`/${validInput.id}`} /> : <></>}
      <h2 className="text-3xl font-black text-Cyan mb-2">Login</h2>
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
          className="p-4 sm:w-96 w-80 border rounded text-Grey border-Cyan focus:outline-Gold"
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
          type={isPasswordVisible ? "text" : "password"}
          name="Password"
          onChange={(e) => {
            e.target.value
              ? e.target.classList.add("fill")
              : e.target.classList.remove("fill");
            setPasswordValue(e.target.value);
          }}
          className="p-4 sm:w-96 w-80 border rounded text-Grey border-Cyan focus:outline-Gold"
        />
        <label
          htmlFor="Password"
          className="absolute left-2 top-4 pointer-events-none transition bg-White"
        >
          Password&nbsp;*
        </label>
        <IconContext.Provider
          value={{
            size: 20,
            color: "rgb(30, 189, 184)",
          }}
        >
          <div
            className="cursor-pointer absolute top-[18px] right-3"
            onClick={() =>
              setIsPasswordVisible((previousValue) => {
                setIsPasswordVisible(!previousValue);
              })
            }
          >
            {isPasswordVisible ? <FiEye /> : <FiEyeOff />}
          </div>
        </IconContext.Provider>
      </span>
      <input
        type="submit"
        value="Sign In"
        className="sm:w-96 w-80 p-3 font-semibold rounded text-sm cursor-pointer mt-8 transition-all text-White outline outline-2 bg-Cyan outline-Cyan hover:bg-Gold hover:outline-Gold"
        onClick={() => {
          let result = accounts.find(
            (arr) =>
              arr.username === usernameValue.toLowerCase() &&
              arr.password === passwordValue.toLowerCase()
          );
          {
            result
              ? setValidInput(result)
              : alert("Invalid username or password");
          }
        }}
      />
    </div>
  );
};

export default LoginForm;
