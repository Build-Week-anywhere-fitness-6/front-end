import React from 'react'
import styled from 'styled-components';



const MakeAClass =()=>{
    return (
        <StyledForm>
            <StyledTitle>Set up Your class</StyledTitle>
            <StyledFormField>
            <StyledInputs
            id="name-input"
            type="text"
            name="name"
            maxLength="30"
            placeholder="First Name"
            
            />
            <StyledInputs
                id="type-input"
                type="text"
                name="type"
                maxLength="30"
                placeholder="Type Of Class"
                
            />

            <StyledInputs
                id="time-input"
                type="time"
                name="time"
                maxLength="30"
                placeholder="Start Time"
                
            />

            <StyledInputs
                id="duration-input"
                type="text"
                name="duration"
                maxLength="30"
                placeholder="Duration"
                
            />

<           StyledLabel>Intensity level
              <select
                id="intensity-dropdown"
                name='intensity'
                
              >
                <option >- Select an option -</option>
                <option >Beginner</option>
                <option>Moderate</option>
                <option >Hard</option>
                <option >Intense</option>
                
              </select>
            </StyledLabel>

            <StyledInputs
                id="Location-input"
                type="text"
                name="location"
                maxLength="50"
                placeholder="Location"
                
            />

            <StyledLabel>Current number of registered attendees
             <StyledInputs
                 id="registered-input"
                 type="text"
                 name="registered"
                 maxLength="50"
                 
                 
             />
            </StyledLabel>

            <StyledLabel>Max Class Size
            <StyledInputs
                id="max-input"
                type="number"
                name="max"
                min="1" 
                max="300"
                
                
            />
            </StyledLabel>
            <StyledButton>Make Class</StyledButton>
            </StyledFormField>
        </StyledForm>
    )
}

export default MakeAClass

const StyledTitle = styled.h1`
  text-align: center;
  font-weight: 700;
`;

const StyledForm = styled.form`
  margin: 0 auto;
  margin-top: 10%; /* Temporary for now. Should remove once header component is added */
  width: 80%;
  border: 1px solid  hsl(0, 0%, 82%);
  border-radius: 4px;
  box-shadow: 0 30px 60px -30px hsla(0, 0%, 0%, 0.5);
  padding: 2%;
  background-color: hsl(0, 0%, 100%);
  margin-bottom: 2%;
  @media (min-width: 1150px) {
    width: 25%;
    font-weight: 700;
  }
`;
const StyledFormField = styled.div`
  display: flex;
  flex-flow: column wrap;
  
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
const StyledInputs = styled.input`
  width: 100%;
  height: 3em;
  border: 0.1em solid hsl(0, 0%, 87%);
  border-radius: 4px;
  text-indent: 0.5em;
  margin-top: 2%;
  margin-bottom: 2%;
`;
const StyledLabel = styled.label`
  width: 100%;
  font-weight: 700;
`;