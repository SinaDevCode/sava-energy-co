import Navbar from "../components/navbar";
import NavBtn from "../components/navBtn";
import logo from "../images/logo/logo.png";
import "../styles/style.css";

function Header() {
  return (
    <div className="bg-light h-24 w-full flex items-center">
      <img
        src={logo}
        alt="SavaEnergy Logo"
        className="h-[60%] px-12 md:px-24 xl:px-36"
      />
      <div className="w-full h-full flex flex-col justify-between items-end">
        <NavBtn />
        <Navbar />
      </div>
    </div>
  );
}

export default Header;
