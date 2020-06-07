import * as React from 'react';

import { createStyles, Theme, withStyles, WithStyles } from '@material-ui/core/styles';
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from '@material-ui/core';

const styles = (theme: Theme) => createStyles({
  root: {
  },

  count: {
    padding: `${theme.spacing(2)}px`,
    color: theme.palette.primary.contrastText,
    backgroundColor: theme.palette.primary.main,
  },
});

export interface Props extends WithStyles<typeof styles> {
  count: number;
  title: React.ReactNode;
  description?: React.ReactNode;
  query?: string;
}

// https://www.lookup.cam.ac.uk/search?type=person&query=person%3A+misAffiliation%3D%27staff%27&_action_search=Search&personOrder=&instOrder=&groupOrder=&personMax=&instMax=&groupMax=&_approx=&_cancelled=&options=&p_type=&p_misAffiliation=p_all

export default withStyles(styles)((props: Props) => {
  const {count, title, description, query, classes} = props;
  const lookupUrl = new URL('https://www.lookup.cam.ac.uk/search?type=person');
  if(query) {
    lookupUrl.searchParams.append('query', query);
  }

  return (
    <Card classes={{root: classes.root}} variant="outlined">
      <CardMedia>
        <Typography classes={{ root: classes.count }} variant="h3" component="div">
          { count.toLocaleString() }
        </Typography>
      </CardMedia>
      <CardContent>
        <Typography variant="body1" component="div" gutterBottom={!!description}>{ title }</Typography>
        { description && <Typography variant="body2" color="textSecondary" component="div">{ description }</Typography> }
      </CardContent>
      {
        query &&
        <CardActions>
          <Button color="primary" component="a" target="_blank" href={lookupUrl.toString()}>
            Find them on Lookup
          </Button>
        </CardActions>
      }
    </Card>
  );
});
