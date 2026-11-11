import { Box, Typography, Select, MenuItem } from "@mui/material";
export default function Filter() {
  return (
    <Box
      sx={{
        display: "flex",
        gap: 1,
        justifyContent: "flex-end",
        mt: 1,
      }}
    >
      <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
        <Typography variant="body2">Genre</Typography>
        <Select sx={{ minWidth: "120px" }} defaultValue="all">
          <MenuItem value="all">All</MenuItem>
          <MenuItem value="action">Action</MenuItem>
          <MenuItem value="drama">Drama</MenuItem>
          <MenuItem value="horror">Horror</MenuItem>
          <MenuItem value="fantasy">Fantasy</MenuItem>
        </Select>
      </Box>
      <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
        <Typography variant="body2">Rating</Typography>
        <Select sx={{ minWidth: "120px" }} defaultValue="all">
          <MenuItem value="all">All</MenuItem>
          <MenuItem value="Good">Good</MenuItem>
          <MenuItem value="Average">Average</MenuItem>
          <MenuItem value="Bad">Bad</MenuItem>
        </Select>
      </Box>
    </Box>
  );
}
