import { useEffect, useState } from "react";

const Transactions = ({ transactions }) => {
  const [searchItem, setSearchItem] = useState("");
  const [filteredTnx, setFilteredTnx] = useState(transactions);
  useEffect(() => {
    filterTransactions(searchItem);
  }, [transactions]);

  const filterTransactions = (search) => {
    return !search || search === ""
      ? setFilteredTnx(transactions)
      : setFilteredTnx(
          transactions.filter((t) =>
            t.desc.toLowerCase().includes(search.toLowerCase())
          )
        );
  };
  const changeHandler = (e) => {
    setSearchItem(e.target.value);
    filterTransactions(e.target.value);
  };

  if (!transactions.length)
    return <p style={{ marginTop: "10px" }}>add some transaction!</p>;
  return (
    <section style={{ marginTop: "15px" }}>
      <p>Transactions!</p>
      <input
        type="text"
        value={searchItem}
        onChange={changeHandler}
        placeholder="Search..."
        className="search"
      />
      {filteredTnx.length ? (
        filteredTnx.map((transaction) => (
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
        ))
      ) : (
        <p style={{ marginTop: "10px", fontSize: "14px" }}>no item matchs!</p>
      )}
    </section>
  );
};

export default Transactions;
