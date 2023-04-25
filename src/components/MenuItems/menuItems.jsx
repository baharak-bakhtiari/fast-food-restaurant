import MenuItem from "../MenuItem/menuItem";

const MenuItems = ({ menuItems }) => {
  return (
    <div className="row">
      {menuItems.map((menuItem) => (
        <div className="col-md-4 mb-grid-gutter" key={menuItem.id}>
          <MenuItem {...menuItem} />
        </div>
      ))}
    </div>
  );
};

export default MenuItems;
