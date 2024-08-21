import PanelMenu from "../../../../layouts/PanelMenu";
import PanelInfo from "../../../../components/PanelInfo";
import PanelTable from "../../../../layouts/PanelTable";
import TableContent from "../../../../db/panels/sealand/tableContent/tableContent";

const equipmentsCupHeater = () => {
  return (
    <div className="flex">
      <PanelMenu selectedKeys={["menu2Item2"]} openKeys={["menu2"]} />
      <div className="w-full h-screen ml-64">
        <PanelInfo
          profile="S"
          name="Sealand"
          textColor="rgb(16, 59, 102)"
          textBackground="rgba(16, 59, 102, 0.3)"
        />
        <PanelTable TableContentCategory={TableContent.CupHeater} />
      </div>
    </div>
  );
};

export default equipmentsCupHeater;
