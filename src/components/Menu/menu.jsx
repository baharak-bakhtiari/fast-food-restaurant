import { useState } from "react";
import MenuCategories from "../MenuCategories/menuCategories";
import MenuItems from "../MenuItems/menuItems";
import useAxios from "../useAxios/useAxios";
import Loading from "../Loading/loading";
import SearchBar from "../SearchBar/searchBar";
import notFound from "../../assets/images/404.png";

const Menu = () => {
  const [url, setUrl] = useState("/FastFood/list");
  const [loading, , menuItems] = useAxios({ url });

  const filterItems = (categoryId) => {
    setUrl(`/FastFood/list${categoryId ? "?categoryID=" + categoryId : ""}
`);
  };

  const searchItems = (term) => {
    setUrl(`/FastFood/search/${term ? "?term=" + term : ""}`);
  };

  const renderContent = () => {
    if (loading) return <Loading />;
    if (menuItems.length === 0)
      return (
        <div>
          <div className="alert alert-warning text-center">
            برای کلیدواژه مورد نظر، آیتمی یافت نشد.
          </div>
          <img src={notFound} className="mx-auto d-block mt-5" alt="notFound" />
        </div>
      );
    return <MenuItems menuItems={menuItems} />;
  };

  return (
    <div>
      <MenuCategories filterItems={filterItems}>
        <SearchBar searchItems={searchItems} />
      </MenuCategories>
      <div>{renderContent()}</div>
    </div>
  );
};

export default Menu;
