import { IonApp, IonContent, IonHeader, setupIonicReact } from "@ionic/react";
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
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./components/Routes";
import TopBar from "./components/TopBar";
import "./theme/tailwind.css";
import "./theme/variables.css";
/* Components */

setupIonicReact();

const App: React.FC = () => {
  return (
    <IonApp>
      <div className="h-full w-full">
        <Router>
          <IonHeader mode="ios">
          <TopBar />
          </IonHeader>
          <IonContent>
            <div className="pt-3 px-1 pb-0 h-full w-full">
              <Routes />
            </div>
          </IonContent>
        </Router>
      </div>
    </IonApp>
  );
};

export default App;
