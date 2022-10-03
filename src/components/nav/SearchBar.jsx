// import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { actions as productActions } from "../../global/slices/productsSlice";
// import { actions as cartActions } from "../../global/slices/cartSlice";

export const SearchBar = () => {
    // const [text, setText] =useState("")
    const { searchTerm } = useSelector(state => state.products)

    const dispatch = useDispatch()

    const handleOnSubmit = (e) => {
        e.preventDefault();
    }


    return (
        <form onSubmit={handleOnSubmit} className="d-flex ms-0 ms-lg-3">
            <input 
                type="search" 
                className="form-control ms-md-auto me-2" 
                placeholder="Search Products" 
                onChange={(e) => { dispatch(productActions.setSearchTerm(e.target.value)) }} 
                value={searchTerm}
            />
        </form>
    )
}