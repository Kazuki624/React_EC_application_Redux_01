import { CategorySelector } from "./CategorySelectoor";
import { SearchBar } from "./SearchBar" ;
import { CartButton } from "./CartButton";
import { useNavigate,useLocation } from "react-router-dom";
import { Condition } from "../extra/Condition";

export const Navbar = ({name}) => {
    const nav = useNavigate()
    const {pathname} = useLocation()
    
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top border-bottom">
            <div className="container-fluid px-5">
                <span  onClick={() => nav("/")} className="navbar-brand fw-bold pointer " id="name">
                    {name}
                </span>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSuppportedContent">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarSuppportedContent">
                    <Condition test={(pathname === "/")} success={
                        <>
                            <CategorySelector />
                            <SearchBar />
                        </>
                    }/>
                    <CartButton />
                </div>
            </div>
        </nav>
    )
}