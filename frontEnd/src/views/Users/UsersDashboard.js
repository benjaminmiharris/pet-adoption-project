import React from "react";
import TableView from "../../components/Table";

import "./user-dashboard.css";

const UsersDashboard = () => {
  return (
    <div className="user-table-container">
      <TableView cols={2} />
    </div>
  );
};

export default UsersDashboard;
