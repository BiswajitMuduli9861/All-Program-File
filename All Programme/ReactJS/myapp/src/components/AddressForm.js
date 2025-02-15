import React, { useState } from "react";
import axios from "axios";

const AddressForm = ({ onSave }) => {
  const [formData, setFormData] = useState({
    category: "Home",
    details: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:5000/api/addresses", formData);
    onSave(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Address Details"
        value={formData.details}
        onChange={(e) => setFormData({ ...formData, details: e.target.value })}
      />
      <select
        value={formData.category}
        onChange={(e) => setFormData({ ...formData, category: e.target.value })}
      >
        <option value="Home">Home</option>
        <option value="Office">Office</option>
        <option value="Friends">Friends & Family</option>
      </select>
      <button type="submit">Save Address</button>
    </form>
  );
};

export default AddressForm;
