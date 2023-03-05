import React, { useState } from "react";
import DataTable from "react-data-table-component";

const TableComponent = ({ columns, data }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const paginatedData = data.slice((currentPage - 1) * 10, currentPage * 10);
  return (
    <DataTable
      columns={columns}
      data={data}
      pagination
      paginationPerPage={10}
      paginationTotalRows={data.length}
      onChangePage={handlePageChange}
    />
  );
};

export default TableComponent;
