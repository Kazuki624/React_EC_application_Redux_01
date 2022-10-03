import { useDispatch,useSelector } from "react-redux";
import { actions as cartActions } from "../../global/slices/cartSlice";
// import { actions as productActions } from "../../global/slices/cartSlice";
import { Condition } from "../extra/Condition";

export const ProductButton = ({product}) => {

    const dispatch = useDispatch()
    const {items} = useSelector(state => state.cart)
    const isinCart = Boolean(items.find(i => i.id === product.id))
    
    return (
        <Condition test ={ isinCart } success={
            <button onClick={() => dispatch(cartActions.removeFromCart(product))} className="btn btn-outline-danger d-block w-100">
                Remove From The Cart
            </button>
        } 
        fail ={
            <button onClick={() => dispatch(cartActions.addToCart(product))} className="btn btn-outline-success d-block w-100">
                ADD Cart
            </button>
        }
        />
    )
    // if(isinCart){
    //     return (
    //         <button 
    //             onClick={() => dispatch(cartActions.removeFromCart(product))}
    //             className="btn btn-outline-danger d-block w-100">
    //             Remove From The Cart
    //         </button>
    //     )
    // }else{
    //     return (
    //         <button 
    //             onClick={() => dispatch(cartActions.addToCart(product))}
    //             className="btn btn-outline-success d-block w-100">
    //             ADD Cart
    //         </button>
    //     )
    // }
}