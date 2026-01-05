import { useState } from "react";

function Task3() {
  const products = [
    { id: 1, name: "Laptop", category: "Electronics", price: 50000, stock: true },
    { id: 2, name: "Mobile", category: "Electronics", price: 20000, stock: false },
    { id: 3, name: "Shoes", category: "Fashion", price: 3000, stock: true },
    { id: 4, name: "T-Shirt", category: "Fashion", price: 1200, stock: true },
    { id: 5, name: "Watch", category: "Accessories", price: 8000, stock: false },
  ];

  const [selectedCategory, setSelectedCategory] = useState("All");
  const [maxPrice, setMaxPrice] = useState(50000);

  // Filter products
  const filteredProducts = products.filter(
    (product) =>
      (selectedCategory === "All" ||
        product.category === selectedCategory) &&
      product.price <= maxPrice
  );

  return (
    <div style={{ padding: "20px", maxWidth: "600px", margin: "auto" }}>
      <h1>Product Filter App</h1>

      {/* Filters */}
      <div style={{ marginBottom: "20px" }}>
        <label>Category: </label>
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          <option value="All">All</option>
          <option value="Electronics">Electronics</option>
          <option value="Fashion">Fashion</option>
          <option value="Accessories">Accessories</option>
        </select>

        <br />
        <br />

        <label>Max Price: </label>
        <input
          type="number"
          value={maxPrice}
          onChange={(e) => setMaxPrice(Number(e.target.value))}
        />
      </div>

      {/* Counters */}
      <p>Total Products: {products.length}</p>
      <p>Filtered Products: {filteredProducts.length}</p>

      {/* Product List */}
      <ul>
        {filteredProducts.map((product) => (
          <li
            key={product.id}
            style={{
              color: product.stock ? "black" : "red",
              marginBottom: "10px",
            }}
          >
            <strong>{product.name}</strong> <br />
            Category: {product.category} <br />
            Price: ₹{product.price} <br />
            Status: {product.stock ? "In Stock ✅" : "Out of Stock ❌"}
            <br />
            <button disabled={!product.stock}>
              {product.stock ? "Buy Now" : "Unavailable"}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Task3;
