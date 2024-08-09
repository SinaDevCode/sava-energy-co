import { Menu, ConfigProvider, Tooltip } from "antd";
import { IconContext } from "react-icons/lib";
import { FaFilePdf } from "react-icons/fa6";
import { BiSolidDashboard } from "react-icons/bi";
import { AiFillExperiment } from "react-icons/ai";
import { BsFillDoorOpenFill } from "react-icons/bs";
import { NavLink } from "react-router-dom";
import PanelInfo from "../../../components/panelInfo";

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
          },
          {
            key: "sub1Item2",
            label: "Barite 4.2 SG",
          },
          {
            key: "sub1Item3",
            label: "Bentonite",
          },
          {
            key: "sub1Item4",
            label: "CaCl2",
          },
          {
            key: "sub1Item5",
            label: "Hematite",
          },
          {
            key: "sub1Item6",
            label: "KCl",
          },
          {
            key: "sub1Item7",
            label: "Limestone",
          },
          {
            key: "sub1Item8",
            label: "Salt (Sodium Chloride)",
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
          },
          {
            key: "sub2Item2",
            label: "CMC L.V",
          },
          {
            key: "sub2Item3",
            label: "HT FLC",
          },
          {
            key: "sub2Item4",
            label: "Pac L.V",
          },
          {
            key: "sub2Item5",
            label: "Pac R",
          },
          {
            key: "sub2Item6",
            label: "PHPA",
          },
          {
            key: "sub2Item7",
            label: "Starch H.V",
          },
          {
            key: "sub2Item8",
            label: "Starch L.V",
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
          },
          {
            key: "sub3Item2",
            label: "Corrosion Inhibitor",
          },
          {
            key: "sub3Item3",
            label: <NavLink to="/sealand/dme">D.M.E</NavLink>,
          },
          {
            key: "sub3Item4",
            label: "Defomer",
          },
          {
            key: "sub3Item5",
            label: "Drilling Detergent",
          },
          {
            key: "sub3Item6",
            label: "Glycol MC",
          },
          {
            key: "sub3Item7",
            label: "H2S Scavenger Liquid",
          },
          {
            key: "sub3Item8",
            label: <NavLink to="/sealand/oxygenScav">Oxygen Scav</NavLink>,
          },
          {
            key: "sub3Item9",
            label: "Pipe Lax W",
          },
          {
            key: "sub3Item10",
            label: "Temperature Stabilizer",
          },
          {
            key: "sub3Item11",
            label: "Water Based Mud Liquid Lubricant",
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
          },
          {
            key: "sub4Item2",
            label: "Citric ACID",
          },
          {
            key: "sub4Item3",
            label: "H2S Scav.(Zinc Carbonate)",
          },
          {
            key: "sub4Item4",
            label: "H2S Scav.(Zinc Oxide)",
          },
          {
            key: "sub4Item5",
            label: "Lime",
          },
          {
            key: "sub4Item6",
            label: "Potassium hydroxide",
          },
          {
            key: "sub4Item7",
            label: "Soda Ash",
          },
          {
            key: "sub4Item8",
            label: "Sodium Bicarbonate",
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
          },
          {
            key: "sub5Item4",
            label: "Oyster-Shall (F,M,C)",
          },
          {
            key: "sub5Item5",
            label: "Walnut Shell",
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
        label: (
          <Tooltip
            placement="right"
            title="You don't have permission to do this"
            color="cyan"
          >
            Equipments Inventory
          </Tooltip>
        ),
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

export default function SealandDashboard() {
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
            defaultSelectedKeys={["buttonGroup1Item1"]}
          />
        </ConfigProvider>
      </IconContext.Provider>
      <div id="layer" className="w-full">
        <PanelInfo profile="S" name="Sealand" kind="Administrator" />
      </div>
    </div>
  );
}
