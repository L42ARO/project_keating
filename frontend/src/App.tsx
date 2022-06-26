import { IonApp, IonContent, IonHeader, IonItem, IonTitle, IonToolbar, setupIonicReact } from "@ionic/react";
import React from "react";
/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/display.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/padding.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";

/* Theme variables */
import "./theme/variables.css";
/* Components */
import CreateNT from "./pages/CreateNT";
import Home from './pages/TailwindTest'
import Sidebar from "./pages/Sidebar";

setupIonicReact();

const App: React.FC = () => {
  return (
    <IonApp>
      <Sidebar />
      <IonHeader>
        {/* <IonToolbar color="primary">
          <IonTitle>Karpiem</IonTitle>
        </IonToolbar> */}
      </IonHeader>
      <IonContent className="ion-padding">
        <Sidebar />
        <CreateNT />
      </IonContent>
    </IonApp>
  );
};

export default App;
