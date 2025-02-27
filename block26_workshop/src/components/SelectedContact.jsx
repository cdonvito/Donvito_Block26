import React from "react";
import { useState } from "react";
import { useEffect } from "react";

const api = "https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users";

function SelectedContact({ setSelectedContactId, selectedContactId }) {
  const [contact, setContact] = useState(null);

  useEffect(() => {
    async function fetchContact() {
      try {
        const response = await fetch(`${api}/${selectedContactId}`);
        const json = await response.json();
        console.log("Response: ", json.id);

        setContact(json);
      } catch (error) {
        console.log("Error in fetchContacts", error);
      }
    }
    fetchContact();
  }, []);

  console.log("State: ", contact);

  if (!contact) return <p>Loading contact...</p>;

  return (
    <table>
      <thead>
        <tr>
          <th colSpan="6">{contact.name}</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Username</td>
          <td>Email</td>
          <td>Phone</td>
          <td>Website</td>
          <td>Company</td>
          <td>Address</td>
        </tr>
        <tr>
          <td>{contact.username}</td>
          <td>{contact.email}</td>
          <td>{contact.phone}</td>
          <td>{contact.website}</td>
          <td>{contact.company.name}</td>
          <td>{`${contact.address.street}, ${contact.address.suite}, ${contact.address.city} ${contact.address.zipcode}`}</td>
        </tr>
      </tbody>
    </table>
  );
}

export default SelectedContact;
