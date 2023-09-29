import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function createData(name, email, age, gender) {
  return { name, email, age, gender };
}

// function rows(a) {
//   const dataCreated = a.prop;

//   return [
//     (dataCreated.name, dataCreated.email, dataCreated.age, dataCreated.gender),
//     (dataCreated.name, dataCreated.email, dataCreated.age, dataCreated.gender),
//     (dataCreated.name, dataCreated.email, dataCreated.age, dataCreated.gender),
//     (dataCreated.name, dataCreated.email, dataCreated.age, dataCreated.gender),
//   ];
// }

const rows = [
  createData("Harith", "harith@react.com", 25, "Male"),
  createData("Lisa", "lisa@react.com", 22, "Female"),
  createData("Adam", "adam@react.com", 27, "Male"),
  createData("Jasmine", "jasmine@react.com", 26, "Female"),
];

function DenseTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Users</TableCell>
            <TableCell align="right">Email</TableCell>
            <TableCell align="right">Age</TableCell>
            <TableCell align="right">Gender</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.email}</TableCell>
              <TableCell align="right">{row.age}</TableCell>
              <TableCell align="right">{row.gender}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default DenseTable;
