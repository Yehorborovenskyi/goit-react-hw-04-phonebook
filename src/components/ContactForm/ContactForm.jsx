import { Form, Label, Input, Submit } from './ContactForm.styled';
import { useState } from 'react';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';


export default function ContactForm({ onSubmit }) {
  const [formData, setFormData] = useState({ name: '', number: '' });
 

  const handleChange = event => {
    const { name, value } = event.target;
    setFormData(prevFormData => ({ ...prevFormData, [name]: value }));
  }

  const handleSubmit = event => {
    event.preventDefault();
    onSubmit(formData);
    setFormData({ name: '', number: '' });
    event.target.reset()
  }

const nameInputId = nanoid();
const numberInputId = nanoid();




  
    return (
      <Form onSubmit={handleSubmit}>
        <Label htmlFor={nameInputId}>
          Name
          <Input
            onChange={handleChange}
            type="text"
            name="name"
            id={nameInputId}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </Label>
        <Label htmlFor={numberInputId}>
          Number
          <Input
            onChange={handleChange}
            type="tel"
            name="number"
            id={numberInputId}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </Label>
        <Submit>Add to contact</Submit>
      </Form>
    );
  }
  
    



ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};