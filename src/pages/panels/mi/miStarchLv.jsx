import PanelMenu from "../../../layouts/PanelMenu";
import PanelInfo from "../../../components/PanelInfo";
import MenuContent from "../../../db/panels/mi/menuContent/menuContent";
import PanelTable from "../../../layouts/PanelTable";
import TableContent from "../../../db/panels/mi/tableContent/tableContent";

const MiStarchLv = () => {
  return (
    <div className="flex">
      <PanelMenu
        selectedKeys={["sub1Item5"]}
        openKeys={["menu1"]}
        menuContent={MenuContent}
      />
      <div className="w-full h-screen ml-64">
        <PanelInfo
          profile="MK"
          name="MI Kish"
          textColor="rgb(249, 103, 103)"
          textBackground="rgba(249, 103, 8, 1)"
        />
        <PanelTable TableContentCategory={TableContent.StarchLv} />
      </div>
    </div>
  );
};

export default MiStarchLv;
