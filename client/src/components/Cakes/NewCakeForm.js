import classes from "./NewCakeForm.module.css";

const NewCakeForm = () => {
  return (
    <form>
      <div className={classes.input}>
        <label htmlFor="cake-name">Name</label>
        <input
          type="text"
          id="cake-name"
          placeholder="Name of the cake"
          required
        />
      </div>
    </form>
  );
};

export default NewCakeForm;
