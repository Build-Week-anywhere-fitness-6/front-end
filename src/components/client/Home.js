import styled from 'styled-components';
import Header from '../DashboardHeader';
import Sidebar from './Sidebar';

export default function Home() {
  return (
    <div>
      <Header />
      <Sidebar />
      <StyledDashboardContent>
        <div>
          <StyledWelcomeText>Welcome, Jane Doe!</StyledWelcomeText>
          <StyledWelcomeText>Here are your 4 week schedules.</StyledWelcomeText>
        </div>
        <div>
          <StyledTable>
            <StyledRow>
              <th></th>
              <th>Week 1</th>
              <th>Week 2</th>
              <th>Week 3</th>
              <th>Week 4</th>
            </StyledRow>
            <tr>
              <StyledCol>Monday</StyledCol>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <StyledCol>Tuesday</StyledCol>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <StyledCol>Wednesday</StyledCol>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <StyledCol>Thursday</StyledCol>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <StyledCol>Friday</StyledCol>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <StyledCol>Saturday</StyledCol>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <StyledCol>Sunday</StyledCol>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          </StyledTable>
        </div>
      </StyledDashboardContent>
    </div>
  );
}

const StyledWelcomeText = styled.h1`
  text-align: center;
  font-size: 1.4rem;
  @media (min-width: 769px) {
    font-size: 2rem;
  }
`;

const StyledDashboardContent = styled.div`
  @media (min-width: 769px) {
    margin-left: calc(15.625rem - 6%);
  }
`;

const StyledCol = styled.td`
  background: black;
  color: white !important;
  text-transform: uppercase;
  font-size: 0.6em;
  text-align: center;
`;

const StyledRow = styled.tr`
  background: black;
  text-transform: uppercase;
  font-size: 0.6em;
  text-align: center;
`;

const StyledTable = styled.table`
  color: white;
  margin: 0 auto;
  width: 80%;
  height: 20vh;
  tr {
    &:nth-child(2n) {
      background: #eff0f1;
    }
    &:nth-child(2n + 3) {
      background: #fff;
    }
  }
  th,
  td {
    padding: 1rem;
    width: 10em;
  }
  td {
    color: black;
  }
  @media (min-width: 769px) {
    width: 80%;
    height: 60vh;
  }
`;
