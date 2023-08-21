// Dashboard.jsx
import React from "react";
import CardDisplay from "../cardDisplay/CardDisplay";
import PAGES from "../constants";

const Dashboard = () => {
  console.log(PAGES[0].image);
  return (
    <div className="contenedorPadre">
      {PAGES.map((page) => (
        <CardDisplay key={page.id} name={page.name} img={page.image} />
      ))}
    </div>
  );
};

export default Dashboard;
