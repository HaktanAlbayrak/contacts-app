import React from "react";

import { useSelector, useDispatch } from "react-redux";
import { contactSelectors, removeAllContact } from "../../redux/contactsSlice";

import Item from "./Item";

const List = ({ total }) => {
  const dispatch = useDispatch();

  const contacts = useSelector(contactSelectors.selectAll);

  const handleRemoveAll = () => {
    if (total !== 0) {
      if (window.confirm("are u sure?")) dispatch(removeAllContact());
    }
  };

  return (
    <div>
      {total > 0 && (
        <div className="deleteAllBtn" onClick={handleRemoveAll}>
          Remove All
        </div>
      )}

      <ul className="list">
        {contacts.map((contact) => (
          <Item key={contact.id} item={contact} />
        ))}
      </ul>
    </div>
  );
};

export default List;
