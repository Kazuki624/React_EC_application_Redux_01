import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Line } from "../components/extra/Line";
import { ProductButton } from "../components/products/ProductButton";
import { Products } from "../components/products/Products";
import { useSelector, useDispatch } from "react-redux";
import { actions as productActions } from "../global/slices/productsSlice";
import { Price } from "../components/extra/Price";

export const Single = () => {
  const { id } = useParams();
  const { single, singleSimilarProducts } = useSelector(
    (state) => state.products
  );
  const dispatch = useDispatch();

  useEffect(() => { dispatch(productActions.setSingle(id))}, [id, dispatch]);

  return (
    <div>
      <div
        id="single"
        className="row justify-content-center align-items-center text-white mx-auto"
      >
        <div className="col-md-6">
          <img
            src={require(`../../public/images/${id}_photo.jpg`)}
            alt={single.name}
            className="card-img-top md-5 md-md-0 p-0 p-lg-5"
          />
        </div>
        <div className="col-md-6 text-center text-md-start">
          <h2 className="fs-1 fw-bold ">{single.name}</h2>
          <div className="fs-5 mb-2">
            <Price value={single.price} />
          </div>
          <p className="lead">{single.description.substring(0, 100)}</p>
          <ProductButton product={single} />
        </div>
      </div>
      <Line />
      <h2 className="text-white text-center my-4">
        Similar Products Like This
      </h2>
      <Products products={singleSimilarProducts} />
    </div>
  );
};
