import { Box, Button, ButtonGroup } from "@mui/material";

export default function Navbar() {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          p: 2,
          alignItems: "center",
        }}
      >
        <Box sx={{ flexGrow: 1 }}>
          <Box
            component="img"
            src="logo.png"
            alt="logo moviedux"
            sx={{ height: "70px", width: "200px" }}
          ></Box>
        </Box>
        <Box sx={{ mr: 5 }}>
          <ButtonGroup variant="text" aria-label="text button group">
            <Button
              sx={{ fontWeight: "bold", color: "white", textTransform: "none" }}
            >
              Accueil
            </Button>
            <Button
              sx={{ fontWeight: "bold", color: "white", textTransform: "none" }}
            >
              Watchlist
            </Button>
          </ButtonGroup>
        </Box>
      </Box>
    </>
  );
}
