import React, { useContext, useEffect, useState } from "react";
import TableComponent from "../../components/TableComponent";

import "./user-dashboard.css";
import { AuthContext } from "../../context/AuthContext";
import { getAllUsersAPI } from "../../helpers/createAccountAPI";
import UserDetailsModal from "../../components/LoginModal/UserDetailsModal";

const UsersDashboard = () => {
  const { authToken } = useContext(AuthContext);
  const [allUsers, setAllUsers] = useState([]);

  const getAllUsersHandler = async () => {
    const usersArray = await getAllUsersAPI(authToken);

    if (usersArray.success) {
      setAllUsers(usersArray.message);
    }
  };

  useEffect(() => {
    getAllUsersHandler();
  }, []);

  const columns = [
    {
      name: "User",
      selector: (row) => row.userName,
    },

    {
      name: "More info",
      selector: (row) => row.edit,
    },
  ];

  const usersArrayWithEditButton = allUsers.map((user) => {
    return {
      userName: `${user.firstName} ${user.lastName}`,
      edit: (
        <UserDetailsModal
          fullname={`${user.firstName} ${user.lastName}`}
          mobile={user.mobile}
          email={user.email}
          role={user.role}
        />
      ),
    };
  });

  return (
    <div className="admin-all-users-container">
      <div className="admin-users-header-container">
        <h2 className="admin-users-header">All Users</h2>
      </div>

      <div className="admin-users-container">
        <TableComponent columns={columns} data={usersArrayWithEditButton} />
      </div>
    </div>
  );
};

export default UsersDashboard;
