import { useState } from "react";
import PropTypes from "prop-types";
import { BsSearch } from "react-icons/bs";

const SearchBar = ({ searchItems }) => {
  const [value, setValue] = useState("");
  const submitForm = (event) => {
    event.preventDefault();
    searchItems(value);
  };

  return (
    <form onSubmit={submitForm} className="search d-flex align-items-center">
      <div className="input-group">
        <input
          type="text"
          className="form-control rounded-end pe-5 border-warning"
          placeholder="جستجوی فست فود ..."
          value={value}
          onChange={(event) => setValue(event.target.value)}
        />
        <BsSearch className="position-absolute top-50 translate-middle-y text-muted me-3" />
      </div>
    </form>
  );
};

SearchBar.propTypes = {
  searchItems: PropTypes.object.isRequired,
};

export default SearchBar;
