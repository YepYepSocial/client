import React, {useCallback, useState} from 'react';
import styles from './Select.module.css';
import {Drawer, Grid, IconButton, Typography} from "@mui/material";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import {IonSpinner} from "@ionic/react";

const Select = ({ targetOptionLabel, options, setOption }) => {
  const [isOptionsOpen, setIsOptionsOpen] = useState();

  const toggleOptionsDrawer = useCallback(() => {
    setIsOptionsOpen(!isOptionsOpen);
  }, [isOptionsOpen])

  const onOptionClick = ({ label, value }) => {
    setOption({ label, value })
  }

  return (
    <div className={styles.main} onClick={toggleOptionsDrawer}>
      <Typography fontWeight={'bold'} flex={1} pl={2}>
        {targetOptionLabel}
      </Typography>
      <IconButton>
        <KeyboardArrowDownIcon />
      </IconButton>
      <Drawer anchor={'bottom'} PaperProps={{ sx: { borderRadius: '12px 11px 0 0', maxHeight: 'calc(100vh - )'} }} open={isOptionsOpen} onClose={toggleOptionsDrawer}>
        <section className={styles.optionsContainer}>
          {!!options?.length && <>
            {options?.map((option) => (
              <div key={option.value} className={styles.option} onClick={() => onOptionClick(option)}>
                {option.label}
              </div>
            ))}
          </>}
          {!options?.length && (
            <Grid item pt={5}>
              <IonSpinner />
            </Grid>
          )}
        </section>
      </Drawer>
    </div>
  );
};

export default Select;
