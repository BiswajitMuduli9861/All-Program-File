import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addAddress, setAddresses } from "./redux/addressSlice";
import axios from "axios";
import MapComponent from "./components/Map";
import AddressForm from "./components/AddressForm";
import AddressList from "./components/AddressList";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchAddresses = async () => {
      const response = await axios.get("http://localhost:5000/api/addresses");
      dispatch(setAddresses(response.data));
    };
    fetchAddresses();
  }, [dispatch]);

  // Define the onSave function
  const handleSave = (newAddress) => {
    dispatch(addAddress(newAddress)); // Update Redux state
  };

  return (
    <div>
      <h1>Location/Address Flow</h1>
      <MapComponent />
      {/* Pass handleSave as the onSave prop */}
      <AddressForm onSave={handleSave} />
      <AddressList />
    </div>
  );
};

export default App;
