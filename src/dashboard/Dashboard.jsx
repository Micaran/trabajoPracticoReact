import React from "react";
import CardDisplay from "../cardDisplay/CardDisplay";
import MiniCards from "../miniCards/MiniCards";
import PAGES from "../constants";
import { useSelector } from "react-redux";

const Dashboard = () => {
  const tasks = useSelector((state) => state.tasks);

  const totalTasks = tasks.length;
  const completedTasks = tasks.filter((task) => task.completed).length;
  const pendingTasks = totalTasks - completedTasks;

  return (
    <div className="contenedorPadre">
      <div className="miniCards">
        <MiniCards
          completedTasks={completedTasks}
          pendingTasks={pendingTasks}
        />
      </div>
      {PAGES.map((page) => (
        <CardDisplay key={page.id} name={page.name} img={page.image} />
      ))}
    </div>
  );
};

export default Dashboard;
