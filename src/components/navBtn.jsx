import { Link } from "react-router-dom";

function navBtn() {
  return (
    <Link
      to="/login"
      className="w-32 py-2 mr-14 mt-2 text-sm rounded-lg bg-gold text-white text-center"
    >
      Login
    </Link>
  );
}

export default navBtn;
