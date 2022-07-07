import { observer } from "mobx-react";

import Card from "../Card";
import SearchInput from "../SearchInput";
import { useRootStore } from "../../store/RootStateContext";

import "./styles.css";

const SearchSection = () => {
  const { results } = useRootStore();
  return (
    <div className="search-section-wrapper">
      <SearchInput />
      <div className="search-results">
        {results.map((el) => (
          <Card
            isMovable
            key={el.id}
            id={el.id}
            user={el.user}
            text={el.text}
            date={el.created_at}
          />
        ))}
      </div>
    </div>
  );
};

export default observer(SearchSection);
