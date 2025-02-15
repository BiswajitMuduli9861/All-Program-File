import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeAddress } from "../redux/addressSlice";

const AddressList = () => {
  const addresses = useSelector((state) => state.addresses);
  const dispatch = useDispatch();

  return (
    <div>
      <h3>Saved Addresses</h3>
      {addresses.map((addr) => (
        <div key={addr.id}>
          <p>{addr.details} - {addr.category}</p>
          <button onClick={() => dispatch(removeAddress(addr.id))}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default AddressList;
