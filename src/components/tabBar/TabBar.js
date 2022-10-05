import React from 'react';
import {IonTabBar, IonTabButton, IonIcon, IonTabs, IonRouterOutlet} from '@ionic/react';
import { calendar, home } from 'ionicons/icons';
import styles from './TabBar.module.css';
import {tabs} from "../tabs";
import {Route} from "react-router-dom";
import Timetable from "../../tabs/timetable/Timetable";

const TabBar = () => {
  return (
    <IonTabs>
      <IonRouterOutlet>
        <Route path={'/timetable'} component={Timetable} exact />
      </IonRouterOutlet>

      <IonTabBar slot="bottom" className={styles.tabs}>
        <IonTabButton tab={tabs.timetable}>
          <IonIcon icon={calendar} />
        </IonTabButton>
        <IonTabButton tab={tabs.home} >
          <IonIcon icon={home} />
        </IonTabButton>
      </IonTabBar>
    </IonTabs>
  );
};

export default TabBar;
