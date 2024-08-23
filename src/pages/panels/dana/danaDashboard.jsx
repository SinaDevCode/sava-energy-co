import PanelMenu from "../../../layouts/PanelMenu";
import PanelInfo from "../../../components/PanelInfo";
import MenuContent from "../../../db/panels/dana/menuContent/menuContent";

const DanaDashboard = () => {
  return (
    <div className="flex">
      <PanelMenu selectedKeys={["btnGroup1Item1"]} menuContent={MenuContent} />
      <div className="w-full h-screen ml-64">
        <PanelInfo
          profile="DE"
          name="Dana Energy"
          textColor="rgb(243, 112, 32)"
          textBackground="rgba(243, 112, 32, 1)"
        />
      </div>
    </div>
  );
};

export default DanaDashboard;
