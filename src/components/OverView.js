import { useState } from "react";
import TransactionForm from "./TransactionForm";

const OverView = ({ expense, income, addTransaction }) => {
  const [isShow, setIsShow] = useState(false);

  return (
    <>
      <div className="topSection">
        <p>Balance: ${income - expense}</p>
        <button
          className={`btn ${isShow && "btn-cancel"}`}
          onClick={() => setIsShow((prevState) => !prevState)}
        >
          {!isShow ? "Add" : "Cancel"}
        </button>
      </div>
      {isShow && <TransactionForm addTransaction={addTransaction} />}
      <div className="resultSection">
        <div className="box">
          Expense<span className="expense">${expense}</span>
        </div>
        <div className="box">
          Income<span className="income">${income}</span>
        </div>
      </div>
    </>
  );
};

export default OverView;
