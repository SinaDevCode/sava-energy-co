import { StyledTableRow } from "../utils/styledTableRow";

import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@mui/material";

const PanelTable = (props) => {
  const rows = props.TableContentCategory;

  return (
    <TableContainer className="px-6">
      <Table sx={{ minWidth: 650 }} aria-label="Simple Table">
        <TableHead>
          <TableRow className="bg-Cyan">
            <TableCell
              style={{
                padding: "16px 24px",
                fontSize: 16,
                fontWeight: 700,
                color: "#fff",
              }}
            >
              Id
            </TableCell>
            <TableCell
              style={{
                fontSize: 16,
                fontWeight: 700,
                color: "#fff",
              }}
            >
              Batch&nbsp;No
            </TableCell>
            <TableCell
              style={{
                fontSize: 16,
                fontWeight: 700,
                color: "#fff",
              }}
            >
              Date
            </TableCell>
            <TableCell
              style={{
                fontSize: 16,
                fontWeight: 700,
                color: "#fff",
              }}
            >
              File
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow
              key={row.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell
                component="th"
                scope="row"
                style={{
                  padding: "16px 24px",
                  color: "#505050",
                }}
              >
                {row.id}
              </TableCell>
              <TableCell
                component="th"
                scope="row"
                style={{
                  color: "#505050",
                }}
              >
                {row.batchNo}
              </TableCell>
              <TableCell
                component="th"
                scope="row"
                style={{
                  color: "#505050",
                }}
              >
                {row.date}
              </TableCell>
              <TableCell
                component="th"
                scope="row"
                style={{
                  color: "#505050",
                }}
              >
                {row.file}
              </TableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default PanelTable;
