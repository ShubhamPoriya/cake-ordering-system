import classes from "./Header.module.css";
import { MdAddCircleOutline } from "react-icons/md";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className={classes.header}>
      <ul>
        <li>
          <Link to="/add-cake">
            <MdAddCircleOutline size="2.5rem" color="brown" />
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
