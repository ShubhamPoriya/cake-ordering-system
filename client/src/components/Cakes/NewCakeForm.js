import classes from "./NewCakeForm.module.css";
import { useRef, useState } from "react";
import axios from "axios";

const NewCakeForm = () => {
  const [submittingForm, setSubmittingForm] = useState(false);
  const nameInputRef = useRef();
  const descInputRef = useRef();
  const priceInputRef = useRef();

  const addCakeData = async (cakeData) => {
    try {
      const response = await axios.post(
        "http://localhost:8080/admin/addItem",
        cakeData
      );
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    setSubmittingForm(true);

    const enteredName = nameInputRef.current.value;
    const enteredDesc = descInputRef.current.value;
    const enteredPrice = priceInputRef.current.value;

    const inputData = {
      cakeName: enteredName,
      cakeDesc: enteredDesc,
      cakeBasePrice: enteredPrice,
    };

    addCakeData(inputData);

    console.log(submittingForm);
    setSubmittingForm(false);
  };

  return (
    <form onSubmit={formSubmitHandler} encType="multipart/form-data">
      <div className={classes.input}>
        <label htmlFor="cake-name">Name</label>
        <input
          type="text"
          id="cake-name"
          name="cake-name"
          placeholder="Name of the cake"
          ref={nameInputRef}
          required
        />
      </div>
      <div className={classes.input}>
        <label htmlFor="cake-desc">Description</label>
        <textarea
          id="cake-desc"
          name="cake-desc"
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
          id="cake-price"
          name="cake-price"
          placeholder="Price of the cake"
          ref={priceInputRef}
          required
        />
      </div>
      <div>
        <button
          type="submit"
          onSubmit={formSubmitHandler}
          id="submit-cake-details"
          name="submit-details"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default NewCakeForm;
