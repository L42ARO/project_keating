import React, { useRef, useState } from "react";
import {
  IonAlert,
  IonApp,
  IonCol,
  IonContent,
  IonDatetime,
  IonGrid,
  IonHeader,
  IonInput,
  IonItem,
  IonLabel,
  IonRow,
  IonTitle,
  IonToolbar,
  setupIonicReact,
} from "@ionic/react";
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

/* Theme variables */
import "./theme/variables.css";
/* Components */
import NeotaskControls from "./components/NeotaskControls";
import NTSubmitResult from "./components/NTSubmitResult";

setupIonicReact();

const App: React.FC = () => {
  const [submitted, setSubmitted] = useState<boolean>(false);
  const nTNameRef = useRef<HTMLIonInputElement>(null);
  const nTDeadlineRef = useRef<HTMLIonInputElement>(null);
  const [hideDate, setHideDate] = useState<boolean>(true);
  const [error, setError]=useState<string>();
  const submit = () => {
    const inNTName = nTNameRef.current!.value;
    const inNTDeadline = nTDeadlineRef.current!.value;
    if (!inNTName || !inNTName) {
      setError("Please don't submit empty input fields")
      return;
    }
    setSubmitted(true);
    console.log(
      "Sending JSON to server: {" + inNTName + "," + inNTDeadline + "}"
    );
    clearInput();
  };
  const clearInput = () => {
    nTNameRef.current!.value = "";
    nTDeadlineRef.current!.value = "";
  };
  const resetInput = () => {
    setSubmitted(false);
    clearInput();
  };
  const clearError = ()=>{
    setError('')
  }
  return (
    <React.Fragment>
      <IonAlert 
        isOpen={!!error}
        message={error}
        buttons={[{text:"Ok I get it", handler: clearError}]}
        />
      <IonApp>
        <IonHeader>
          <IonToolbar color="primary">
            <IonTitle>Karpiem</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent className="ion-padding">
          <IonGrid>
            <IonRow>
              <IonCol>
                <IonItem>
                  <IonLabel position="floating">Task Name</IonLabel>
                  <IonInput ref={nTNameRef}></IonInput>
                </IonItem>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol>
                <IonItem>
                  <IonLabel position="stacked">Deadline</IonLabel>
                  <IonInput
                    type="datetime-local"
                    ref={nTDeadlineRef}
                  ></IonInput>
                </IonItem>
              </IonCol>
            </IonRow>
            <NeotaskControls onSubmit={submit} onReset={resetInput} />
            {submitted ? <NTSubmitResult /> : null}
          </IonGrid>
        </IonContent>
      </IonApp>
    </React.Fragment>
  );
};

export default App;
