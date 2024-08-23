import PanelMenu from "../../../layouts/PanelMenu";
import PanelInfo from "../../../components/PanelInfo";
import MenuContent from "../../../db/panels/dana/menuContent/menuContent";
import PanelTable from "../../../layouts/PanelTable";
import TableContent from "../../../db/panels/dana/tableContent/tableContent";
const DanaLime = () => {
  return (
    <div className="flex">
      <PanelMenu
        selectedKeys={["sub1Item2"]}
        openKeys={["menu1"]}
        menuContent={MenuContent}
      />
      ;
      <div className="w-full h-screen ml-64">
        <PanelInfo
          profile="DE"
          name="Dana Energy"
          textColor="rgb(243, 112, 32)"
          textBackground="rgba(243, 112, 32, 1)"
        />
        <PanelTable TableContentCategory={TableContent.Lime} />
      </div>
    </div>
  );
};

export default DanaLime;
