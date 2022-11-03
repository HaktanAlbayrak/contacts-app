import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { updateContact } from "../../redux/contactsSlice";

const EditForm = ({ contact }) => {
  const [name, setName] = useState(contact.name);
  const [number, setNumber] = useState(contact.phone_number);

  let navigate = useNavigate();

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !number) return false;

    dispatch(
      updateContact({
        id: contact.id,
        changes: {
          name,
          phone_number: number,
        },
      })
    );

    navigate("/");
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
          <button type="submit">UPDATE</button>
        </div>
      </form>
    </div>
  );
};

export default EditForm;
