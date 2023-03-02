import Table from "react-bootstrap/Table";

const columns = ["first", "last", "middle"];

const data = [
  {
    id: 1,
    column1: "Row 1 Column 1",
    column2: "Row 1 Column 2",
    column3: "Row 1 Column 3",
  },
  {
    id: 2,
    column1: "Row 2 Column 1",
    column2: "Row 2 Column 2",
    column3: "Row 2 Column 3",
  },
  {
    id: 3,
    column1: "Row 3 Column 1",
    column2: "Row 3 Column 2",
    column3: "Row 3 Column 3",
  },
];

function TableView() {
  return (
    <Table striped bordered hover>
      <thead>
        {columns.map((row) => (
          <th>{row}</th>
        ))}
      </thead>
      <tbody>
        {data.map((row) => (
          <tr key={row.id}>
            <td>{row.column1}</td>
            <td>{row.column2}</td>
            <td>{row.column3}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

export default TableView;
