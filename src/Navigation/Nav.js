import { FiHeart } from "react-icons/fi";
import { AiOutlineShoppingCart, AiOutlineUserAdd } from "react-icons/ai";
import "./Nav.css";

const Nav = ({ handleInputChange, query }) => {
  return (
    <nav>
      <div className="nav-container">
        <input
          className="search-input"
          type="text"
          onChange={handleInputChange}
          value={query}
          placeholder="Search For your Shoes..."
        />
      </div>
      <div className="profile-container">
        <a href="like">
          <FiHeart className="nav-icons" />
        </a>
        <a href="cart">
          <AiOutlineShoppingCart className="nav-icons" />
        </a>
        <a href="user">
          <AiOutlineUserAdd className="nav-icons" />
        </a>
      </div>
    </nav>
  );
};

export default Nav;