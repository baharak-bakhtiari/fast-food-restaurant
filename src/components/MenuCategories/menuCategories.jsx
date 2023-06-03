import Loading from "../Loading/loading";
import useAxios from "../../hooks/useAxios/useAxios";
import PropTypes from "prop-types";
import Dropdown from "react-bootstrap/Dropdown";
import "./menuCategories.css";

const MenuCategories = ({ filterItems, children }) => {
  const [loading, , categories] = useAxios({ url: "/FoodCategory/categories" });

  const renderContent = () => {
    if (loading) return <Loading color={"dark-gray"}/>;
    return (
      <div
        className="d-flex align-items-center justify-content-between bg-white rounded-3 shadow-lg mb-5"
        id="menu"
      >
        <Dropdown>
          <Dropdown.Toggle variant="white" id="dropdownMenuButton">
            دسته‌بندی فست‌فودها
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item
              id="category-item"
              href="#"
              onClick={() => filterItems()}
            >
              همه فست فودها
            </Dropdown.Item>
            {categories.map((category) => (
              <Dropdown.Item
                id="category-item"
                key={category.id}
                onClick={() => filterItems(category.id)}
              >
                {category.name}
              </Dropdown.Item>
            ))}
          </Dropdown.Menu>
        </Dropdown>
        {children}
      </div>
    );
  };

  return <nav className="container mt-5">{renderContent()}</nav>;
};

MenuCategories.propTypes = {
  filterItems: PropTypes.func.isRequired,
  children: PropTypes.func.isRequired,
};

export default MenuCategories;
