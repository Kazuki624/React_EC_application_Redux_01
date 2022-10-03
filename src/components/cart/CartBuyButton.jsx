import { useNavigate } from "react-router-dom"

export const CartBuyButton = ({title="Buy Now"}) => {
    const nav = useNavigate()
    const buy = () => {
        if(window.confirm("Would you like To Place Your Order??")){
            alert("Order Placed Successhully!")
            nav("/")
            window.location.reload()
        }
        // window.confirm("Would you like To Place Your Order??")
    }

    return(
        <button onClick={buy} className="btn btn-success d-block w-100 fw-bold mt-3">
            {title}
        </button>
    )
}