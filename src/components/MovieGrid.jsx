import MovieCard from "./MovieCard";
import { Grid } from "@mui/material";

export default function MovieGrid({ movies = [] }) {
  return (
    <Grid container spacing={2} sx={{ p: 2, mt: 3 }}>
      {movies.map((movie) => (
        <Grid key={movie.id} size={3}>
          <MovieCard movie={movie} />
        </Grid>
      ))}
    </Grid>
  );
}
