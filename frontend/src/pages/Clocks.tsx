import { IonCol, IonGrid, IonRow } from "@ionic/react";
import React from "react";
import "../theme/tailwind.css";

const Clocks: React.FC = () => {
  return (
        <IonGrid className="p-0">
          <IonRow justify-content="center">
            <NTClock color="text-indigo-500" percentage={45} name ="POS2041 Discussion"/>
            <NTClock color="text-green-500" percentage={30} name="Read Chapter 3 EGN 4450"/>
            <NTClock color="text-blue-500" percentage={10} />
            <NTClock color="text-red-500" percentage={20} />
            <NTClock color="text-red-500" percentage={0} />
            <NTClock color="text-red-500" percentage={25} />
            <NTClock color="text-red-500" percentage={40} />
          </IonRow>
        </IonGrid>
  );
};
interface CircleProps {
  color: string;
  percentage: number;
  name?: string;
}
function NTClock({ color, percentage, name="Neotask Name xd XD XD XD XD XD XD XD" }: CircleProps) {
  return (
    <IonCol className="xs-a:h-[135px] sm-a:h-[160px] xs-a:w-[135px] sm-a:w-[160px] flex justify-center items-center py-7 px-5 group">
      <div className="flex h-auto w-auto sm-a:scale-90 xs-a:scale-75">
        <svg width="200" height="200">
          <g transform="rotate(-90, 100, 100)">
            <circle
              r="70"
              cx="100"
              cy="100"
              fill="transparent"
              stroke="currentColor"
              strokeWidth="1rem"
              strokeDasharray="439.8"
              strokeDashoffset="0"
              className="text-gray-400"
            ></circle>
            <circle
              r="70"
              cx="100"
              cy="100"
              fill="transparent"
              stroke="currentColor"
              strokeWidth="1rem"
              strokeDasharray="439.8"
              strokeDashoffset={440-((percentage/60)*(440-60))}
              className={`${color} blur-sm`}
            ></circle>

          </g>
        </svg>
      </div>
      <div className="absolute scale-0 group-active:scale-100">
        <div className="flex h-auto w-auto sm-a:scale-90 xs-a:scale-75">
          <svg width="200" height="200">
            <g transform="rotate(-90, 100, 100)">
              <circle
                r="70"
                cx="100"
                cy="100"
                fill="transparent"
                stroke="currentColor"
                strokeWidth="1rem"
                strokeDasharray="439.8"
                strokeDashoffset="0"
                className="text-green-500 blur-md"
              ></circle>
            </g>
          </svg>
        </div>
      </div>
      <div className="absolute flex flex-col justify-center items-center">
        <div className="relative flex w-fit max-w-[100px] h-fit justify-center items-center">
          <span className="z-10 sm-a:text-[10px] text-[13px] w-3/4 text-center line-clamp-2"> {name} </span>
          {/* <div className="z-0 absolute bg-gray-800 rounded-md opacity-70 w-full h-full"></div> */}
        </div>
        <span className={`font-mono sm-a:text-[24px] text-[28px] ${color} mt-[-0.3rem]`}>
          {percentage.toString()+":00"}
        </span>
        
      </div>
    </IonCol>
  );
}

export default Clocks;
