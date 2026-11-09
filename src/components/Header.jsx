import Navbar from "./Navbar";
import { Box } from "@mui/material";

export default function Header() {
  return (
    <Box
      sx={{
        backgroundColor: "#272727",
      }}
    >
      <Navbar />
    </Box>
  );
}
