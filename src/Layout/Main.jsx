import { Outlet } from "react-router-dom";
import Navber from "../Pages/Nav/Navber";
import Footer from "../Pages/Footer/Footer";


const Main = () => {
    return (
        <div className="max-w-7xl mx-auto">
            <div className="min-h-[100vh]">
            <Navber></Navber>
            <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Main;