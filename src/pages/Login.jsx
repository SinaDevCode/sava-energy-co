import { useState, useEffect } from "react";
import { Blurhash } from "react-blurhash";
import { Link } from "react-router-dom";
import { CgClose } from "react-icons/cg";
import LoginForm from "../layouts/LoginForm";
import LoginImage from "../assets/images/login/login.jpg";
import LoginDetails from "../assets/images/login/loginDetails.png";
import "../styles/login.css";

const Login = () => {
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const image = new Image();
    image.setAttribute("src", LoginImage);
    image.onload = () => setImageLoaded(true);
  }, []);

  return (
    <div className="w-screen h-screen flex p-4 gap-4 relative">
      <Link to="/" className="cursor-pointer absolute top-6 right-6">
        <CgClose size="24" />
      </Link>

      <Blurhash
        style={{
          display: imageLoaded ? "none" : "inline",
        }}
        hash="LsFZHRM_M{xu?wt8IUt8kDxuRjM{"
        width="40%"
        height="100%"
        resolutionX={32}
        resolutionY={32}
        punch={1}
      />

      <img
        src={LoginImage}
        alt=""
        style={{ display: imageLoaded ? "inline" : "none" }}
        className="w-2/5 h-full rounded-lg object-cover object-center"
      />

      <LoginForm />
      <img
        src={LoginDetails}
        alt=""
        className="Details absolute bottom-0 right-8 w-[350px] -z-10"
      />
    </div>
  );
};

export default Login;
