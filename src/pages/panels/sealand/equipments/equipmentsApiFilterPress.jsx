import PanelMenu from "../../../../layouts/PanelMenu";
import PanelInfo from "../../../../components/PanelInfo";
import PanelTable from "../../../../layouts/PanelTable";
import MenuContent from "../../../../db/panels/sealand/menuContent/menuContent";
import TableContent from "../../../../db/panels/sealand/tableContent/tableContent";

const equipmentsApiFilterPress = () => {
  return (
    <div className="flex">
      <PanelMenu
        selectedKeys={["menu2Item1"]}
        openKeys={["menu2"]}
        menuContent={MenuContent}
      />
      <div className="w-full h-screen ml-64">
        <PanelInfo
          profile="S"
          name="Sealand"
          textColor="rgb(16, 59, 102)"
          textBackground="rgba(16, 59, 102, 0.3)"
        />
        <PanelTable TableContentCategory={TableContent.ApiFilterPress} />
      </div>
    </div>
  );
};

export default equipmentsApiFilterPress;
