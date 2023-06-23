import React, { useState } from 'react';
import "./Form.css"
import { useParams } from 'react-router-dom';
const Form = () => {
  const [orderDate, setOrderDate] = useState('');
  const [company, setCompany] = useState('');
  const [owner, setOwner] = useState('');
  const [quantity, setQuantity] = useState('');
  const [item, setItem] = useState('');
  const [weight, setWeight] = useState('');
  const [shipment, setShipment] = useState('');
  const [tracking, setTracking] = useState('');
  const [size, setSize] = useState('');
  const [box, setBox] = useState('');
  const [specification, setSpecification] = useState('');
  const [checklist, setChecklist] = useState('');;
  const { id } = useParams();
  const handleSubmit = async (e) => {
    e.preventDefault();
    // Perform validation and submit logic here
    try {
      const dataPost = await fetch("https://mysql-0yei.onrender.com/customer-data", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          customer : id,
          orderDate : orderDate,
          company : company,
          owner :owner,
          quantity : quantity,
          item : item,
          weight : weight,
          shipment : shipment,
          tracking : tracking,
          size : size,
          box : box,
          specification : specification,
          checklist : checklist
        })
      });
      const response = await dataPost.json();
      if ( response.error ) {
        alert( response.error)
      }else {
        alert( response.message)
      }
    } catch (err) {
      alert(err.message)
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="orderDate">Order Date:</label>
        <input
          type="date"
          id="orderDate"
          value={orderDate}
          onChange={(e) => setOrderDate(e.target.value)}
          required
        />
      </div>

      <div>
        <label htmlFor="company">Company:</label>
        <input
          type="text"
          id="company"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
          required
        />
      </div>

      <div>
        <label htmlFor="owner">Owner:</label>
        <input
          type="text"
          id="owner"
          value={owner}
          onChange={(e) => setOwner(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="Item">Item:</label>
        <input
          type="text"
          id="quantity"
          value={item}
          onChange={(e) => setItem(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="quantity">Quantity:</label>
        <input
          type="number"
          id="quantity"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="quantity">Weight:</label>
        <input
          type="number"
          id="quantity"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="quantity">Request for Shipment:</label>
        <input
          type="text"
          id="quantity"
          value={shipment}
          onChange={(e) => setShipment(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="quantity">Tracking ID:</label>
        <input
          type="text"
          id="quantity"
          value={tracking}
          onChange={(e) => setTracking(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="quantity">Shipment Size:</label>
        <input
          type="number"
          id="quantity"
          value={size}
          onChange={(e) => setSize(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="quantity">Box Count:</label>
        <input
          type="number"
          id="quantity"
          value={box}
          onChange={(e) => setBox(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="quantity">Specification:</label>
        <input
          type="text"
          id="quantity"
          value={specification}
          onChange={(e) => setSpecification(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="quantity">Checklist Quantity:</label>
        <input
          type="text"
          id="quantity"
          value={checklist}
          onChange={(e) => setChecklist(e.target.value)}
          required
        />
      </div>
      <div>
        <button type="submit">Submit</button>
      </div>
    </form>
  );
};

export default Form;
