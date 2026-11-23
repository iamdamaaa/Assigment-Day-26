import { Outlet } from "react-router";

import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";

export default function UserLayout () {
    return (
        <>
        <Navbar />
        <Outlet />
        <Footer />
        </>
    )
}