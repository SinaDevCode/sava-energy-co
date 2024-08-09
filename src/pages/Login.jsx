import { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { IconContext } from "react-icons";
import { CgClose } from "react-icons/cg";
import { FiEye, FiEyeOff } from "react-icons/fi";
import LoginImage from "../images/login/login.jpg";
import LoginDetails from "../images/sample/loginDetails.png";
import accounts from "../db/accounts/accounts";

export default function Login() {
  const [usernameEmpty, setUsernameEmpty] = useState("mx-2");
  const [passwordEmpty, setPasswordEmpty] = useState("mx-2");
  const [isEyeOff, setIsEyeOff] = useState(true);
  const [userValue, setUserValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const [Result, setResult] = useState(false);

  return (
    <div className="w-screen h-screen flex p-4 gap-8 relative">
      <Link to="/" className="cursor-pointer absolute top-6 right-6">
        <CgClose size="24" />
      </Link>
      <img
        src={LoginImage}
        alt=""
        className="w-2/5 lg:w-55 hidden md:block rounded-lg object-cover object-center"
      />
      <div className=" w-full h-full flex flex-col items-center justify-center md:border-l-2 border-blue">
        {Result ? <Navigate to={`/${Result.id}`} /> : <></>}
        <h2 className="text-2xl font-bold">Login</h2>
        <span className="relative my-2">
          <label
            htmlFor="Username"
            className={`absolute left-2 top-4 pointer-events-none transition bg-white ${usernameEmpty}`}
          >
            Username *
          </label>
          <input
            type="text"
            name="Username"
            className="sm:w-96 w-80 p-4 border rounded focus:outline-blue"
            onChange={(e) => {
              e.target.value
                ? setUsernameEmpty("px-2 -translate-y-6 text-xs")
                : setUsernameEmpty("mx-2 text-md");
              setUserValue(e.target.value);
            }}
            onFocus={() => {
              setUsernameEmpty("px-2 -translate-y-6 text-xs");
            }}
          />
        </span>
        <span className="relative my-2">
          <label
            htmlFor="Password"
            className={`absolute left-2 top-4 pointer-events-none transition bg-white ${passwordEmpty}`}
          >
            Password *
          </label>
          <IconContext.Provider value={{ size: 20 }}>
            <div
              className="cursor-pointer absolute top-[18px] right-3"
              onClick={() =>
                setIsEyeOff((previous) => {
                  setIsEyeOff(!previous);
                })
              }
            >
              {isEyeOff ? <FiEye /> : <FiEyeOff />}
            </div>
          </IconContext.Provider>
          <input
            type={isEyeOff ? "password" : "text"}
            name="Password"
            className="sm:w-96 w-80 p-4 border rounded focus:outline-blue"
            onChange={(e) => {
              e.target.value
                ? setPasswordEmpty("px-2 -translate-y-6 text-xs")
                : setPasswordEmpty("mx-2 text-md");
              setPasswordValue(e.target.value);
            }}
            onFocus={() => {
              setPasswordEmpty("px-2 -translate-y-6 text-xs");
            }}
          />
        </span>
        <input
          type="submit"
          value="Sign In"
          className="sm:w-96 w-80 p-3 font-semibold rounded text-sm cursor-pointer mt-8 text-blue outline outline-2 outline-blue hover:bg-blue hover:text-white"
          onClick={() => {
            let result = accounts.find(
              (arr) =>
                arr.username === userValue.toLowerCase() &&
                arr.password === passwordValue.toLowerCase()
            );
            {
              result
                ? setResult(result)
                : alert("Invalid username or password");
            }
          }}
        />
      </div>
      <img
        src={LoginDetails}
        alt=""
        className="absolute bottom-0 right-8 w-[350px] -z-10"
      />
    </div>
  );
}
