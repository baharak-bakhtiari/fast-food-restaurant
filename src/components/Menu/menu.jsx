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
          <div
            className="alert text-center"
            style={{ backgroundColor: "#f8d9a0", borderColor: "orange" }}
          >
            برای کلیدواژه مورد نظر، آیتمی یافت نشد.
          </div>
          <img
            src={notFound}
            className="mx-auto d-block my-5"
            alt="notFound"
            width={"500"}
          />
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
