import { Link } from "react-router-dom";
import LogoMotion from "../assets/videos/sava-energy-logo-motion-500x200.mp4";
import Navbar from "../components/navbar";
import Menu from "../components/Menu";
import "../styles/header.css";

const Header = () => {
  return (
    <div className="sticky top-0 left-0 w-full max-h-28 flex items-center justify-between gap-8 z-10 bg-LightWhite">
      <video
        src={LogoMotion}
        muted
        autoPlay
        loop
        className="w-[200px] translate-x-10"
      ></video>
      <div className="w-3/4 h-full flex flex-col items-end justify-between gap-2">
        <Link
          to="/Login"
          className="w-32 py-2 m-2 text-white text-sm font-bold text-center rounded-lg transition-all bg-Cyan hover:bg-Gold text-White"
        >
          Login
        </Link>

        <ul className="navbar flex items-center justify-between px-4 py-0 gap-8">
          <Navbar />
          <Menu />
        </ul>
      </div>
    </div>
  );
};

export default Header;
