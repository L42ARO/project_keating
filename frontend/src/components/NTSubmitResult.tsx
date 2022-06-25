import React from 'react';
import { IonCard, IonCardContent, IonCol, IonRow, IonText } from '@ionic/react'

const NTSubmitResult: React.FC = () =>{
    return (
        <IonRow>
            <IonCol>
              <IonCard>
                <IonCardContent>
                  <IonText color="warning">
                    <h2>Submitted awaiting response...</h2>
                  </IonText>
                </IonCardContent>
              </IonCard>
            </IonCol>
          </IonRow>
    );
}; 

export default NTSubmitResult;