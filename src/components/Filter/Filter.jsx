import PropTypes from 'prop-types';
import { FilterTitle, FilterInput, FilterDiv } from './Filter.styled';

const Filter = ({ value, onChange }) => {
  return (
    <FilterDiv>
      <FilterTitle>Find contacts by name</FilterTitle>
      <FilterInput type="text" value={value} onChange={onChange} />
    </FilterDiv>
  );
};

export default Filter;

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};