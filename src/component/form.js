import React, { useState } from "react";
const Form = (prop) => {
  // 1. create array destructuring using "useState"
  const [enterTitle, setenterTitle] = useState("");
  const [enterAmount, setenterAmount] = useState("");
  const [enterDate, setenterDate] = useState("");
  //2.Creating functions using "setenterTitle,setenterAmount,setenterDate". Setting the target value for input and adding this function in onChange.
  const titlehandler = (e) => {
    setenterTitle(e.target.value);
  };
  const amounthandler = (e) => {
    setenterAmount(e.target.value);
  };
  const datehandler = (e) => {
    setenterDate(e.target.value);
  };
  //3.Creating submitHandler for submit button and setting in form tag.
  const submitHandler = (e) => {
    e.preventDefault(); // use for Prevent the default behaviour

    //When the form is submitted we create an object using three data.
    //Create a object
    const Alldata = {
      title: enterTitle,
      amount: enterAmount,
      date: new Date(enterDate), //
    };
      prop.onsaveExpoHandler(Alldata);
    console.log( Alldata);
    //After collecting data need to clear the value from forms. We applying 2 WAY BINDING to clear the data from forms.
    setenterTitle("");
    setenterAmount("");
    setenterDate("");
  };
  //

  return (
    <>
        <form onSubmit={submitHandler}>
          <input
            type="text"
            placeholder="Title"
            className="p-2 mr-3"
            onChange={titlehandler}
            value={enterTitle} //adding value for collect the value
          />
          <input
            type="number"
            placeholder="Amount"
            className="p-2 mr-3"
            onChange={amounthandler}
            value={enterAmount} //adding value for collect the value
          />
          <input
            type="date"
            min="2023-01-01"
            max="2043-01-01"
            className="p-2 mr-3"
            onChange={datehandler}
            value={enterDate} //adding value for collect the value
          />
          <button type="submit" className="p-2 mr-3 bg-lime-500">
            Submit
          </button>
        </form>
    </>
  );
};
export default Form;
