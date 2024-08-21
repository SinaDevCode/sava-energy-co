import styled from "styled-components";
import { TableRow } from "@mui/material";

export const StyledTableRow = styled(TableRow)(() => ({
  "&:nth-of-type(even)": {
    backgroundColor: "rgb(166, 216, 214)",
  },
}));
