import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

const CardDisplay = ({ completedTasks, pendingTasks }) => {
  return (
    <div>
      <Card>
        <CardContent>
          <Typography color="textSecondary" gutterBottom>
            Tareas Completadas
          </Typography>
          <Typography variant="h5" component="h2">
            {completedTasks}
          </Typography>
        </CardContent>
      </Card>
      <Card>
        <CardContent>
          <Typography color="textSecondary" gutterBottom>
            Tareas Pendientes
          </Typography>
          <Typography variant="h5" component="h2">
            {pendingTasks}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default CardDisplay;
