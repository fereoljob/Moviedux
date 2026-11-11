import Navbar from "./Navbar";
import { Box } from "@mui/material";

export default function Header() {
  return (
    <Box
      sx={{
        position: "sticky",
        top: 0,
        zIndex: 1100,
        backgroundColor: "#272727",
      }}
      component="header"
    >
      <Navbar />
    </Box>
  );
}
