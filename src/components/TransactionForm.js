import { useState } from "react";

const TransactionForm = ({ addTransaction }) => {
  const [formValues, setFormValues] = useState({
    desc: "",
    amount: 0,
    type: "expense",
  });

  const formChangeHnader = (e) => {
    // console.log(e.target);
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };
  const formSubmitHandler = (e) => {
    e.preventDefault();
    addTransaction(formValues);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <input
        type="text"
        name="desc"
        value={formValues.desc}
        onChange={formChangeHnader}
      />
      <input
        type="number"
        name="amount"
        value={formValues.amount}
        onChange={formChangeHnader}
      />
      <div>
        <input
          type="radio"
          name="type"
          value="expense"
          checked={formValues.type === "expense"}
          onChange={formChangeHnader}
        />
        <label>Expense</label>
        <input
          type="radio"
          name="type"
          value="income"
          checked={formValues.type === "income"}
          onChange={formChangeHnader}
        />
        <label>Income</label>
      </div>
      <button type="submit">Add Transactions</button>
    </form>
  );
};

export default TransactionForm;
