import { useState, useEffect } from 'react';
import Section from './Section';
import ContactForm from './ContactForm';
import ContactList from './ContactList';
import { nanoid } from 'nanoid';
import Filter from './Filter';

export default function App() {
  const [contacts, setContacts] = useState(()=>{
    return JSON.parse(window.localStorage.getItem('contacts')) ?? [];})
  const [filter, setFilter] = useState('');
  
  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);


  const addContact = text => {
    const isDuplicate = contacts.some(
      contact => contact.text.name.toLowerCase() === text.name.toLowerCase()
    );
    if (isDuplicate) {
      alert(`${text.name} is already in contacts`);
    } else {
      const contact = {
        id: nanoid(),
        text,
      };

      setContacts([contact, ...contacts]);
    }
  };


  const deleteContact = contactId => {
    setContacts(contacts.filter(contact => contact.id !== contactId));
  };

  const changeFilter = e => {
    setFilter(e.currentTarget.value);
  };

  const getVisibleContacts = () => {
    const normilizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.text['name'].toLowerCase().includes(normilizedFilter)
    );
  };



  return (
    <div>
      <Section title="Phonebook">
        <ContactForm onSubmit={addContact} />
      </Section>

      <Section title="Contacts">
        <Filter value={filter} onChange={changeFilter} />
        <ContactList
          options={getVisibleContacts()}
          onDeleteContact={deleteContact}
        />
      </Section>
    </div>
  );
}