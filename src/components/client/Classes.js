import styled from 'styled-components';
import Header from '../DashboardHeader';
import Sidebar from './Sidebar';

export default function Classes() {
  const handleClassRemove = (evt) => {
    evt.preventDefault();
    //   Remove class function which will remove the class
  };

  const handleClassAdd = (evt) => {
    evt.preventDefault();
    //   Add class function which will add class
  };
  return (
    <div className='App'>
      <Header />
      <Sidebar />
      <StyledContainer>
        <StyledCardContainer>
          <StyledHeadline>Current Classes</StyledHeadline>
          <StyledCards>
            <StyledClassTitle>Cycling</StyledClassTitle>
            <StyledInstructor>Instructor: Jane Doe</StyledInstructor>
            <StyledDate>Date: October 19, 2021</StyledDate>
            <StyledClassDescription>
              Class description goes here
            </StyledClassDescription>
            <StyledButton onClick={handleClassRemove}>
              Remove Class
            </StyledButton>
          </StyledCards>
        </StyledCardContainer>

        <StyledCardContainer>
          <StyledHeadline>Available Classes</StyledHeadline>
          <div
            style={{
              display: 'flex',
              justifyContent: 'flex-start',
              alignItems: 'center',
              margin: '2%',
            }}>
            <label
              style={{
                fontWeight: '700',
              }}>
              Filter By Time:
              <select
                style={{
                  width: '100%',
                  height: '3em',
                  border: '0.1em solid hsl(0, 0%, 87%)',
                  borderRadius: '4px',
                  textIndent: '0.5em',
                  marginTop: '2%',
                  marginBottom: '2%',
                }}>
                <option>{/* CLASS TIMES */}</option>
                <option>{/* CLASS TIMES */}</option>
                <option>{/* CLASS TIMES */}</option>
                <option>{/* CLASS TIMES */}</option>
                <option>{/* CLASS TIMES */}</option>
                <option>{/* CLASS TIMES */}</option>
              </select>
            </label>
            <label
              style={{
                fontWeight: '700',
              }}>
              Filter By Date:
              <select
                style={{
                  width: '100%',
                  height: '3em',
                  border: '0.1em solid hsl(0, 0%, 87%)',
                  borderRadius: '4px',
                  textIndent: '0.5em',
                  marginTop: '2%',
                  marginBottom: '2%',
                }}>
                <option>{/* Dates */}</option>
                <option>{/* Dates */}</option>
                <option>{/* Dates */}</option>
                <option>{/* Dates */}</option>
                <option>{/* Dates */}</option>
                <option>{/* Dates */}</option>
              </select>
            </label>
            <label
              style={{
                fontWeight: '700',
              }}>
              Filter By Duration:
              <select
                style={{
                  width: '100%',
                  height: '3em',
                  border: '0.1em solid hsl(0, 0%, 87%)',
                  borderRadius: '4px',
                  textIndent: '0.5em',
                  marginTop: '2%',
                  marginBottom: '2%',
                }}>
                <option>{/* Duration */}</option>
                <option>{/* Duration */}</option>
                <option>{/* Duration */}</option>
                <option>{/* Duration */}</option>
                <option>{/* Duration */}</option>
                <option>{/* Duration */}</option>
              </select>
            </label>
            <label
              style={{
                fontWeight: '700',
              }}>
              Filter By Type:
              <select
                style={{
                  width: '100%',
                  height: '3em',
                  border: '0.1em solid hsl(0, 0%, 87%)',
                  borderRadius: '4px',
                  textIndent: '0.5em',
                  marginTop: '2%',
                  marginBottom: '2%',
                }}>
                <option>{/* Type */}</option>
                <option>{/* Type */}</option>
                <option>{/* Type */}</option>
                <option>{/* Type */}</option>
                <option>{/* Type */}</option>
                <option>{/* Type */}</option>
              </select>
            </label>
            <label
              style={{
                fontWeight: '700',
              }}>
              Filter By Intensity:
              <select
                style={{
                  width: '100%',
                  height: '3em',
                  border: '0.1em solid hsl(0, 0%, 87%)',
                  borderRadius: '4px',
                  textIndent: '0.5em',
                  marginTop: '2%',
                  marginBottom: '2%',
                }}>
                <option>{/* Intensity */}</option>
                <option>{/* Intensity */}</option>
                <option>{/* Intensity */}</option>
                <option>{/* Intensity */}</option>
                <option>{/* Intensity */}</option>
                <option>{/* Intensity */}</option>
              </select>
            </label>
            <label
              style={{
                fontWeight: '700',
              }}>
              Filter By Location:
              <select
                style={{
                  width: '100%',
                  height: '3em',
                  border: '0.1em solid hsl(0, 0%, 87%)',
                  borderRadius: '4px',
                  textIndent: '0.5em',
                  marginTop: '2%',
                  marginBottom: '2%',
                }}>
                <option>{/* Location */}</option>
                <option>{/* Location */}</option>
                <option>{/* Location */}</option>
                <option>{/* Location */}</option>
                <option>{/* Location */}</option>
                <option>{/* Location */}</option>
              </select>
            </label>
          </div>
          <StyledCards>
            <StyledClassTitle>Cycling</StyledClassTitle>
            <StyledInstructor>Instructor: Jane Doe</StyledInstructor>
            <StyledDate>Date: October 19, 2021</StyledDate>
            <StyledClassDescription>
              Class description goes here
            </StyledClassDescription>
            <StyledButton onClick={handleClassAdd}>Add Class</StyledButton>
          </StyledCards>
        </StyledCardContainer>
      </StyledContainer>
    </div>
  );
}

const StyledButton = styled.button`
  color: rgba(0, 0, 0, 0.87);
  box-shadow: 0px 3px 1px -2px rgb(0 0 0 / 20%),
    0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%);
  background-color: #e0e0e0;
  outline: none;
  border: none;
  padding: 2%;
  cursor: pointer;
  text-transform: uppercase;
`;

const StyledClassDescription = styled.p`
  font-size: 1.2rem;
  font-weight: 400;
  margin: 0;
  margin-bottom: 2%;
  line-height: 1.1;
  letter-spacing: 0.1rem;
`;

const StyledDate = styled.h4`
  font-size: 1.5rem;
  font-weight: 500;
  margin: 0;
  margin-bottom: 0.5%;
`;

const StyledInstructor = styled.h3`
  font-size: 2rem;
  font-weight: 500;
  margin: 0;
  margin-bottom: 0.5%;
`;

const StyledClassTitle = styled.h2`
  font-size: 3rem;
  font-weight: 500;
  margin: 0;
  margin-bottom: 0.5%;
  position: relative;
`;

const StyledHeadline = styled.h2`
  border-bottom: 1px solid #ccc;
  text-align: center;
  margin-top: 0;
  padding-bottom: 2%;
`;

const StyledCardContainer = styled.div`
  margin: 0 auto;
  width: 100%;
  border: 1px solid hsl(0, 0%, 82%);
  border-radius: 4px;
  box-shadow: 0 30px 60px -30px hsla(0, 0%, 0%, 0.5);
  padding: 2%;
  background-color: hsl(0, 0%, 100%);
  margin-bottom: 2%;
  @media (min-width: 769px) {
    width: 45%;
  }
`;

const StyledCards = styled.div`
  border: 1px solid #ddd;
  padding: 2%;
  margin: 0 auto;
`;

const StyledContainer = styled.div`
  display: flex;

  flex-flow: column wrap;

  border-radius: 10px;
  padding: 2%;
  margin: 0 auto;
  margin-bottom: 1%;
  @media (min-width: 769px) {
    flex-flow: row wrap;
    margin-left: calc(15.625rem - 1%);
  }
`;
