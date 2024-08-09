import footerDetails from "../images/sample/footerDetails.png";

function Footer() {
  return (
    <div className="relative bg-blue border-t-2 border-gold p-4">
      <p className="text-center text-light">Copyright © SAVA Energy 2023</p>
      <img
        src={footerDetails}
        className="absolute bottom-0 left-1/2 h-full translate-x-36"
      />
    </div>
  );
}

export default Footer;
