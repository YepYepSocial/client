import React from 'react';
import {IonHeader, IonToolbar} from "@ionic/react";
import styles from './Header.module.css';
import {Typography} from "@mui/material";

const Header = () => {
  return (
    <IonHeader>
      <IonToolbar className={styles.header}>
        <Typography fontWeight={'bold'} textAlign={'center'} fontSize={'24px'}>YepYep</Typography>
      </IonToolbar>
    </IonHeader>
  );
};

export default Header;
