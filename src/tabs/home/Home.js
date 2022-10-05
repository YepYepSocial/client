import React from 'react';
import {IonContent, IonPage} from "@ionic/react";
import Grid2 from "@mui/material/Unstable_Grid2";
import Header from "../../components/header/Header";
import Logo from "./logo/Logo";
import Info from "./info/Info";

const Home = () => {
  return (
    <IonPage>
      <Header />
      <IonContent>
        <Grid2 container p={2}>
          <Grid2 item pb={2} width={'100%'}>
            <Logo />
          </Grid2>
          <Grid2 item width={'100%'}>
            <Info />
          </Grid2>
        </Grid2>
      </IonContent>
    </IonPage>
  );
};

export default Home;
