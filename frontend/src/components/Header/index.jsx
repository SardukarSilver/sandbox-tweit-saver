import { FiTwitter } from "react-icons/fi";

import "./styles.css";

const Header = () => {
  return (
    <header className="header-wrapper">
      <div className="header-logo">
        <FiTwitter />
      </div>
      <h1 className="header-title">Twit saver</h1>
    </header>
  );
};

export default Header;
