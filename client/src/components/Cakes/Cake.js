import classes from "./Cake.module.css";
import { Link } from "react-router-dom";
import { MdDelete, MdOutlineMode } from "react-icons/md";

const Cake = (props) => {
  return (
    <div className={classes.cakeCard}>
      <div className={classes.cakeDetails}>
        <span>{props.cakeName}</span>
        <p>{props.cakeDesc}</p>
      </div>
      <div className={classes.cakePrice}>
        <span>Base Price</span>
        <p>{props.cakeBasePrice}</p>
      </div>
      <div className={classes.cakeEdit}>
        <div>
          <Link to="/add-cake">
            <MdOutlineMode
              onClick={props.updateHandler}
              size="1.5rem"
              color="brown"
            />
          </Link>
        </div>
        <div>
          <Link>
            <MdDelete
              onClick={props.deleteHandler}
              size="1.5rem"
              color="brown"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Cake;
