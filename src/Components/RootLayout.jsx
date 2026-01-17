import Navbar from "./Navigation/Navbar.jsx";
import {Outlet} from "react-router";

export default function RootLayout() {

    return (<div>

        <Navbar/>
        <Outlet/>

    </div>)

}