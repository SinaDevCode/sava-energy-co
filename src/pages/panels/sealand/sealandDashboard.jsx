import PanelMenu from "../../../layouts/PanelMenu";
import PanelInfo from "../../../components/PanelInfo";
import MenuContent from "../../../db/panels/sealand/menuContent/menuContent";

const SealandDashboard = () => {
  return (
    <div className="flex">
      <PanelMenu selectedKeys={["btnGroup1Item1"]} menuContent={MenuContent} />
      <div className="w-full h-screen ml-64">
        <PanelInfo
          profile="S"
          name="Sealand"
          textColor="rgb(16, 59, 102)"
          textBackground="rgba(16, 59, 102, 1)"
        />
      </div>
    </div>
  );
};

export default SealandDashboard;
