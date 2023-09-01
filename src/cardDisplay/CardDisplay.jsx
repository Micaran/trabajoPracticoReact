import React, { useState } from "react";
import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
} from "@mui/material";
import PokemonModal from "../pokemonModal/PokemonModal";

const CardDisplay = ({ id, name, image, indexPokedex, additionalInfo }) => {
  const [open, setOpen] = useState(false);

  const handleOpenModal = () => {
    setOpen(true);
  };

  const handleCloseModal = () => {
    setOpen(false);
  };

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea additionalInfo onClick={handleOpenModal}>
        <CardMedia
          component="img"
          height="140"
          image={image}
          alt="green iguana"
        />
        <CardContent>
          {indexPokedex && (
            <Typography gutterBottom variant="h4" component="div">
              N° {indexPokedex < 100 ? `0${indexPokedex}` : indexPokedex}
            </Typography>
          )}
          <Typography gutterBottom variant="h3" component="div">
            {name}
          </Typography>
        </CardContent>
      </CardActionArea>

      <PokemonModal
        open={open}
        handleClose={handleCloseModal}
        additionalInfo={additionalInfo}
      />
    </Card>
  );
};

export default CardDisplay;
