import styled from 'styled-components';

const StyledButton = styled.button`
  border: none;
  padding: 1em;
  border-radius: 4px;
  font-size: 1.1rem;
  transition: .1s;
  cursor: pointer;
  background-color: black;
  color: white;
  &:hover {
    background-color: rgb(36, 36, 36);
  }
`;

export default StyledButton;