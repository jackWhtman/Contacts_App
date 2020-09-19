import React from "react";
import PropTypes from "prop-types";

const ContactsList = ({contacts}) => {
  return (
  <table className="table table-responsive-sm table-borderless table-hover ">
    <caption>List of Contacts</caption>
    <thead className = "thead-dark">
      <tr>
        <th>Name</th>
        <th>Email</th>  
      </tr>
    </thead>
    <tbody>
      {contacts.map((contact) => {
        return (
          <tr key={contact.id}>
            <td>{contact.name}</td>
            <td>{contact.email}</td>
          </tr>
        );
      })}
    </tbody>
  </table>
)};

ContactsList.propTypes = {
  contacts: PropTypes.array.isRequired
};
export default ContactsList;
