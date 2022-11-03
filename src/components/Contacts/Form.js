import { useState } from "react";

import { nanoid } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contactsSlice";

const Form = () => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !number) return false;

    // const names = name.split(",");

    // const data = names.map((name) => ({ id: nanoid(), name }));

    // dispatch(addContacts(data));

    dispatch(addContact({ id: nanoid(), name, phone_number: number }));
    setName("");
    setNumber("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          placeholder="Phone Number"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
        />
        <div className="btn">
          <button type="submit">ADD</button>
        </div>
      </form>
    </div>
  );
};

export default Form;
