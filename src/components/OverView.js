import { useState } from "react";
import TransactionForm from "./TransactionForm";

const OverView = ({ expense, income, addTransaction }) => {
  const [isShow, setIsShow] = useState(false);

  return (
    <>
      <div className="flex justify-between items-center mb-5">
        <p className="font-bold">
          Balance:{" "}
          <span
            className={
              income - expense > 0
                ? "text-green-700"
                : income - expense < 0
                ? "text-red-600"
                : ""
            }
          >
            ${income - expense}
          </span>
        </p>
        <button
          className={`outline-none py-1 px-3.5 bg-green-700 text-stone-50 border border-solid border-green-700 rounded-md font-bold ${
            isShow && "text-red-700 border-red-700 bg-stone-100"
          } `}
          onClick={() => setIsShow((prevState) => !prevState)}
        >
          {!isShow ? "Add" : "Cancel"}
        </button>
      </div>
      {isShow && (
        <TransactionForm
          addTransaction={addTransaction}
          setIsShow={setIsShow}
        />
      )}
      <div className="flex justify-around items-center">
        <div className="w-36 h-16 py-1.5 px-2.5 flex flex-col items-start justify-between border border-solid border-stone-300 rounded-md">
          Expense<span className="font-bold text-red-600">${expense}</span>
        </div>
        <div className="w-36 h-16 py-1.5 px-2.5 flex flex-col items-start justify-between border border-solid border-stone-300 rounded-md">
          Income<span className="font-bold text-green-700">${income}</span>
        </div>
      </div>
    </>
  );
};

export default OverView;
