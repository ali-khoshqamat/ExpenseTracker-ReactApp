const Transactions = ({ transactions }) => {
  return (
    <section>
      <p>Transactions!</p>
      {transactions.map((transaction) => (
        <div key={transaction.id}>{transaction.desc}</div>
      ))}
    </section>
  );
};

export default Transactions;
