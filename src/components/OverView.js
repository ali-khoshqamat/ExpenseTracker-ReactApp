const OverView = ({expense, income}) => {
  return (
    <>
      <div className="topSection">
        <p>Balance: {income - expense}</p>
        <button>Add</button>
      </div>
      <div className="resultSection">
        <div>Expense {expense}</div>
        <div>Income {income}</div>
      </div>
    </>
  );
};

export default OverView;
