import React, { useState } from "react";
import { Plus } from "lucide-react";

const Products = () => {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Sample Product",
      price: 199,
      image:
        "https://via.placeholder.com/150",
    },
  ]);

  const [newProduct, setNewProduct] = useState({
    name: "",
    price: "",
    image: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewProduct((prev) => ({ ...prev, [name]: value }));
  };

  const handleAddProduct = (e) => {
    e.preventDefault();
    if (!newProduct.name || !newProduct.price || !newProduct.image) return;

    const id = Date.now();
    setProducts((prev) => [...prev, { ...newProduct, id }]);
    setNewProduct({ name: "", price: "", image: "" });
  };

  return (
    <div className="bg-gray-200 text-black rounded-2xl shadow-lg p-4 h-full w-full">
        <div className="grid grid-cols-12 gap-6"></div>
    <div className="space-y-8">
      <h1 className="text-2xl font-semibold text-gray-800">Products</h1>

      {/* Product Form */}
      <form
        onSubmit={handleAddProduct}
        className="grid grid-cols-1 md:grid-cols-4 gap-4 bg-white p-4 rounded-lg shadow"
      >
        <input
          name="name"
          placeholder="Product Name"
          value={newProduct.name}
          onChange={handleChange}
          className="border p-2 rounded-md"
        />
        <input
          name="price"
          type="number"
          placeholder="Price"
          value={newProduct.price}
          onChange={handleChange}
          className="border p-2 rounded-md"
        />
        <input
          name="image"
          placeholder="Image URL"
          value={newProduct.image}
          onChange={handleChange}
          className="border p-2 rounded-md"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white rounded-md px-4 py-2 flex items-center justify-center gap-2 hover:bg-blue-700 transition"
        >
          <Plus size={16} /> Add
        </button>
      </form>

      {/* Product List */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-40 object-cover"
            />
            <div className="p-4 space-y-2">
              <h2 className="text-lg font-semibold">{product.name}</h2>
              <p className="text-gray-600">${product.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
    
  );
};

export default Products;
