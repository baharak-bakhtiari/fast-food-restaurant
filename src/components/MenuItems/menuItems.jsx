import MenuItem from "../MenuItem/menuItem";
import PropTypes from "prop-types";

const MenuItems = ({ menuItems }) => {
  return (
    <div className="row">
      {menuItems.map((menuItem) => (
        <div className="col-md-4 mb-grid-gutter" key={menuItem.id}>
          <MenuItem menuItem={menuItem} />
        </div>
      ))}
    </div>
  );
};

MenuItems.propTypes = {
  menuItems: PropTypes.array.isRequired,
};

export default MenuItems;
