import { NavLink } from "react-router-dom";
import { BiSolidDashboard } from "react-icons/bi";
import { BsClipboardCheckFill } from "react-icons/bs";
import { AiFillExperiment } from "react-icons/ai";
import { ImExit } from "react-icons/im";

// MenuContent For Sealand
const menuContent = [
  {
    key: "btnGroup1",
    type: "group",
    children: [
      {
        key: "btnGroup1Item1",
        label: <NavLink to="/sealand">Dashboard</NavLink>,
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
            label: <NavLink to="/sealand/pipeLaxW">Pipe Lax W</NavLink>,
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
    key: "menu2",
    label: "Equipments",
    icon: <AiFillExperiment />,
    children: [
      {
        key: "menu2Item1",
        label: (
          <NavLink to="/sealand/EquipmentsApiFilterPress">
            API Filter Press
          </NavLink>
        ),
      },
      {
        key: "menu2Item2",
        label: <NavLink to="/sealand/EquipmentsCupHeater">Cup Heater</NavLink>,
      },
      {
        key: "menu2Item3",
        label: "Retort Kit",
        disabled: true,
      },
      {
        key: "menu2Item4",
        label: <NavLink to="/sealand/EquipmentsVGMeter">VG Meter</NavLink>,
      },
    ],
  },
  {
    key: "btnGroup2",
    type: "group",
    children: [
      {
        key: "btnGroup2Item1",
        label: <NavLink to="/">Exit</NavLink>,
        icon: <ImExit />,
      },
    ],
  },
];

export default menuContent;
