import React, { useState } from "react";
import { Home } from "./homeComponents/Home";
import { Credit } from "./creditComponents/Credit";
import { Transfer } from "./TransferComponents/Transfer";

export const Nav = () => {
  const [currentPage, setCurrentPage] = useState("home");
  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return <Home />;
      case "credit":
        return <Credit />;
      case "transfer":
        return <Transfer />;
      default:
        return <Home />;
    }
  };
  return (
    <div className="app">
      <div className="nav">
        <button onClick={() => setCurrentPage("home")}>Home</button>
        <button onClick={() => setCurrentPage("credit")}>Credit Details</button>
        <button onClick={() => setCurrentPage("transfer")}>
          Recent Transfers
        </button>
        <button onClick={() => setCurrentPage("logout")}>Logout</button>
      </div>
      <div className="content">{renderPage()}</div>
    </div>
  );
};
