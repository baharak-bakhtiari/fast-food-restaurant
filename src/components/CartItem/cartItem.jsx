import { RiCloseCircleLine } from "react-icons/ri";
import { useAppContext } from "../../context";
import PropTypes from "prop-types";

const CartItem = ({ item }) => {
  const { removeItem, changeQuantity } = useAppContext();

  return (
    <div className="d-flex justify-content-between align-items-center mt-3">
      <div className="d-block d-sm-flex align-items-center text-center text-sm-end">
        <img
          src={item.imageUrl}
          width="120"
          className="ms-3 rounded"
          alt="Pizza"
        />

        <div>
          <h3 className="product-title fs-base mb-2">
            <p>{item.name}</p>
          </h3>
          <div className="fs-lg text-accent pt-2">{item.price} تومان</div>
        </div>
      </div>
      <div className="pt-2 pt-sm-0 ps-sm-3 mx-auto mx-sm-0 text-center text-sm-end">
        <label className="form-label">تعداد</label>
        <input
          className="form-control"
          type="number"
          value={item.quantity}
          min="1"
          onChange={(e) =>
            changeQuantity({ id: item.id, quantity: e.target.value })
          }
        />
        <button className="btn btn-link text-danger pe-0" type="button">
          <RiCloseCircleLine className="ms-1" />
          <span onClick={() => removeItem(item.id)} className="fs-sm">
            حذف
          </span>
        </button>
      </div>
    </div>
  );
};

export default CartItem;

CartItem.propTypes = {
  item: PropTypes.object.isRequired,
};
