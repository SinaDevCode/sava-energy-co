import { Menu, ConfigProvider } from "antd";
import { IconContext } from "react-icons/lib";
import { FaFilePdf } from "react-icons/fa6";
import { BiSolidDashboard } from "react-icons/bi";
import { AiFillExperiment } from "react-icons/ai";
import { BsFillDoorOpenFill } from "react-icons/bs";
import { NavLink } from "react-router-dom";
import PanelInfo from "../../../components/panelInfo";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import styled from "styled-components";

import PDF1 from "../../../db/docs/dana/Starch HT/SS-F-33-SAVA QC report Starch HT-02 Oct 2024.pdf";
import PDF2 from "../../../db/docs/dana/Starch HT/SS-F-43-SAVA QC report Starch HT-25 Apr 2024.pdf";

const menuContent = [
  {
    key: "buttonGroup1",
    type: "group",
    children: [
      {
        key: "buttonGroup1Item1",
        label: <NavLink to="/dana">Dashboard</NavLink>,
        icon: <BiSolidDashboard />,
      },
      // Devloper Note: add More links in this place
    ],
  },
  {
    type: "divider",
  },
  {
    key: "menu1",
    label: "QC Reports",
    icon: <FaFilePdf />,
    children: [
      {
        key: "menu1item1",
        label: <NavLink to="/dana/cmc">CMC</NavLink>,
      },
      {
        key: "menu1item2",
        label: <NavLink to="/dana/lime">Lime</NavLink>,
      },
      {
        key: "menu1item3",
        label: (
          <NavLink to="/dana/polyanionicCellulose">
            Polyanionic Cellulose
          </NavLink>
        ),
      },
      {
        key: "menu1item4",
        label: <NavLink to="/dana/sodaAsh">Soda Ash</NavLink>,
      },
      {
        key: "menu1item5",
        label: <NavLink to="/dana/starchLv">Starch LV</NavLink>,
      },
      {
        key: "menu1item6",
        label: <NavLink to="/dana/starchHt">Starch HT</NavLink>,
      },
      {
        key: "menu1item7",
        label: "Xanthan Gum",
        disabled: true,
      },
    ],
  },
  {
    type: "divider",
  },
  {
    key: "buttonGroup2",
    type: "group",
    children: [
      {
        key: "buttonGroup2Item1",
        label: "Equipments Inventory",
        icon: <AiFillExperiment />,
        disabled: true,
      },
      {
        key: "buttonGroup1Item2",
        label: <NavLink to="/">Exit</NavLink>,
        icon: <BsFillDoorOpenFill />,
      },
      // Devloper Note: add More links in this place
    ],
  },
];

const StyledTableRow = styled(TableRow)(() => ({
  "&:nth-of-type(odd)": {
    backgroundColor: "rgb(219, 237, 236)",
  },
}));

function createData(id, batchNo, date, file) {
  return { id, batchNo, date, file };
}

const rows = [
  createData(
    1,
    "SS-F-33-SAVA",
    "Oct 2, 2024",
    <a href={PDF1}>
      <FaFilePdf style={{ fontSize: 24 }} />
    </a>
  ),
  createData(
    2,
    "SS-F-43-SAVA",
    "Apr 25, 2024",
    <a href={PDF2}>
      <FaFilePdf style={{ fontSize: 24 }} />
    </a>
  ),
];

export default function DanaStarchHt() {
  return (
    <div className="flex">
      <IconContext.Provider value={{ style: { fontSize: 16 } }}>
        <ConfigProvider
          theme={{
            token: {
              fontFamily: "Roboto",
            },
            components: {
              Menu: {
                itemColor: "Black",
                itemDisabledColor: "rgba(80, 80, 80, 0.5)",
                itemHoverBg: "rgb(219, 237, 236)",
                itemHoverColor: "#505050",
                itemSelectedBg: "rgb(219, 237, 236)",
                itemSelectedColor: "#000",
                subMenuItemBg: "rgba(219, 237, 236, 0.7)",
              },
            },
          }}
        >
          <Menu
            className="min-w-64 max-w-64 h-screen overflow-auto bg-cyan"
            mode="inline"
            items={menuContent}
            theme="light"
            defaultSelectedKeys={["menu1item6"]}
            defaultOpenKeys={["menu1", "menu1item6"]}
          />
        </ConfigProvider>
      </IconContext.Provider>
      <div id="layer" className="w-full">
        <PanelInfo profile="DE" name="Dana Energy" kind="Administrator" />
        {/* Table */}
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Id</TableCell>
                <TableCell>Batch&nbsp;No</TableCell>
                <TableCell>Date</TableCell>
                <TableCell>File</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <StyledTableRow
                  key={row.id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.id}
                  </TableCell>
                  <TableCell>{row.batchNo}</TableCell>
                  <TableCell>{row.date}</TableCell>
                  <TableCell>{row.file}</TableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
}
