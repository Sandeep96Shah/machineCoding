import  TrafficLightCom from "./TrafficLight";
import './trafficLight.css';

const TrafficLight = () => {
  const config = {
    red: {
      duration: 4000,
      next: "green",
      backgroundColor: "red",
    },
    yellow: {
      duration: 500,
      next: "red",
      backgroundColor: "yellow",
    },
    green: {
      duration: 3000,
      next: "yellow",
      backgroundColor: "green",
    },
  };
  return (
    <div className="traffic-container">
      <TrafficLightCom config={config} isVertical />
      <TrafficLightCom config={config} />
    </div>
  );
}

export default TrafficLight;
