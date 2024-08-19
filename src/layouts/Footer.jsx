import footerSample from "../assets/images/samples/footerDetails.png";

const Footer = () => {
  return (
    <div className="relative p-6 border-t-2 border-t-Gold text-center text-sm text-White bg-DarkBlue">
      <p>Copyright © SAVA Energy 2023</p>
      <img src={footerSample} className="absolute h-full bottom-0 right-1/4" />
    </div>
  );
};

export default Footer;
