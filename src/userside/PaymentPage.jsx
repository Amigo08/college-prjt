import React, { useState } from 'react';

const PaymentPage = ({ totalPrice }) => {
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCVV] = useState('');

  const handlePayment = () => {
    // Handle payment logic here, e.g., sending payment details to a server
    console.log('Payment processing...');
  };

  return (
    <div className="payment-page">
      <h2>Payment Details</h2>
      <form>
        <div className="form-group">
          <label htmlFor="cardNumber">Card Number:</label>
          <input type="text" id="cardNumber" value={cardNumber} onChange={e => setCardNumber(e.target.value)} />
        </div>
        <div className="form-group">
          <label htmlFor="expiryDate">Expiry Date:</label>
          <input type="text" id="expiryDate" value={expiryDate} onChange={e => setExpiryDate(e.target.value)} />
        </div>
        <div className="form-group">
          <label htmlFor="cvv">CVV:</label>
          <input type="text" id="cvv" value={cvv} onChange={e => setCVV(e.target.value)} />
        </div>
        <div className="form-group">
          <p><strong>Total Price:</strong> ${totalPrice}</p>
        </div>
        <button type="button" onClick={handlePayment}>Pay Now</button>
      </form>
    </div>
  );
};

export default PaymentPage;
