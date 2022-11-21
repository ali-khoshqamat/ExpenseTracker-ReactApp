import { useEffect, useState } from "react";
import OverView from "./OverView";
import Transactions from "./Transactions";

const ExpenseApp = () => {
  const [expense, setExpense] = useState(0);
  const [income, setIncome] = useState(0);
  const [transactions, setTransactions] = useState([]);

  const addTransaction = (formValues) => {
    setTransactions([...transactions, { ...formValues, id: Date.now() }]);
  };
  useEffect(() => {
    let exp = 0;
    let inc = 0;
    transactions.forEach((transaction) =>
      transaction.type === "expense"
        ? (exp += parseFloat(transaction.amount))
        : (inc += parseFloat(transaction.amount))
    );
    setExpense(exp);
    setIncome(inc);
  }, [transactions]);
  return (
    <section className="flex flex-col w-[350px] bg-white p-2.5 border border-solid border-gray-300 rounded-md">
      <OverView
        expense={expense}
        income={income}
        addTransaction={addTransaction}
      />
      <Transactions transactions={transactions} />
    </section>
  );
};

export default ExpenseApp;
