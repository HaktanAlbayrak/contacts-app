import Form from "./Form";
import List from "./List";

import { useSelector } from "react-redux";
import { contactSelectors } from "../../redux/contactsSlice";

const Contacts = () => {
  const total = useSelector(contactSelectors.selectTotal);

  return (
    <>
      <h1>Contacts ({total})</h1>
      <List total={total} />
      <Form />
    </>
  );
};

export default Contacts;
