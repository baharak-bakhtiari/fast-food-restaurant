import { useState } from "react";
import MenuCategories from "../MenuCategories/menuCategories";
import MenuItems from "../MenuItems/menuItems";
import useAxios from "../useAxios/useAxios";
import Loading from "../Loading/loading";

const Menu = () => {
  const [url, setUrl] = useState("/FastFood/list");
  const [loading, menuItems] = useAxios({ url });

  const renderContent = () => {
    if (loading) return <Loading />;
    return <MenuItems menuItems={menuItems} />;
  };

  return (
    <div>
      <MenuCategories />
      <div>{renderContent()}</div>
    </div>
  );
};

export default Menu;
