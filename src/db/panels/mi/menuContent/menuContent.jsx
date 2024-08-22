import { NavLink } from "react-router-dom";
import { BiSolidDashboard } from "react-icons/bi";
import { BsClipboardCheckFill } from "react-icons/bs";
import { AiFillExperiment } from "react-icons/ai";
import { ImExit } from "react-icons/im";

// MenuContent For MI Ksih
const menuContent = [
  {
    key: "btnGroup1",
    type: "group",
    children: [
      {
        key: "btnGroup1Item1",
        label: <NavLink to="/mi">Dashboard</NavLink>,
        icon: <BiSolidDashboard />,
      },
    ],
  },
  {
    key: "menu1",
    label: "QC Reports",
    icon: <BsClipboardCheckFill />,
    children: [
      {
        key: "sub1Item1",
        label: "CMC",
        disabled: true,
      },
      {
        key: "sub1Item2",
        label: "Lime",
        disabled: true,
      },
      {
        key: "sub1Item3",
        label: "Polyanionic Cellulose",
        disabled: true,
      },
      {
        key: "sub1Item4",
        label: "Soda Ash",
        disabled: true,
      },
      {
        key: "sub1Item5",
        label: <NavLink to="/mi/StarchLv">Starch LV</NavLink>,
      },
      {
        key: "sub1Item6",
        label: "Starch HT",
        disabled: true,
      },
      {
        key: "sub1Item7",
        label: "Xanthan Gum",
        disabled: true,
      },
    ],
  },
  {
    key: "btnGroup2",
    type: "group",
    children: [
      {
        key: "buttonGroup2Item1",
        label: "Equipments",
        icon: <AiFillExperiment />,
        disabled: true,
      },
      {
        key: "btnGroup2Item2",
        label: <NavLink to="/">Exit</NavLink>,
        icon: <ImExit />,
      },
    ],
  },
];

export default menuContent;
