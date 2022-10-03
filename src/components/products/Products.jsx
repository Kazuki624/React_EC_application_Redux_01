import { Product } from "./Product";

export const Products = ({ products = [] }) => {
  return (
    <div className="px-lg-5 text-dark">
      <div className="row row-cols-1 row-cols-sm-2 row-cold-lg-3 row-cols-xl-4 gy-4">
        {products.map((product) => (
          <Product key={product.name} product={product} />
        ))}
        {/* <ul className="px-5 bg-white">
          {products.map((product) => (
            <Product key={product.name} product={product} />
          ))}
        </ul> */}
      </div>
    </div>
  );
};
