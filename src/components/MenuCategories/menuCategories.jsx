import Loading from "../Loading/loading";
import useAxios from "../useAxios/useAxios";

const MenuCategories = () => {
  const [loading, categories] = useAxios({ url: "/FoodCategory/categories" });
  const renderContent = () => {
    if (loading) return <Loading color={"dark-gray"} />;
    return (
      <div
        className="d-flex align-items-center bg-white rounded-3 shadow-lg py-4"
        style={{ height: "60px" }}
      >
        <div className="justify-content-center align-items-center">
          <ul className="nav">
            <li className="nav-item">
              <a href="#." className="nav-link">
                همه فست فودها
              </a>
            </li>
            {categories.map((category) => (
              <li className="nav-item" key={category.id}>
                <a className="nav-link" href="#.">
                  {category.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  };
  return <nav className="container mt-5">{renderContent()}</nav>;
};

export default MenuCategories;
