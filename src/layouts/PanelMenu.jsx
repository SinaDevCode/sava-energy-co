import { ConfigProvider, Menu } from "antd";
import { IconContext } from "react-icons";
import "../styles/panelMenu.css";

const PanelMenu = (props) => {
  return (
    <IconContext.Provider
      value={{
        className: "iconStyle",
      }}
    >
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
          items={props.menuContent}
          defaultSelectedKeys={props.selectedKeys}
          defaultOpenKeys={props.openKeys}
          className="fixed top-0 left-0 overflow-auto w-64 h-screen bg-DarkBlue"
        />
      </ConfigProvider>
    </IconContext.Provider>
  );
};

export default PanelMenu;
