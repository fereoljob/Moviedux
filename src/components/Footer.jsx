import { Typography, Box } from "@mui/material";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <Box
      sx={{
        backgroundColor: "#272727",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "60px",
      }}
      component="footer"
    >
      <Typography variant="body2" sx={{ color: "white" }}>
        &copy; {currentYear} Movie App. All rights reserved.
      </Typography>
    </Box>
  );
}
