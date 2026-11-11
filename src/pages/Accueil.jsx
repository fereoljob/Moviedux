import { Container, Box } from "@mui/material";
import Searchbar from "../components/Searchbar";
import MovieGrid from "../components/MovieGrid";
import Filter from "../components/Filter";
import { useEffect, useState } from "react";
export default function Accueil() {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    fetch("movies.json")
      .then((response) => response.json())
      .then((data) => setMovies(data));
  }, []);
  return (
    <>
      <Container>
        <Box component="main" sx={{ p: 2 }}>
          <Box sx={{ textAlign: "center", my: 4 }}>
            <h1>Bienvenue sur MovieDux</h1>
            <p>
              Découvrez vos films préférés et gérez votre liste de souhaits.
            </p>
          </Box>
        </Box>

        <Searchbar movies={movies} />
        <Filter />
        <MovieGrid movies={movies} />
      </Container>
    </>
  );
}
