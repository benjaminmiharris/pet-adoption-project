import React from "react";
import DataTable from "react-data-table-component";

const TableComponent = ({ columns, data }) => {
  return <DataTable columns={columns} data={data} />;
};

export default TableComponent;
