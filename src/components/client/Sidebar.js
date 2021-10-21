import { SidebarData } from './SidebarData';
import styled from 'styled-components';

export default function Sidebar() {
  return (
    <StyledSideBar>
      <StyledSideBarList>
        {SidebarData.map((val, key) => (
          <StyledRow
            key={key}
            onClick={() => {
              window.location.pathname = val.link;
            }}>
            {''}
            <div>{val.title}</div>
          </StyledRow>
        ))}
      </StyledSideBarList>
    </StyledSideBar>
  );
}

const StyledRow = styled.li`
  width: 100%;
  height: 50px;
  list-style-type: none;
  margin: 0%;
  display: flex;
  flex-direction: row;
  align-items: center;
  color: white;
  border-bottom: 1px solid rgba(255, 255, 255, 0.07);
  padding: 1rem 2rem;
  text-decoration: none;
  &:hover {
    cursor: pointer;
    background-color: #293846;
  }
`;

const StyledSideBarList = styled.ul`
  height: auto;
  padding: 0;
  width: 100%;
`;

const StyledSideBar = styled.div`
  height: 100%;
  width: 15.625rem;
  background-color: black;
  margin-top: 0;
  position: fixed;
  z-index: 1000;
  display: none;
  @media (min-width: 769px) {
    display: block;
  }
`;
