import { Card, CardMedia, CardContent, Typography } from "@mui/material";
export default function MovieCard({ movie }) {
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
          <Typography variant="body1" sx={{ color: "white" }}>
            {movie.genre}
          </Typography>
        </CardContent>
      </Card>
    </>
  );
}
