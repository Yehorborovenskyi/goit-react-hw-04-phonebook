import PropTypes from 'prop-types';
import { Li, List, Delete } from './ContactList.styled';
import React from 'react';

const Items = ({ options, onDeleteContact }) => {
  return (
    <List>
      {options.length ? (
        options.map(({ id, text }) => (
          <Li key={id}>
            <p>
              {text.name}: {text.number}{' '}
              <Delete
                onClick={() => {
                  onDeleteContact(id);
                }}
              >
                Delete
              </Delete>
            </p>
          </Li>
        ))
      ) : (
        <h3>There are no contacts in your book</h3>
      )}
    </List>
  );
};

export default Items;

Items.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      text: PropTypes.shape({
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
      }),
    })
  ),
  onDeleteContact: PropTypes.func.isRequired,
};