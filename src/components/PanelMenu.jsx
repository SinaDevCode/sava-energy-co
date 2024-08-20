import { ConfigProvider, Menu } from "antd";
import MenuContent from "../db/panels/sealand/menuContent/menuContent";

const PanelMenu = (props) => {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorText: "#ffffff",
          fontFamily: "Roboto",
        },
        components: {
          Menu: {
            iconSize: 16,
            itemDisabledColor: "rgba(255, 255, 255, 0.5)",
            itemActiveBg: "rgb(30, 189, 184)",
            itemHoverBg: "rgba(30, 189, 184, 0.5)",
            itemSelectedBg: "#1ebdb8",
            itemSelectedColor: "#ffffff",
            subMenuItemBg: "transparent",
          },
        },
      }}
    >
      <Menu
        mode="inline"
        items={MenuContent}
        defaultSelectedKeys={[props.selectedKeys]}
        className="absolute top-0 left-0 overflow-auto w-64 h-screen bg-DarkBlue"
      />
    </ConfigProvider>
  );
};

export default PanelMenu;
