import classes from "./Cake.module.css";
import { Link } from "react-router-dom";
import { MdDelete, MdOutlineMode } from "react-icons/md";
import axios from "axios";

const Cake = (props) => {
  const updateCakeDetailsHandler = async () => {
    const response = await axios.post(
      "http://localhost:8080/admin/update-item"
    );
    console.log(response);
  };

  const deleteCakeDetailsHandler = async () => {
    const response = await axios.post(
      "http://localhost:8080/admin/delete-item",
      { id: props.id }
    );
    console.log(response);
  };

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
              onClick={updateCakeDetailsHandler}
              size="1.5rem"
              color="brown"
            />
          </Link>
        </div>
        <div>
          <Link>
            <MdDelete
              onClick={deleteCakeDetailsHandler}
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
