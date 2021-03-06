import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import {
  Box,
  Grid,
  Typography,
} from '@material-ui/core';
import Moment from 'react-moment';

import usePeople from './usePeople';
import CountCard from './CountCard';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100%',
  },
}));

const App = () => {
  const classes = useStyles();
  const {people, isLoading, error} = usePeople();
  const generatedAt = people && new Date(people.generatedAt);
  return (
    <div className={classes.root}>
      <Box p={2}>
        <Typography variant="h4" component="h1" gutterBottom>
          People in the University of Cambridge
        </Typography>
        {
          isLoading &&
          <Typography variant="body1" component="div">
            Content is loading&hellip;
          </Typography>
        }
        {
          error &&
          <Typography variant="body1" component="div">
            There was an error loading the content.
          </Typography>
        }
        {
          generatedAt &&
          <Typography variant="body1" component="div">
            As of <Moment format="dddd, Do MMMM YYYY">{generatedAt}</Moment>,
            the University of Cambridge Information Services had active
            accounts for the following people.
          </Typography>
        }
      </Box>
      <Box p={2}>
        <Grid container spacing={2}>
        {
          people && people.counts.map(({count, title, description, query}, idx) => (
            <Grid key={idx} item xs={12} sm={6} lg={4} xl={3}>
              <Box pb={2}>
                <CountCard
                  count={count} title={title} description={description}
                  query={query}
                />
              </Box>
            </Grid>
          ))
        }
        </Grid>
      </Box>
    </div>
  );
};

export default App;
