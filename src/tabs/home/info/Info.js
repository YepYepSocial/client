import React from 'react';
import styles from './Info.module.css';
import {Typography} from "@mui/material";

const Info = () => {
  return (
    <div className={styles.main}>
      <Typography p={2}>
        <strong>
          YepYep
        </strong>
        - это сайт для удобного просмотра расписания в МАОУ СОШ №76,
        который вы можете установить и использовать, как приложение
      </Typography>
    </div>
  );
};

export default Info;
