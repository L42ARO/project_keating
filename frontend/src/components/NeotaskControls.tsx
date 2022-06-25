import React from 'react'
import {IonRow, IonCol, IonButton, IonIcon} from '@ionic/react'
import {addOutline, closeOutline} from 'ionicons/icons'

const NeotaskControls: React.FC<{onSubmit: ()=>void; onReset: ()=>void;}> = props =>(
<IonRow>
  <IonCol className="ion-text-center">
    <IonButton onClick={props.onSubmit}>
      <IonIcon slot="start" icon={addOutline} />
      Submit
    </IonButton>
  </IonCol>
  <IonCol className="ion-text-center">
    <IonButton onClick={props.onReset}>
      <IonIcon slot="start" icon={closeOutline} />
      Cancel
    </IonButton>
  </IonCol>
</IonRow>
);

export default NeotaskControls;
