import PanelMenu from "../../../layouts/PanelMenu";
import PanelInfo from "../../../components/PanelInfo";
import MenuContent from "../../../db/panels/mi/menuContent/menuContent";

const MiDashboard = () => {
  return (
    <div className="flex">
      <PanelMenu selectedKeys={["btnGroup1Item1"]} menuContent={MenuContent} />
      <div className="w-full h-screen ml-64">
        <PanelInfo
          profile="MK"
          name="MI Kish"
          textColor="rgb(249, 103, 8)"
          textBackground="rgba(249, 103, 8, 1)"
        />
      </div>
    </div>
  );
};

export default MiDashboard;
