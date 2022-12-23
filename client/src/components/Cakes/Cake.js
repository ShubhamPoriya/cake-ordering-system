import classes from "./Cake.module.css";

const Cake = (props) => {
  return (
    <div className={classes.cakeCard}>
      <img
        className={classes.cakeImg}
        src={props.cakeImage}
        alt={props.cakeName}
      />
      <div className={classes.cakeDetails}>
        <p>{props.cakeName}</p>
        <p>{props.cakeDesc}</p>
        <p>{props.cakeBasePrice}</p>
      </div>
    </div>
  );
};

export default Cake;
