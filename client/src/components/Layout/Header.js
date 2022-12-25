import classes from "./Header.module.css";
import { MdAddCircleOutline } from "react-icons/md";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className={classes.header}>
      <ul>
        <li>
          <Link to="/addCake">
            <a href="#Home">
              <MdAddCircleOutline size="2.5rem" color="brown" />
            </a>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
