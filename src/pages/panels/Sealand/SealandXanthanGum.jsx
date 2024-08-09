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

import PDF1 from "../../../db/docs/sealand/Xanthan Gum/SE-XG-3231214028.pdf";

const menuContent = [
  {
    key: "buttonGroup1",
    type: "group",
    children: [
      {
        key: "buttonGroup1Item1",
        label: <NavLink to="/sealand">Dashboard</NavLink>,
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
        type: "divider",
      },
      {
        key: "sub1",
        label: "Mineral Material",
        children: [
          {
            key: "sub1Item1",
            label: "Barite 4.1 SG",
            disabled: true,
          },
          {
            key: "sub1Item2",
            label: "Barite 4.2 SG",
            disabled: true,
          },
          {
            key: "sub1Item3",
            label: "Bentonite",
            disabled: true,
          },
          {
            key: "sub1Item4",
            label: "CaCl2",
            disabled: true,
          },
          {
            key: "sub1Item5",
            label: "Hematite",
            disabled: true,
          },
          {
            key: "sub1Item6",
            label: "KCl",
            disabled: true,
          },
          {
            key: "sub1Item7",
            label: "Limestone",
            disabled: true,
          },
          {
            key: "sub1Item8",
            label: "Salt (Sodium Chloride)",
            disabled: true,
          },
        ],
      },
      {
        key: "sub2",
        label: "Polymers",
        children: [
          {
            key: "sub2Item1",
            label: "CMC H.V",
            disabled: true,
          },
          {
            key: "sub2Item2",
            label: "CMC L.V",
            disabled: true,
          },
          {
            key: "sub2Item3",
            label: "HT FLC",
            disabled: true,
          },
          {
            key: "sub2Item4",
            label: "Pac L.V",
            disabled: true,
          },
          {
            key: "sub2Item5",
            label: "Pac R",
            disabled: true,
          },
          {
            key: "sub2Item6",
            label: "PHPA",
            disabled: true,
          },
          {
            key: "sub2Item7",
            label: "Starch H.V",
            disabled: true,
          },
          {
            key: "sub2Item8",
            label: "Starch L.V",
            disabled: true,
          },
          {
            key: "sub2Item9",
            label: <NavLink to="/sealand/xanthanGum">Xanthan Gum</NavLink>,
          },
        ],
      },
      {
        key: "sub3",
        label: "Liquids",
        children: [
          {
            key: "sub3Item1",
            label: "Bio Cide",
            disabled: true,
          },
          {
            key: "sub3Item2",
            label: "Corrosion Inhibitor",
            disabled: true,
          },
          {
            key: "sub3Item3",
            label: <NavLink to="/sealand/dme">D.M.E</NavLink>,
          },
          {
            key: "sub3Item4",
            label: "Defomer",
            disabled: true,
          },
          {
            key: "sub3Item5",
            label: "Drilling Detergent",
            disabled: true,
          },
          {
            key: "sub3Item6",
            label: "Glycol MC",
            disabled: true,
          },
          {
            key: "sub3Item7",
            label: "H2S Scavenger Liquid",
            disabled: true,
          },
          {
            key: "sub3Item8",
            label: <NavLink to="/sealand/oxygenScav">Oxygen Scav</NavLink>,
          },
          {
            key: "sub3Item9",
            label: "Pipe Lax W",
            disabled: true,
          },
          {
            key: "sub3Item10",
            label: "Temperature Stabilizer",
            disabled: true,
          },
          {
            key: "sub3Item11",
            label: "Water Based Mud Liquid Lubricant",
            disabled: true,
          },
        ],
      },
      {
        key: "sub4",
        label: "Chemicals",
        children: [
          {
            key: "sub4Item1",
            label: "Caustic Soda",
            disabled: true,
          },
          {
            key: "sub4Item2",
            label: "Citric ACID",
            disabled: true,
          },
          {
            key: "sub4Item3",
            label: "H2S Scav.(Zinc Carbonate)",
            disabled: true,
          },
          {
            key: "sub4Item4",
            label: "H2S Scav.(Zinc Oxide)",
            disabled: true,
          },

          {
            key: "sub4Item5",
            label: "Lime",
            disabled: true,
          },
          {
            key: "sub4Item6",
            label: "Potassium hydroxide",
            disabled: true,
          },
          {
            key: "sub4Item7",
            label: "Soda Ash",
            disabled: true,
          },
          {
            key: "sub4Item8",
            label: "Sodium Bicarbonate",
            disabled: true,
          },
        ],
      },
      {
        key: "sub5",
        label: "LCM",
        children: [
          {
            key: "sub5Item1",
            label: "CaCo3 (F,M,C)",
            disabled: true,
          },
          {
            key: "sub5Item2",
            label: (
              <NavLink to="/sealand/kwickSeal">Kwick Seal (F,M,C)</NavLink>
            ),
          },
          {
            key: "sub5Item3",
            label: "Mica (F,M,C)",
            disabled: true,
          },
          {
            key: "sub5Item4",
            label: "Oyster-Shall (F,M,C)",
            disabled: true,
          },
          {
            key: "sub5Item5",
            label: "Walnut Shell",
            disabled: true,
          },
        ],
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
    "SE-XG-3231214028",
    "1403-05",
    <a href={PDF1}>
      <FaFilePdf style={{ fontSize: 24 }} />
    </a>
  ),
];

export default function SealandXanthanGum() {
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
            defaultSelectedKeys={["sub2Item9"]}
            defaultOpenKeys={["menu1", "sub2"]}
          />
        </ConfigProvider>
      </IconContext.Provider>
      <div id="layer" className="w-full">
        <PanelInfo profile="S" name="Sealand" kind="Administrator" />
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
