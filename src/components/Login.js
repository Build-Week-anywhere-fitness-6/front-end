import styled from 'styled-components';

export default function Login() {
  return (
    <StyledForm>
      <h1>Login</h1>
      <StyledFormField>
        <StyledLabel>
          Username
          <StyledInputs name='username' type='text' />
        </StyledLabel>

        <StyledLabel>
          Password
          <StyledInputs name='username' type='text' />
        </StyledLabel>

        <StyledButton>Log in</StyledButton>
      </StyledFormField>
    </StyledForm>
  );
}

const StyledForm = styled.form`
  margin: 0 auto;
  margin-top: 10%; /* Temporary for now. Should remove once header component is added */
  width: 80%;
  border: 1px solid hsl(0, 0%, 82%);
  border-radius: 4px;
  box-shadow: 0 30px 60px -30px hsla(0, 0%, 0%, 0.5);
  padding: 2%;
  background-color: hsl(0, 0%, 100%);
  margin-bottom: 2%;
  @media (min-width: 1150px) {
    width: 25%;
  }
`;
const StyledFormField = styled.div`
  display: flex;
  flex-flow: column wrap;
`;

const StyledLabel = styled.label`
  width: 100%;
  font-weight: 700;
`;

const StyledInputs = styled.input`
  width: 100%;
  height: 3em;
  border: 0.1em solid hsl(0, 0%, 87%);
  border-radius: 4px;
  text-indent: 0.5em;
  margin-top: 2%;
  margin-bottom: 2%;
`;

const StyledButton = styled.button`
  display: flex;
  justify-content: center;
  background-color: transparent;
  align-items: center;
  width: 100%;
  padding: 4%;
  height: 2.5em;
  font-size: 1.2rem;
  cursor: pointer;
  outline: none;
  border-radius: 4px;
  text-transform: uppercase;
  box-shadow: 0 2px 10px hsla(0, 0%, 0%, 0.16), 0 3px 6px hsla(0, 0%, 0%, 0.1);
  transition: all 0.5s ease-out;
  &:hover {
    background-color: hsl(0, 0%, 0%);
    color: hsl(0, 0%, 100%);
    box-shadow: 0 8px 6px -6px hsla(0, 0%, 0%, 0.3);
  }
  &:disabled {
    pointer-events: none;
  }
`;
