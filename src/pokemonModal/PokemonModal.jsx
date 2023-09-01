import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
  Typography,
  CardMedia,
} from "@mui/material";
import "./PokemonModal.css";

const PokemonModal = ({ open, handleClose, additionalInfo }) => {
  const { sprites, moves, abilities, name } = additionalInfo;

  return (
    <Dialog open={open} onClose={handleClose} fullWidth={true}>
      <DialogTitle>{name}</DialogTitle>
      <DialogContent>
        <DialogContentText>
          <CardMedia
            component="img"
            height="400"
            image={sprites.front_default}
            alt={name}
          />
          <Typography variant="h6" align="center">
            Movimientos:
            <ul>
              {moves.slice(0, 4).map((move, index) => (
                <li key={index}>{move.move.name}</li>
              ))}
            </ul>
          </Typography>
          <Typography variant="h6" align="center">
            Habilidades:
            <ul>
              {abilities.slice(0, 4).map((ability, index) => (
                <li key={index}>{ability.ability.name}</li>
              ))}
            </ul>
          </Typography>
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cerrar</Button>
      </DialogActions>
    </Dialog>
  );
};

export default PokemonModal;
