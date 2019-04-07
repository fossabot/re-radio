import React from 'react';
import { Typography, Card } from '@material-ui/core';
import { useStyles } from './styles';
import ReactPlayer from 'react-player';

export const Player: React.FC<{}> = () => {
  const classes = useStyles();

  return (
    <Card className={classes.container}>
      <Typography variant="subtitle1">Player</Typography>

      <ReactPlayer url="https://www.youtube.com/watch?v=ysz5S6PUM-U" playing />
    </Card>
  );
};
