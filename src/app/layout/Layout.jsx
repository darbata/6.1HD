import { Outlet } from "react-router-dom";
import Nav from "@/shared/ui/nav/Nav"
// import Footer from "@/shared/ui/footer/Footer"

const Layout = () => {
    return (
        <main className="max-w-[1200px] w-full min-h-screen flex flex-col items-center self-center mx-auto">
            <Nav />
            <Outlet />
            <div>Footer</div>
        </main>
    )
}

export default Layout