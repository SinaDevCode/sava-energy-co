const PanelInfo = (props) => {
  return (
    <div className="flex px-8 py-3 justify-end items-center w-full gap-4 border-b border-light">
      <span className="w-10 aspect-square flex justify-center items-center font-bold text-cyan-100 rounded-full bg-light">
        {props.profile}
      </span>
      <div className="flex flex-col justify-start">
        <span className="text-lg font-medium leading-5">{props.name}</span>
        <span className="text-xs text-gray">{props.kind}</span>
      </div>
    </div>
  );
};

export default PanelInfo;
