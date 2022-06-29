import { IonItem, IonList } from "@ionic/react";
import React, { useEffect, useState } from "react";

interface Neotask {
  id: string;
  deadline: string;
  duration: string;
  name: string;
  percent_complete: number;
  status: boolean;
  task_dep: boolean;
  time_done: string;
}

const Neotasks: React.FC = () => {
  let newNeotasks: Neotask[] = [];
  const [neotasks, setNeotasks] = useState<Neotask[]>()
  const [dataRec, setDataRec] = useState<boolean>(false);
  useEffect(() => {
    let isMounted = true;
    const url = "https://keating-backend.herokuapp.com/get-neotasks";
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        newNeotasks.length=0
        data.map((task: Neotask) => {
          newNeotasks.push(task);
        });
        setNeotasks(newNeotasks);
        setDataRec(true);
      });
    return () => {
      isMounted = false;
    };
  }, []);
  return (
    <IonList>
      {dataRec ? neotasks?.map(task=>{
        return <IonItem key={task.id}>{task.name}</IonItem>
      }) : (
        <IonItem>Loading...</IonItem>
      )}
    </IonList>
  );
};

export default Neotasks;
