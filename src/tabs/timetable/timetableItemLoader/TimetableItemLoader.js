import React from 'react';
import {Grid, Skeleton} from "@mui/material";

const TimetableItemLoader = () => {
  return (
    <Grid container width={'100%'} display={'flex'}>
      <Grid item width={'64px'}>
        <Skeleton variant={'rounded'} height={'63px'} width={'100%'}/>
      </Grid>
      <Grid item flex={1} pl={1}>
        <Skeleton variant={'rounded'} height={'63px'} width={'100%'}/>
      </Grid>
    </Grid>
  );
};

export default TimetableItemLoader;
