import React, { useRef, useState } from "react";

const Billing = () => {
  const [bills, setBills] = useState([]);
  const [form, setForm] = useState({
    productName: "",
    quantity: 1,
    price: 0,
  });

  const billRef = useRef();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleAddBill = (e) => {
    e.preventDefault();

    const total = form.quantity * form.price;
    const newBill = {
      id: Date.now(),
      ...form,
      quantity: parseInt(form.quantity),
      price: parseFloat(form.price),
      total,
    };

    setBills([...bills, newBill]);
    setForm({ productName: "", quantity: 1, price: 0 });
  };

  const handleDelete = (id) => {
    setBills(bills.filter((bill) => bill.id !== id));
  };

  const totalAmount = bills.reduce((acc, curr) => acc + curr.total, 0);

  const handlePrint = () => {
    const printContents = billRef.current.innerHTML;
    const originalContents = document.body.innerHTML;

    document.body.innerHTML = printContents;
    window.print();
    document.body.innerHTML = originalContents;
    window.location.reload();
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Billing System</h2>

      <form
        onSubmit={handleAddBill}
        className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6"
      >
        <input
          type="text"
          name="productName"
          placeholder="Product Name"
          value={form.productName}
          onChange={handleChange}
          required
          className="border rounded-lg p-2"
        />
        <input
          type="number"
          name="quantity"
          placeholder="Quantity"
          value={form.quantity}
          onChange={handleChange}
          required
          min={1}
          className="border rounded-lg p-2"
        />
        <input
          type="number"
          name="price"
          placeholder="Price"
          value={form.price}
          onChange={handleChange}
          required
          min={0}
          className="border rounded-lg p-2"
        />
        <button
          type="submit"
          className="  bg-blue-600 text-white rounded-lg py-2 hover:bg-blue-700"
        >
          Add Item
        </button>
      </form>

      {/* BILL SECTION TO PRINT */}
      <div ref={billRef} className="max-w-xl mx-auto bg-white border rounded shadow p-4">
        <div className="text-xl font-semibold mb-4 text-center">Invoice</div>
        {bills.length > 0 ? (
          <table className="w-full border text-sm text-left">
            <thead className="bg-gray-100 text-gray-700">
              <tr>
                <th className="p-2 border">Product</th>
                <th className="p-2 border">Qty</th>
                <th className="p-2 border">Price</th>
                <th className="p-2 border">Total</th>
                <th className="p-2 border">#</th>
              </tr>
            </thead>
            <tbody>
              {bills.map((bill) => (
                <tr key={bill.id} className="hover:bg-gray-50">
                  <td className="p-2 border">{bill.productName}</td>
                  <td className="p-2 border">{bill.quantity}</td>
                  <td className="p-2 border">₹{bill.price.toFixed(2)}</td>
                  <td className="p-2 border">₹{bill.total.toFixed(2)}</td>
                  <td className="p-2 border text-center">
                    <button
                      onClick={() => handleDelete(bill.id)}
                      className="text-red-500 hover:text-red-700"
                    >
                      🗑
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p className="text-gray-500 text-center">No items added.</p>
        )}

        <div className="mt-4 text-right font-bold text-lg">
          Total: ₹{totalAmount.toFixed(2)}
        </div>
      </div>

      {bills.length > 0 && (
        <div className="mt-4 flex justify-end gap-4">
          <button
            onClick={handlePrint}
            className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
          >
            🖨️ Print Bill
          </button>
        </div>
      )}
    </div>
  );
};

export default Billing;
