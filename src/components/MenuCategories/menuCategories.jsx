import Loading from "../Loading/loading";
import useAxios from "../useAxios/useAxios";
import PropTypes from "prop-types";

const MenuCategories = ({ filterItems, children }) => {
  const [loading, , categories] = useAxios({ url: "/FoodCategory/categories" });
  const renderContent = () => {
    if (loading) return <Loading color={"dark-gray"} />;
    return (
      <div
        className="d-flex align-items-center justify-content-between bg-white rounded-3 shadow-lg py-4"
        style={{ height: "60px" }}
      >
        <div className="justify-content-center align-items-center">
          <ul className="nav">
            <li className="nav-item" onClick={() => filterItems()}>
              <a href="#." className="nav-link">
                همه فست فودها
              </a>
            </li>
            {categories.map((category) => (
              <li
                className="nav-item"
                key={category.id}
                onClick={() => filterItems(category.id)}
              >
                <a className="nav-link" href="#.">
                  {category.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
        {children}
      </div>
    );
  };
  return <nav className="container mt-5">{renderContent()}</nav>;
};

MenuCategories.propTypes = {
  filterItems: PropTypes.object.isRequired,
  children: PropTypes.func.isRequired,
};

export default MenuCategories;
