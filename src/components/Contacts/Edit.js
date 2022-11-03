import React, { useEffect } from "react";

import { useParams, useNavigate } from "react-router-dom";
import EditForm from "./EditForm";

import { useSelector } from "react-redux";
import { contactSelectors } from "../../redux/contactsSlice";

const Edit = () => {
  const { id } = useParams();
  let navigate = useNavigate();

  useEffect(() => {
    navigate();
  }, []);

  const contact = useSelector((state) =>
    contactSelectors.selectById(state, id)
  );

  if (!contact) {
    return navigate(`/`);
  }

  return (
    <div>
      <h1>Edit</h1>
      <EditForm contact={contact} />
    </div>
  );
};

export default Edit;
