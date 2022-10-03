import { CartItem } from "../components/cart/CartItem";
import { NoContent } from "../components/extra/NoContent";
import { CartNumber } from "../components/cart/CartNumber";
import { CartBuyButton } from "../components/cart/CartBuyButton";
import { useSelector } from "react-redux";

export const Cart = () => {
    const  {items}  = useSelector(state => state.cart)
    if (items.length === 0) return <NoContent text="Nothing in Your Cart" btnText="Find Products"/>;
    return (
        <div className="row py-3">
            <div className="col-12 col-md-12 col-xl-8 mx-auto">
                <div id="cart" className="border p-3 bg-white text-dark my-3 my-md-0 rounded">
                    <h4 className="md-3 px-1">Cart</h4>
                    <ul className="list-group md-3 cart-list">
                        {items.map((item) => <CartItem key={item.id} item={item} /> )}
                    </ul>
                    <ul className="list-group mt-2">
                        <CartNumber />
                    </ul>
                    <CartBuyButton />
                </div>
            </div>
        </div>
    )
}