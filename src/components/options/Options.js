import React from 'react';
import styles from './Options.module.css';
import classNames from "classnames";
import {Typography} from "@mui/material";

const Options = ({ options, onOptionClick, value }) => {

  return (
    <section className={styles.main}>
      {options?.map((option, index) => (
        <div key={option.label} onClick={() => onOptionClick(option.value)} className={classNames(styles.option, {[styles.target]: option.value === value })}>
          <Typography fontWeight={'bold'} color={classNames({'#666666': index !== value, 'white': index === value })}>
            { option?.label }
          </Typography>
        </div>
      ))}
    </section>
  );
};

export default Options;
