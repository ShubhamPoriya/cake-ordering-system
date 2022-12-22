import classes from "./NewCakeForm.module.css";
import { useRef, useState } from "react";
import axios from "axios";

const NewCakeForm = () => {
  const [submitForm, setSubmitForm] = useState(false);
  const nameInputRef = useRef();
  const descInputRef = useRef();
  const priceInputRef = useRef();
  const photoInputRef = useRef();

  const formSubmitHandler = (event) => {
    event.preventDefault();

    const enteredName = nameInputRef.current.value;
    const enteredDesc = descInputRef.current.value;
    const enteredPrice = priceInputRef.current.value;
    const enteredPhoto = photoInputRef.current.value;

    const addCakeData = async () => {
      const response = await axios.post("http://localhost:8080/admin/addItem");
    };

    console.log(submitForm);
    setSubmitForm(true);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={classes.input}>
        <label htmlFor="cake-name">Name</label>
        <input
          type="text"
          id="cake-name"
          placeholder="Name of the cake"
          ref={nameInputRef}
          required
        />
      </div>
      <div className={classes.input}>
        <label htmlFor="cake-desc">Description</label>
        <textarea
          id="cake-desc"
          rows="3"
          cols="25"
          placeholder="Description of the cake"
          ref={descInputRef}
          required
        />
      </div>
      <div className={classes.input}>
        <label htmlFor="cake-price">Price</label>
        <input
          type="number"
          id="cake-name"
          placeholder="Name of the cake"
          ref={priceInputRef}
          required
        />
      </div>
      <div className={classes.input}>
        <label htmlFor="cake-photo">Photo</label>
        <input
          type="file"
          id="cake-photo"
          placeholder="Photo of the cake"
          ref={photoInputRef}
          required
        />
      </div>
      <div>
        <button type="submit" id="submit-cake-details">
          Submit
        </button>
      </div>
    </form>
  );
};

export default NewCakeForm;
