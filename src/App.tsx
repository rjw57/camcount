import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import {
  Box,
  Grid,
  LinearProgress,
  Typography,
} from '@material-ui/core';

import usePeople from './usePeople';
import CountCard from './CountCard';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100%',
  },
}));

const App = () => {
  const classes = useStyles();
  const {people, isLoading} = usePeople();
  const generatedAt = people && new Date(people.generatedAt);
  return (
    <div className={classes.root}>
      { isLoading && <LinearProgress /> }
      {
        generatedAt && <Box p={2} pb={0}>
          <Typography variant="body1" component="div">
            As of {generatedAt.toLocaleString()}, the University of Cambridge
            Information Services knows about&hellip;
          </Typography>
        </Box>
      }
      <Box p={2}>
        <Grid container spacing={2}>
        {
          people && people.counts.map(({count, title, description}, idx) => (
            <Grid key={idx} item xs={12} sm={6} lg={4} xl={3}>
              <Box pb={2}>
                <CountCard
                  count={count} title={title} description={description}
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
