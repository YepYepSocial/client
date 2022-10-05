import React from 'react';
import styles from './Logo.module.css';
import {Typography} from "@mui/material";

const Logo = () => {
  return (
    <div className={styles.main}>
      <Typography fontWeight={'bold'} fontSize={'62px'}>
        YepYep
      </Typography>
    </div>
  );
};

export default Logo;
