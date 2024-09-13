const ProductsCard = (props) => {
  return (
    <div className="flex flex-col gap-4 w-[320px]">
      <img src={props.imageURL} alt={props.alt} className="rounded-3xl w-full" />
      <h2 className="text-center font-bold text-Grey">{props.alt}</h2>
    </div>
  );
};

export default ProductsCard;
