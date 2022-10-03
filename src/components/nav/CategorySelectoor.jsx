import { useSelector, useDispatch } from "react-redux";
import { actions as prodictsActions } from "../../global/slices/productsSlice";

export const CategorySelector = () => {
    const {categories, selectedCategories} = useSelector(state => state.products);

    const dispatch = useDispatch()

    return (
        <div className="dropdown mb-3 mb-lg-0">
            <button className="btn btn-outline-success text-white dropdown-toggle"
                    type="button"
                    id="dropdownMenuButton1" 
                    data-bs-toggle="dropdown">
                {selectedCategories}
            </button>
            <ul className="dropdown-menu">
                {categories.map((category,index) => {
                    return (
                        <li 
                            onMouseEnter={( ) => dispatch(prodictsActions.setSelectedCategory(category))}
                            key={index}>
                            <p  className="dropdown-item pointer">{category}</p>
                        </li>
                    )
                })}
                
            </ul>
        </div>
        
    )
}