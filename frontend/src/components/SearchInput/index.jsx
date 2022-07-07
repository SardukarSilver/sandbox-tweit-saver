import { useState } from "react";
import { FiSearch } from "react-icons/fi";
import { observer } from "mobx-react";

import { useRootStore } from "../../store/RootStateContext";

import "./styles.css";

const SearchInput = () => {
  const { getSearchResults } = useRootStore();
  const [searchInput, setSearchInput] = useState("");

  const clickHandler = () => {
    getSearchResults(searchInput);
  };

  return (
    <div className="search-field">
      <input
        className="search-input"
        type="search"
        name="state"
        placeholder="Search Twitter"
        onKeyPress={(event) => {
          if (event.key === "Enter") {
            clickHandler();
          }
        }}
        onChange={(e) => setSearchInput(e.target.value)}
      />
      <button type="submit" className="btn btn-primary" onClick={clickHandler}>
        <FiSearch />
      </button>
    </div>
  );
};

export default observer(SearchInput);
