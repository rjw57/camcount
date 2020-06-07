import * as React from 'react';

import { createStyles, Theme, withStyles, WithStyles } from '@material-ui/core/styles';
import {
  Typography
} from '@material-ui/core';

const styles = (theme: Theme) => createStyles({
  root: {
  },

  count: {
    color: theme.palette.primary.main,
  },
});

export interface Props extends WithStyles<typeof styles> {
  count: number;
  title: React.ReactNode;
  description?: React.ReactNode;
}

export default withStyles(styles)((props: Props) => {
  const {count, title, description, classes} = props;
  return (
    <div className={classes.root}>
      <Typography classes={{ root: classes.count }} variant="h3" component="div">
        { count.toLocaleString() }
      </Typography>
      <Typography variant="body1" component="div" gutterBottom={!!description}>{ title }</Typography>
      { description && <Typography variant="body2" color="textSecondary" component="div">{ description }</Typography> }
    </div>
  );
});
