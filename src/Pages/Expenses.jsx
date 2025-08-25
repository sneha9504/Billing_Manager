import React, { useState } from "react";

const Expenses = () => {
  const [transactions, setTransactions] = useState([]);
  const [form, setForm] = useState({ type: "income", description: "", amount: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.description || !form.amount) return;

    const newTransaction = {
      id: Date.now(),
      ...form,
      amount: parseFloat(form.amount),
    };

    setTransactions([newTransaction, ...transactions]);
    setForm({ type: "income", description: "", amount: "" });
  };

  const handleDelete = (id) => {
    setTransactions(transactions.filter((t) => t.id !== id));
  };

  const income = transactions
    .filter((t) => t.type === "income")
    .reduce((acc, t) => acc + t.amount, 0);

  const expense = transactions
    .filter((t) => t.type === "expense")
    .reduce((acc, t) => acc + t.amount, 0);

  const balance = income - expense;

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Expense Tracker</h2>

      {/* Summary */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6 text-white">
        <div className="bg-green-500 p-4 rounded-lg shadow">
          <h3 className="text-lg">Income</h3>
          <p className="text-xl font-semibold">₹{income.toFixed(2)}</p>
        </div>
        <div className="bg-red-500 p-4 rounded-lg shadow">
          <h3 className="text-lg">Expense</h3>
          <p className="text-xl font-semibold">₹{expense.toFixed(2)}</p>
        </div>
        <div className="bg-blue-500 p-4 rounded-lg shadow">
          <h3 className="text-lg">Balance</h3>
          <p className="text-xl font-semibold">₹{balance.toFixed(2)}</p>
        </div>
      </div>

      {/* Form */}
      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6"
      >
        <select
          name="type"
          value={form.type}
          onChange={handleChange}
          className="border rounded-lg p-2"
        >
          <option value="income">Income</option>
          <option value="expense">Expense</option>
        </select>
        <input
          type="text"
          name="description"
          placeholder="Description"
          value={form.description}
          onChange={handleChange}
          className="border rounded-lg p-2"
          required
        />
        <input
          type="number"
          name="amount"
          placeholder="Amount"
          value={form.amount}
          onChange={handleChange}
          className="border rounded-lg p-2"
          required
        />
        <button
          type="submit"
          className="bg-indigo-600 text-white rounded-lg p-2 hover:bg-indigo-700"
        >
          Add
        </button>
      </form>

      {/* Transaction List */}
      {transactions.length > 0 ? (
        <div className="overflow-x-auto">
          <table className="w-full border text-sm text-left">
            <thead className="bg-gray-100 text-gray-700">
              <tr>
                <th className="p-2 border">Type</th>
                <th className="p-2 border">Description</th>
                <th className="p-2 border">Amount</th>
                <th className="p-2 border">Action</th>
              </tr>
            </thead>
            <tbody>
              {transactions.map((t) => (
                <tr
                  key={t.id}
                  className={t.type === "income" ? "bg-green-50" : "bg-red-50"}
                >
                  <td className="p-2 border capitalize">{t.type}</td>
                  <td className="p-2 border">{t.description}</td>
                  <td className="p-2 border">₹{t.amount.toFixed(2)}</td>
                  <td className="p-2 border">
                    <button
                      onClick={() => handleDelete(t.id)}
                      className="text-red-600 hover:underline text-sm"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p className="text-gray-500">No transactions yet.</p>
      )}
    </div>
  );
};

export default Expenses;
