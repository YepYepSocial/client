import React, {useCallback, useContext, useEffect, useMemo, useState} from 'react';
import {IonContent, IonPage} from "@ionic/react";
import Grid2 from "@mui/material/Unstable_Grid2";
import Select from "../../components/select/Select";
import Options from "../../components/options/Options";
import TimetableItem from "./timetableItem/TimetableItem";
import Header from "../../components/header/Header";
import {AppContext} from "../../AppContext";
import {weekdays} from "../../helpers/weekdays";
import {getWeekTimetable} from "../../api/getWeekTimetable";
import {Typography} from "@mui/material";
import TimetableItemLoader from "./timetableItemLoader/TimetableItemLoader";

const Timetable = () => {
  const { weekday, setWeekday, grades, timetable, setTimetable, currentGrade, setCurrentGrade } = useContext(AppContext);
  const [isTimetableLoading, setIsTimetableLoading] = useState(false);

  const weekdayOptions = useMemo(() => {
    return weekdays.map((weekday, value) => ({ label: weekday, value }))
  }, [])

  const onOptionClick = useCallback((value) => {
    setWeekday({ value, label: weekdays[value]})
  }, [setWeekday])

  const gradesOptions = useMemo(() => {
    return [...grades.map((grade) => ({
      value: grade.id,
      label: grade.gradeName
    }))]
  }, [grades])

  useEffect(() => {
    localStorage.setItem('currentGrade', JSON.stringify(currentGrade))

    if (currentGrade.value !== undefined) {
      setIsTimetableLoading(true)

      getWeekTimetable(currentGrade.value)
        .then((timetable) => {
          setTimetable(timetable)
        })
        .finally(() => {
          setIsTimetableLoading(false)
        })
    }
  }, [currentGrade])

  return (
    <IonPage>
      <Header />
      <IonContent>
        <Grid2 container p={2}>
          <Grid2 item width={'100%'}>
            <Select options={gradesOptions} targetOptionLabel={currentGrade.label} setOption={setCurrentGrade} />
          </Grid2>
          <Grid2 item pt={1} pb={2} width={'100%'}>
            <Options options={weekdayOptions} value={weekday.value} onOptionClick={onOptionClick}/>
          </Grid2>
          {isTimetableLoading ? (
            <>
              {Array.from({length: 7}).map((_, index) => (
                <Grid2 key={index} pb={1} width={'100%'}>
                  <TimetableItemLoader />
                </Grid2>
              ))}
            </>
          ) : currentGrade?.value === undefined ? (
            <Typography fontWeight={'bold'} p={2} textAlign={'center'} ml={'auto'} mr={'auto'}>
              Выберите свой класс
            </Typography>
          ) : !!timetable[weekday.value]?.length ? (
             <>
               {timetable[weekday.value]?.map((timetableItem, index) => (
                 <Grid2 item pb={1} width={'100%'} key={index}>
                   <TimetableItem subject={timetableItem.subject} classRoom={timetableItem.classRoom}/>
                 </Grid2>
               ))}
             </>
          ) : (
            <Typography fontWeight={'bold'} p={2} textAlign={'center'} ml={'auto'} mr={'auto'}>
              Расписание на текущий день не выложено
            </Typography>
          )}
        </Grid2>
      </IonContent>
    </IonPage>

  );
};

export default Timetable;
