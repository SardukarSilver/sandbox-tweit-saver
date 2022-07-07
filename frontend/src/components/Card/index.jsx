import moment from "moment";
import { useDrag } from "react-dnd";

import "./styles.css";

const Card = ({ user, text, date, id, isMovable }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "card",
    item: {
      id,
    },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  return (
    <div className="card-wrapper" ref={isMovable ? drag : null} opacity={isDragging ? "0.5" : "1"}>
      <div className="avatar">
        <img src={user.profile_image_url_https} alt="User Avatar" className="avatar-img"/>
      </div>

      <div className="card-body-wrapper">
        <div className="info-data">
          <div className="user-name">{user.name}</div>
          <div className="create-date">
            {moment(date).format("MMMM Do YYYY, h:mm a")}
          </div>
        </div>
        <div className="twit-text">{text}</div>
      </div>
    </div>
  );
};

export default Card;
