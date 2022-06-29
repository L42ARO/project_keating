import React from "react";
import { IonGrid, IonRow, IonCol, IonItem } from "@ionic/react";
import "../theme/tailwind.css";

const Clocks: React.FC = () => {
  return (
    <IonGrid className="p-0">
      <IonRow>
        <NTClock />
        <NTClock />
      </IonRow>
    </IonGrid>
  );
};

const NTClock: React.FC<{ Name?: string; Time?: string }> = ({
  Name = "Neotask",
  Time = "39:00:00",
}) => (
  <IonCol className="flex justify-center">
    <button type="button" className="nt-clock">
      <span className="text-lg">{Time}</span>
      <span className="text-sm">{Name}</span>
    </button>
  </IonCol>
);

export default Clocks;
