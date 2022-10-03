import { useNavigate } from "react-router-dom";
import { Price } from "../extra/Price";
import { ProductButton } from "./ProductButton";

export const Product = ({ product = {} }) => {
  const nav = useNavigate();
  const { id, name, price } = product;
  return (
    <div className="col">
      <div className="card h-100" id="product">
        <img
          src={require(`../../../public/images/${id}_photo.jpg`)}
          alt={name}
          title={name}
          className="card-img-top pointer"
          onClick={() => nav(`/single/${id}`)}
        />
        <div className="card-body p-4">
          <div className="text-center">
            <h6 className="fw-bolder">{name}</h6>
            <span>
              <Price value={price} />
            </span>
          </div>
        </div>
        <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
          <ProductButton product={product} />
        </div>
      </div>
      <li onClick={() => nav(`/single/${product.id}`)}>{product.name}</li>
    </div>
  );
};
