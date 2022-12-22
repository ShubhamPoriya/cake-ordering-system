import classes from "./Header.module.css";
import { MdAddCircleOutline } from "react-icons/md";

const Header = () => {
  return (
    <div className={classes.header}>
      <ul>
        <li>
          <a href="#Home">
            <MdAddCircleOutline size="2.5rem" color="brown" />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Header;
