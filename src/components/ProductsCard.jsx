const ProductsCard = (props) => {
  return (
    <div className="flex flex-col gap-4">
      <img src={props.imageURL} alt={props.alt} className="rounded-3xl" />
      <h2 className="text-center font-bold text-Grey">{props.alt}</h2>
    </div>
  );
};

export default ProductsCard;
