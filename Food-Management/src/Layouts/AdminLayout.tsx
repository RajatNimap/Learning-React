import type { LayoutProps } from "../utils/LayoutProps";
import AdminNavbar from "../components/Navbar/AdminNavbar";
import Footer from "../components/Navbar/Footer";
import { Box } from "@mui/material";

function AdminLayout({ children }: LayoutProps) {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        width: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Top Navbar */}
      <AdminNavbar />

      {/* Main Content Area */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          width: "100%",
        }}
      >
        {children}
      </Box>

      {/* Footer */}
      <Footer />
    </Box>
  );
}

export default AdminLayout;
