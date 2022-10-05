/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";
import {IonIcon, IonRouterOutlet, IonTabBar, IonTabButton, IonTabs, setupIonicReact} from '@ionic/react';
import {IonApp} from "@ionic/react";
import React, {useEffect, useState} from "react";
import {createTheme, ThemeProvider} from "@mui/material";
import {IonReactRouter} from "@ionic/react-router";
import {Route, Redirect} from "react-router-dom";
import Timetable from "./tabs/timetable/Timetable";
import {tabs} from "./components/tabs";
import {calendar, home} from "ionicons/icons";
import Home from "./tabs/home/Home";
import {AppContext} from "./AppContext";
import {getGrades} from "./api/getGrades";
import { weekdays } from "./helpers/weekdays";

setupIonicReact({
  mode: 'ios',
  animated: true,
  rippleEffect: true,
});

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function App() {
  const [weekday, setWeekday] = useState({ label: weekdays[new Date().getDay() - 1], value: new Date().getDay() - 1 });
  const [grades, setGrades] = useState([]);
  const [timetable, setTimetable] = useState([]);
  const [currentGrade, setCurrentGrade] = useState(
    localStorage.getItem('currentGrade') !== null ? JSON.parse(localStorage.getItem('currentGrade')) : {});

  useEffect(() => {
    getGrades()
      .then((grades) => {
        setGrades(grades)
      })
  }, [])

  return (
    <AppContext.Provider value={{ weekday, setWeekday, grades, setGrades, timetable, currentGrade, setCurrentGrade, setTimetable}}>
      <ThemeProvider theme={darkTheme}>
        <IonApp>
          <IonReactRouter>
            <IonTabs>
              <IonRouterOutlet>
                <Route path={'/timetable'} component={Timetable} exact/>
                <Route path={'/home'} component={Home} exact />
                <Redirect to={'/timetable'}/>
              </IonRouterOutlet>
              <IonTabBar slot="bottom" style={{ paddingBottom: '22px' }}>
                <IonTabButton tab={tabs.timetable} href={'/timetable'}>
                  <IonIcon icon={calendar} />
                </IonTabButton>
                <IonTabButton tab={tabs.home} href={'/home'}>
                  <IonIcon icon={home} />
                </IonTabButton>
              </IonTabBar>
            </IonTabs>
          </IonReactRouter>
        </IonApp>
      </ThemeProvider>
    </AppContext.Provider>
  );
}

export default App;
