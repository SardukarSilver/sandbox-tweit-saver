import { useEffect } from "react";
import { observer } from "mobx-react";
import { useDrop } from "react-dnd";

import Card from "../Card";
import { useRootStore } from "../../store/RootStateContext";

import "./styles.css";

const SaveSection = () => {
  const { isFirstRender, getSavedFromLs, saved, addItemToSaved, clearStore } =
    useRootStore();

  useEffect(() => {
    if (isFirstRender) {
      getSavedFromLs();
    }
  });

  const [{ isOver }, drop] = useDrop(() => ({
    accept: "card",
    drop: (item) => addItemToSaved(item.id),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  return (
    <div className="save-section-wrapper">
      <div className="clear-btn">
        <button onClick={() => clearStore()}>Clear store</button>
      </div>
      <div
        className="save-list-wrapper"
        ref={drop}
        style={{ backgroundColor: isOver ? "#ddd" : "#fff" }}
      >
        {saved &&
          saved.map((el) => (
            <Card
              isMovable={false}
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

export default observer(SaveSection);
