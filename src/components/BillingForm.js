import React, { useState } from 'react';

function BillingForm() {
  const [customerName, setCustomerName] = useState('');
  // eslint-disable-next-line no-unused-vars
  const [totalAmount, setTotalAmount] = useState(0);

  const handleCalculateTotal = () => {
    // Calculate total amount (you can customize this logic)
  };

  return (
    <div className="billing-form-container">
      <h1>Billing Form</h1>
      <form className="billing-form">
        <input
          type="text"
          placeholder="Customer Name"
          value={customerName}
          onChange={(e) => setCustomerName(e.target.value)}
        />
        {/* Input fields for items, quantities, and prices */}
        <button type="button" onClick={handleCalculateTotal}>
          Calculate Total
        </button>
        <p>Total Amount: ${totalAmount}</p>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default BillingForm;
