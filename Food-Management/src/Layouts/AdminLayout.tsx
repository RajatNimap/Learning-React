import type { LayoutProps } from "../utils/LayoutProps"
import Footer from "../components/Navbar/Footer"
import AdminNavbar from "../components/Navbar/AdminNavbar"

function AdminLayout({children}:LayoutProps){
    return(
        <>
            <AdminNavbar />
               {children}
            <Footer />
        </>
    )
}

export default AdminLayout