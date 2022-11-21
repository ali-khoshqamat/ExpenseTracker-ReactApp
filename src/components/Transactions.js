const Transactions = ({ transactions }) => {
  return (
    <section style={{ marginTop: "15px" }}>
      <p>Transactions!</p>
      {transactions.map((transaction) => (
        <div
          className="transaction"
          key={transaction.id}
          style={{
            borderRight: transaction.type === "expense" && "4px solid red",
          }}
        >
          <span>{transaction.desc}</span>
          <span>${transaction.amount}</span>
        </div>
      ))}
    </section>
  );
};

export default Transactions;
