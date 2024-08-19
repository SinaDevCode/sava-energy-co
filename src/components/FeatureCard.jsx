import { useState } from "react";

const FeatureCard = (props) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="flex flex-col justify-start items-center w-[350px] h-[400px] px-4 gap-4"
      onMouseEnter={() => setIsHovered(true)}
      onMouseOut={() => setIsHovered(false)}
    >
      <img
        src={isHovered ? props.active : props.inactive}
        className="w-36 aspect-square pointer-events-none"
      />
      <h2
        className={`text-3xl font-bold pointer-events-none ${
          isHovered ? "text-White" : "text-Grey"
        }`}
      >
        {props.title}
      </h2>
      <p className="text-justify text-sm text-Grey pointer-events-none">
        {props.text}
      </p>
    </div>
  );
};

export default FeatureCard;
