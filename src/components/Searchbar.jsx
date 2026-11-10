import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import { useState } from "react";

export default function Searchbar({ movies = [] }) {
  const [options, setOptions] = useState([]);
  const handleInputChange = (event, value) => {
    if (value === "") {
      setOptions([]);
      return;
    }
    const filteredOptions = movies.filter((movie) =>
      movie.title.toLowerCase().includes(value.toLowerCase()),
    );
    setOptions(filteredOptions);
  };
  return (
    <Autocomplete
      options={options.map((option) => option.title)}
      forcePopupIcon={false}
      onInputChange={handleInputChange}
      renderInput={(params) => (
        <TextField
          variant="outlined"
          {...params}
          label="Rechercher un film"
          sx={{ "& .MuiOutlinedInput-root": { borderRadius: 6 } }}
        />
      )}
    />
  );
}
