import ExpenseApp from "./components/ExpenseApp";

function App() {
  return (
    <div className="w-full h-screen flex flex-col items-center text-[#0d1d2c] bg-slate-100 pt-8 font-body ">
      <header className="font-bold text-xl m-4">
        <h2>Expense Tracker</h2>
      </header>
      <ExpenseApp />
    </div>
  );
}

export default App;
