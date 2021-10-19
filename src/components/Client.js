import { Grid } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import styled from 'styled-components';

export default function Client() {
  const handleClassRemove = (evt) => {
    evt.preventDefault();
    //   Remove class function which will remove the class
  };

  const handleClassAdd = (evt) => {
    evt.preventDefault();
    //   Add class function which will add class
  };
  return (
    <div>
      <div>
        <StyledHeadline>
          Welcome Jane Doe, check out your current class!
        </StyledHeadline>
      </div>
      <StyledContainer>
        <Grid container>
          <Grid item>
            <Typography variant='h2'>Cycling</Typography>
            <Typography variant='h3'>Instructor: Jane Doe</Typography>
            <Typography variant='h5'>lorem ipsum dolor set</Typography>
          </Grid>
        </Grid>
        <Grid item>
          <Button variant='contained' onClick={handleClassAdd}>
            Add Class
          </Button>
          <Button variant='contained' onClick={handleClassRemove}>
            Remove Class
          </Button>
        </Grid>
      </StyledContainer>
    </div>
  );
}

const StyledHeadline = styled.h1`
  text-align: center;
`;

const StyledContainer = styled.div`
  border: 1px solid black;
  padding: 2%;
  width: 60%;
  margin: 0 auto;
`;
