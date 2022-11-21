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
    return <p className="mt-4 ml-2">add some transaction!</p>;
  return (
    <section className="mt-5">
      <p className="font-bold">Transactions:</p>
      <input
        type="text"
        value={searchItem}
        onChange={changeHandler}
        placeholder="Search..."
        className="outline-none w-full py-1.5 px-2 mt-1 border border-solid border-stone-300 rounded-md"
      />
      {filteredTnx.length ? (
        filteredTnx.map((transaction) => (
          <div
            className={`flex justify-between bg-zinc-100 p-2.5 mt-2.5 font-bold text-sm rounded-md border-r-4 border-solid ${
              transaction.type === "expense"
                ? "border-red-600"
                : "border-green-700"
            }`}
            key={transaction.id}
          >
            <span>{transaction.desc}</span>
            <span>${transaction.amount}</span>
          </div>
        ))
      ) : (
        <p className="mt-2.5 text-sm">no item matchs!</p>
      )}
    </section>
  );
};

export default Transactions;
