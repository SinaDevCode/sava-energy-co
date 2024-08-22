const PanelInfo = (props) => {
  return (
    <div className="flex w-full gap-4 pl-8 pr-16 py-6 justify-end items-center">
      <span
        className="flex w-10 aspect-square justify-center items-center text-base font-bold rounded-full"
        style={{
          color: `${props.textColor}`,
          backgroundColor: `${props.textBackground}`,
        }}
      >
        {props.profile}
      </span>
      <div className="flex flex-col justify-start">
        <span
          className="text-lg font-bold leading-5"
          style={{ color: `${props.textColor}` }}
        >
          {props.name}
        </span>
        <span className="text-xs text-Grey">Administrator</span>
      </div>
    </div>
  );
};

export default PanelInfo;
