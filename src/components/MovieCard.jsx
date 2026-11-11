import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Box,
  Button,
} from "@mui/material";
import BookmarkAddIcon from "@mui/icons-material/BookmarkAdd";
import BookmarkRemoveIcon from "@mui/icons-material/BookmarkRemove";
import { useState } from "react";
export default function MovieCard({ movie }) {
  const ratingColor = (rating) => {
    if (rating >= 8) {
      return "green";
    } else if (rating >= 5) {
      return "orange";
    } else {
      return "red";
    }
  };
  const [watchChecked, setWatchChecked] = useState(false);
  return (
    <>
      <Card sx={{ maxWidth: 345, borderRadius: 4, backgroundColor: "#272727" }}>
        <CardMedia
          component="img"
          height="200"
          image={"images/" + movie.id + ".jpg"}
          alt={movie.title}
        />
        <CardContent sx={{ textAlign: "center", p: 1 }}>
          <Typography
            variant="body1"
            sx={{ color: "white", fontWeight: "bold" }}
          >
            {movie.title}
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: 1,
            }}
          >
            <Typography variant="body1" sx={{ color: "white" }}>
              {movie.genre}
            </Typography>
            <Typography
              variant="body1"
              sx={{ color: ratingColor(movie.rating) }}
            >
              {movie.rating}
            </Typography>
          </Box>
          <Box
            sx={{
              mt: 1,
            }}
          >
            <Button
              sx={{
                textTransform: "none",
                borderRadius: 4,
                backgroundColor: watchChecked ? "error.main" : "primary.main",
              }}
              onClick={() => setWatchChecked(!watchChecked)}
              variant="contained"
              endIcon={
                !watchChecked ? <BookmarkAddIcon /> : <BookmarkRemoveIcon />
              }
            >
              {!watchChecked ? "Add to Watchlist" : "Remove from Watchlist"}
            </Button>
          </Box>
        </CardContent>
      </Card>
    </>
  );
}
