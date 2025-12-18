import { Box, Typography } from "@mui/material";

function Footer() {
  return (
    <div
      style={{
        width: "100%",
        backgroundColor: "#1976d2",
        color: "white",
        textAlign: "center",
        padding: "16px 0",
      }}
    >
      © {new Date().getFullYear()} Learning Footer
    </div>
  );
}

export default Footer;

