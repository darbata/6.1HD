import { Outlet } from "react-router-dom";
import Nav from "@/shared/ui/nav/Nav"
import Footer from "@/shared/ui/footer/Footer"

const Layout = () => {
    return (
        <main className="max-w-[1200px] w-full flex flex-col items-center self-center mx-auto overflow-hidden gap-y-14">
            <Nav />
            <Outlet />
            <Footer />
        </main>
    )
}

export default Layout