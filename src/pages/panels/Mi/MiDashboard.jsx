import { Menu, ConfigProvider } from "antd";
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

export default function MiDashboard() {
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
            defaultSelectedKeys={["buttonGroup1Item1"]}
          />
        </ConfigProvider>
      </IconContext.Provider>
      <div id="layer" className="w-full">
        <PanelInfo profile="MK" name="Mi Kish" kind="Administrator" />
      </div>
    </div>
  );
}
