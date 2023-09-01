import React from "react";
import DashboardCard from "./DashboardCard";
import MiniCards from "../miniCards/MiniCards";
import { useSelector } from "react-redux";
import "./dashboard.css";
import PAGES from "../constants.js";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const tasks = useSelector((state) => state.tasks);

  const totalTasks = tasks.length;
  const completedTasks = tasks.filter((task) => task.completed).length;
  const pendingTasks = totalTasks - completedTasks;
  const navigate = useNavigate();

  const handleCardClick = (path) => {
    navigate(path);
  };

  return (
    <div className="contenedorPadre">
      <div className="miniCards">
        <MiniCards
          completedTasks={completedTasks}
          pendingTasks={pendingTasks}
        />
      </div>
      <div className="dashBoardsCards">
        {PAGES.map((page) => (
          <div key={page.id} onClick={() => handleCardClick(page.path)}>
            <DashboardCard
              name={page.name}
              image={page.image}
              style={{ marginRight: "20px" }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
