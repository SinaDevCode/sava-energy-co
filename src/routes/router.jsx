import Home from "../pages/Home";
import Login from "../pages/Login";

// ========== Sealand ==========
import SealandDashboard from "../pages/panels/sealand/sealandDashboard";
import SealandDME from "../pages/panels/sealand/sealandDME";
import SealandOxygenScav from "../pages/panels/sealand/sealandOxygenScav";
import SealandPipeLaxW from "../pages/panels/sealand/sealandPipeLaxW";
import SealandXanthanGum from "../pages/panels/sealand/sealandXanthanGum";
import SealandKwickSeal from "../pages/panels/sealand/sealandKwickSeal";
import SealandEquipmentsCupHeater from "../pages/panels/sealand/equipments/equipmentsCupHeater";
import SealandEquipmentsApiFilterPress from "../pages/panels/sealand/equipments/equipmentsApiFilterPress";
import SealandEquipmentsVGMeter from "../pages/panels/sealand/equipments/equipmentsVGMeter";

const router = [
  { path: "/", element: <Home /> },
  { path: "/Login", element: <Login /> },
  // ========== Sealand ==========
  { path: "/sealand", element: <SealandDashboard /> },
  { path: "/sealand/DME", element: <SealandDME /> },
  { path: "/sealand/OxygenScav", element: <SealandOxygenScav /> },
  { path: "/sealand/PipeLaxW", element: <SealandPipeLaxW /> },
  { path: "/sealand/XanthanGum", element: <SealandXanthanGum /> },
  { path: "/sealand/kwickSeal", element: <SealandKwickSeal /> },
  // ========== Sealand Equipments ==========
  {
    path: "/sealand/EquipmentsCupHeater",
    element: <SealandEquipmentsCupHeater />,
  },
  {
    path: "/sealand/EquipmentsApiFilterPress",
    element: <SealandEquipmentsApiFilterPress />,
  },
  {
    path: "/sealand/EquipmentsVGMeter",
    element: <SealandEquipmentsVGMeter />,
  },
];

export default router;
