import React, { useState } from 'react';

function BillingForm() {
  // State variables for customer name, items, and total amount
  const [customerName, setCustomerName] = useState('');
  const [items, setItems] = useState([]); // Array of objects with item details
  const [totalAmount, setTotalAmount] = useState(0);

  // Function to handle item addition
  const handleAddItem = (e) => {
    e.preventDefault();

    // Get values from input fields
    const itemName = e.target.itemName.value;
    const quantity = parseInt(e.target.quantity.value, 10);
    const price = parseFloat(e.target.price.value);

    // Validate input values
    if (!itemName || isNaN(quantity) || isNaN(price)) {
      alert('Invalid input. Please enter valid values.');
      return;
    }

    // Create new item object
    const newItem = { name: itemName, quantity, price };

    // Update items array and total amount
    setItems([...items, newItem]);
    setTotalAmount(
      totalAmount + quantity * price
    );

    // Reset input fields
    e.target.itemName.value = '';
    e.target.quantity.value = '';
    e.target.price.value = '';
  };

  // Function to calculate total amount
  const calculateTotal = () => {
    let total = 0;
    for (const item of items) {
      total += item.quantity * item.price;
    }
    setTotalAmount(total);
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement form submission logic here
    // (e.g., send data to a server)
  };

  return (
    <div className="billing-form-container">
      <h1>Billing Form</h1>
      <form className="billing-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Customer Name"
          value={customerName}
          onChange={(e) => setCustomerName(e.target.value)}
        />
        <h3>Items</h3>
        <div className="item-list">
          {items.map((item, index) => (
            <div key={index} className="item">
              <span>{item.name}</span>
              <span>x{item.quantity}</span>
              <span>${item.price.toFixed(2)}</span>
            </div>
          ))}
        </div>
        <form onSubmit={handleAddItem}>
          <label htmlFor="itemName">Item Name:</label>
          <input type="text" id="itemName" required />
          <label htmlFor="quantity">Quantity:</label>
          <input type="number" id="quantity" required />
          <label htmlFor="price">Price:</label>
          <input type="number" id="price" required step="0.01" />
          <button type="submit">Add Item</button>
        </form>
        <button type="button" onClick={calculateTotal}>
          Calculate Total
        </button>
        <p>Total Amount: ${totalAmount.toFixed(2)}</p>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default BillingForm;
