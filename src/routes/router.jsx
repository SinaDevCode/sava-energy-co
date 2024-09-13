import Home from "../pages/Home";
import Login from "../pages/Login";
import LabEquipments from "../pages/LabEquipments";
import Services from "../pages/Services";

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
// ========== MI Kish ==========
import MiDashboard from "../pages/panels/mi/miDashboard";
import MiStarchLv from "../pages/panels/mi/miStarchLv";
// ========== Dana Energy ==========
import DanaDashboard from "../pages/panels/dana/danaDashboard";
import DanaCmc from "../pages/panels/dana/danaCmc";
import DanaLime from "../pages/panels/dana/danaLime";
import DanaPolyanionicCellulose from "../pages/panels/dana/danaPolyanionicCellulose";
import DanaSodaAsh from "../pages/panels/dana/danaSodaAsh";
import DanaStarchHt from "../pages/panels/dana/danaStarchHt";
import DanaStarchLv from "../pages/panels/dana/danaStarchLv";

const router = [
	{ path: "/", element: <Home /> },
	{ path: "/Login", element: <Login /> },
	{ path: "/LabEquipments", element: <LabEquipments /> },
	{ path: "/Services", element: <Services /> },
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
	// ========== MI Kish ==========
	{ path: "/mi", element: <MiDashboard /> },
	{ path: "/mi/StarchLv", element: <MiStarchLv /> },
	// ========== Dana Energy ==========
	{ path: "/dana", element: <DanaDashboard /> },
	{ path: "/dana/Cmc", element: <DanaCmc /> },
	{ path: "/dana/Lime", element: <DanaLime /> },
	{
		path: "/dana/PolyanionicCellulose",
		element: <DanaPolyanionicCellulose />,
	},
	{ path: "/dana/SodaAsh", element: <DanaSodaAsh /> },
	{ path: "/dana/StarchLv", element: <DanaStarchHt /> },
	{ path: "/dana/StarchHt", element: <DanaStarchLv /> },
];

export default router;
