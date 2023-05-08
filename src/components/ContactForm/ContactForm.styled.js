import styled from '@emotion/styled';

export const Form = styled.form`
  border: 1px solid black;
  margin-left: 40px;
  padding: 15px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 15px;
  width: 200px;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  gap: 10px;
  font-size: 16px;
`;
export const Input = styled.input`
  background-color: #f5fffb;
  border: 1px solid #ababab;
  border-radius: 3px;
`;
export const Submit = styled.button`
  background-color: #ffecc8;
  border: 1px solid grey;
  border-radius: 3px;
  padding: 3px;
  &:hover,
  &:active {
    background-color: teal;
  }
`;
