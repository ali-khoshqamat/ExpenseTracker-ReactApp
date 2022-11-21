import { useState } from "react";
import OverView from "./OverView";
import Transactions from "./Transactions";

const ExpenseApp = () => {
  const [expense, setExpense] = useState(0);
  const [income, setIncome] = useState(0);
  const [transactions, setTransactions] = useState([]);

  const addTransaction = (formValues) => {
    // console.log(formValues);
    setTransactions([...transactions, { ...formValues, id: Date.now() }]);
  };

  return (
    <section className="container">
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
