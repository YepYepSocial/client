import React, {useMemo} from 'react';
import styles from './TimetableItem.module.css';
import {Typography} from "@mui/material";

const TimetableItem = ({ subject, classRoom }) => {
  const subjectLabel = useMemo(() => {
    if (!subject) {
      return '-'
    }

    if (subject?.length > 30) {
      return `${subject.slice(0, 30)}...`
    } else {
      return subject
    }
  }, [subject])

  return (
    <section className={styles.main}>
      {/*<div className={styles.time}>*/}
      {/*  <Typography>*/}
      {/*    start*/}
      {/*  </Typography>*/}
      {/*  <Typography>*/}
      {/*    end*/}
      {/*  </Typography>*/}
      {/*</div>*/}
      <div className={styles.lesson}>
        <Typography fontWeight={'bold'} fontSize={'16px'}>
          {subjectLabel}
        </Typography>
        <Typography>
          Кабинет: {classRoom || '-'}
        </Typography>
      </div>
    </section>
  );
};

export default TimetableItem;
