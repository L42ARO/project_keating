import React, { useRef, useState } from "react";
import {
  IonAlert,
  IonApp,
  IonCol,
  IonContent,
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

/* Theme variables */
import "../theme/variables.css";
/* Components */
import NeotaskControls from "../components/NeotaskControls";
import NTSubmitResult from "../components/NTSubmitResult";

setupIonicReact();

const CreateNT: React.FC = () => {
  const [submitted, setSubmitted] = useState<boolean>(false);
  const nTNameRef = useRef<HTMLIonInputElement>(null);
  const nTDeadlineRef = useRef<HTMLIonInputElement>(null);
  const [hideDate, setHideDate] = useState<boolean>(true);
  const [error, setError] = useState<string>();
  const submit = () => {
    const inNTName = nTNameRef.current!.value;
    const inNTDeadline = nTDeadlineRef.current!.value;
    if (!inNTName || !inNTName) {
      setError("Please don't submit empty input fields");
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
  const clearError = () => {
    setError("");
  };
  return (
    <React.Fragment>
      <IonAlert
        isOpen={!!error}
        message={error}
        buttons={[{ text: "Ok I get it", handler: clearError }]}
      />
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
              <IonLabel position="floating">Deadline</IonLabel>
              <IonInput
                placeholder=""
                type="datetime-local"
                ref={nTDeadlineRef}
              ></IonInput>
            </IonItem>
          </IonCol>
        </IonRow>
        <NeotaskControls onSubmit={submit} onReset={resetInput} />
        {submitted ? <NTSubmitResult /> : null}
      </IonGrid>
    </React.Fragment>
  );
};

export default CreateNT;
