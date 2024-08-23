import PanelMenu from "../../../../layouts/PanelMenu";
import PanelInfo from "../../../../components/PanelInfo";
import MenuContent from "../../../../db/panels/sealand/menuContent/menuContent";
import PanelTable from "../../../../layouts/PanelTable";
import TableContent from "../../../../db/panels/sealand/tableContent/tableContent";

const equipmentsVGMeter = () => {
  return (
    <div className="flex">
      <PanelMenu
        selectedKeys={["menu2Item4"]}
        openKeys={["menu2"]}
        menuContent={MenuContent}
      />
      <div className="w-full h-screen ml-64">
        <PanelInfo
          profile="S"
          name="Sealand"
          textColor="rgb(16, 59, 102)"
          textBackground="rgba(16, 59, 102, 1)"
        />
        <PanelTable TableContentCategory={TableContent.VGMeter} />
      </div>
    </div>
  );
};

export default equipmentsVGMeter;
