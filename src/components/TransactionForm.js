import { useState } from "react";

const TransactionForm = ({ addTransaction, setIsShow }) => {
  const [formValues, setFormValues] = useState({
    desc: "",
    amount: 0,
    type: "expense",
  });

  const formChangeHnader = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };
  const formSubmitHandler = (e) => {
    e.preventDefault();
    addTransaction(formValues);
    setIsShow(false);
  };

  return (
    <form
      onSubmit={formSubmitHandler}
      className="flex flex-col justify-between h-44 mb-6 p-1.5 border border-solid border-gray-300 rounded-md bg-zinc-100"
    >
      <input
        type="text"
        name="desc"
        value={formValues.desc}
        onChange={formChangeHnader}
        placeholder="Description"
        className="outline-none py-1.5 px-2 border border-solid border-gray-300 rounded-md"
      />
      <input
        type="number"
        name="amount"
        value={formValues.amount}
        onChange={formChangeHnader}
        placeholder="Amount"
        className="outline-none py-1.5 px-2 border border-solid border-gray-300 rounded-md"
      />
      <div className="flex justify-start items-center text-sm">
        <input
          type="radio"
          name="type"
          value="expense"
          checked={formValues.type === "expense"}
          onChange={formChangeHnader}
          id="expense"
          className="outline-none py-1.5 px-2 border border-solid border-gray-300 rounded-md"
        />
        <label htmlFor="expense" className="ml-1">
          Expense
        </label>
        <input
          type="radio"
          name="type"
          value="income"
          checked={formValues.type === "income"}
          onChange={formChangeHnader}
          id="income"
          className="outline-none ml-2.5 py-1.5 px-2 border border-solid border-gray-300 rounded-md"
        />
        <label htmlFor="income" className="ml-1">
          Income
        </label>
      </div>
      <button
        className="outline-none py-1.5 px-2.5 font-bold text-stone-50 bg-green-700 border border-solid border-green-700 rounded-md"
        type="submit"
      >
        Add Transactions
      </button>
    </form>
  );
};

export default TransactionForm;
