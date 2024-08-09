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

import PDF1 from "../../../db/docs/mi/Starch Lv/BN-SS-F-02-SAVA QC report Starch Lv 30 Nov 2021.pdf";
import PDF2 from "../../../db/docs/mi/Starch Lv/BN-SS-F-13-SAVA QC report Starch Lv 22 May 2022-NISOC.pdf";
import PDF3 from "../../../db/docs/mi/Starch Lv/BN-SS-F-13-SAVA QC report Starch Lv 23 June 2022-NISOC.pdf";
import PDF4 from "../../../db/docs/mi/Starch Lv/BN-SS-F-14-SAVA QC report Starch Lv 24 May 2022-API.pdf";
import PDF5 from "../../../db/docs/mi/Starch Lv/BN-SS-F-14-SAVA QC report Starch Lv 25 June 2022-API.pdf";
import PDF6 from "../../../db/docs/mi/Starch Lv/BN-SS-F-15-SAVA QC report Starch Lv 25 June 2022-NISOC.pdf";
import PDF7 from "../../../db/docs/mi/Starch Lv/BN-SS-F-17-SAVA QC report Starch Lv 16 Dec 2022-NISOC.pdf";
import PDF8 from "../../../db/docs/mi/Starch Lv/BN-SS-F-21-SAVA QC report Starch Lv 30 Jan 2023-API.pdf";
import PDF9 from "../../../db/docs/mi/Starch Lv/BN-SS-F-25-SAVA QC report Starch Lv 17 June 2023-NISOC.pdf";
import PDF10 from "../../../db/docs/mi/Starch Lv/BN-SS-F-27-SAVA QC report Starch Lv 9 Aug 2023-NISOC.pdf";
import PDF11 from "../../../db/docs/mi/Starch Lv/BN-SS-F-28-SAVA QC report Starch Lv-API-02 Sep 2023.pdf";
import PDF12 from "../../../db/docs/mi/Starch Lv/BN-SS-F-46-SAVA QC report Starch Lv-API-29 July 2024.pdf";
import PDF13 from "../../../db/docs/mi/Starch Lv/BN-SS-F-42-SAVA QC report Starch LV-NISOC-06 Aug 2024.pdf";
import styled from "styled-components";

const menuContent = [
  {
    key: "buttonGroup1",
    type: "group",
    children: [
      {
        key: "buttonGroup1Item1",
        label: <NavLink to="/mi">Dashboard</NavLink>,
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
        label: "CMC",
        disabled: true,
      },
      {
        key: "menu1item2",
        label: "Lime",
        disabled: true,
      },
      {
        key: "menu1item3",
        label: "Polyanionic Cellulose",
        disabled: true,
      },
      {
        key: "menu1item4",
        label: "Soda Ash",
        disabled: true,
      },
      {
        key: "menu1item5",
        label: <NavLink to="/mi/starchLv">Starch LV</NavLink>,
      },
      {
        key: "menu1item6",
        label: "Starch HT",
        disabled: true,
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
    backgroundColor: "#1ebdb8",
  },
}));

function createData(id, batchNo, date, file) {
  return { id, batchNo, date, file };
}

const rows = [
  createData(
    1,
    "SS-F-02-SAVA-API",
    "Nov 30, 2021",
    <a href={PDF1}>
      <FaFilePdf style={{ fontSize: 24 }} />
    </a>
  ),
  createData(
    2,
    "SS-F-13-SAVA-NISOC",
    "May 22, 2022",
    <a href={PDF2}>
      <FaFilePdf style={{ fontSize: 24 }} />
    </a>
  ),
  createData(
    3,
    "SS-F-13-NISOC",
    "June 23, 2022",
    <a href={PDF3}>
      <FaFilePdf style={{ fontSize: 24 }} />
    </a>
  ),
  createData(
    4,
    "SS-F-14-API",
    "May 24, 2022",
    <a href={PDF4}>
      <FaFilePdf style={{ fontSize: 24 }} />
    </a>
  ),
  createData(
    5,
    "SS-F-14-API",
    "June 25, 2022",
    <a href={PDF5}>
      <FaFilePdf style={{ fontSize: 24 }} />
    </a>
  ),
  createData(
    6,
    "SS-F-15-NISOC",
    "June 25, 2022",
    <a href={PDF6}>
      <FaFilePdf style={{ fontSize: 24 }} />
    </a>
  ),
  createData(
    7,
    "SS-F-17-NISOC",
    "Dec 16, 2022",
    <a href={PDF7}>
      <FaFilePdf style={{ fontSize: 24 }} />
    </a>
  ),
  createData(
    8,
    "SS-F-21-API",
    "Jan 30, 2023",
    <a href={PDF8}>
      <FaFilePdf style={{ fontSize: 24 }} />
    </a>
  ),
  createData(
    9,
    "SS-F-25-Nisoc",
    "June 17, 2023",
    <a href={PDF9}>
      <FaFilePdf style={{ fontSize: 24 }} />
    </a>
  ),
  createData(
    10,
    "SS-F-27-NISOC",
    "Aug 9, 2023",
    <a href={PDF10}>
      <FaFilePdf style={{ fontSize: 24 }} />
    </a>
  ),
  createData(
    11,
    "SS-F-28-API",
    "Sep 2, 2023",
    <a href={PDF11}>
      <FaFilePdf style={{ fontSize: 24 }} />
    </a>
  ),
  createData(
    12,
    "SS-F-46-API",
    "July 29, 2024",
    <a href={PDF12}>
      <FaFilePdf style={{ fontSize: 24 }} />
    </a>
  ),
  createData(
    13,
    "SS-F-42-NISOC",
    "Aug 6, 2024",
    <a href={PDF13}>
      <FaFilePdf style={{ fontSize: 24 }} />
    </a>
  ),
  createData(
    1,
    "SE-DME-2024929",
    "1403-05",
    <a href={PDF1}>
      <FaFilePdf style={{ fontSize: 24 }} />
    </a>
  ),
  createData(
    1,
    "SE-DME-2024929",
    "1403-05",
    <a href={PDF1}>
      <FaFilePdf style={{ fontSize: 24 }} />
    </a>
  ),
];

export default function MiStarchLv() {
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
                itemSelectedColor: "rgba(30, 189, 184, 1)",
                itemColor: "#808080",
                itemDisabledColor: "rgba(0, 0, 0, 0.2)",
                itemHoverBg: "rgba(30, 189, 184, 0.2)",
                itemSelectedBg: "rgba(30, 189, 184, 0.2)",
              },
            },
          }}
        >
          <Menu
            className="min-w-64 max-w-64 h-screen overflow-auto "
            mode="inline"
            items={menuContent}
            theme="light"
            defaultSelectedKeys={["menu1item5"]}
            defaultOpenKeys={["menu1", "menu1item5"]}
          />
        </ConfigProvider>
      </IconContext.Provider>
      <div id="layer" className="w-full">
        <PanelInfo profile="MK" name="Mi Kish" kind="Administrator" />
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
