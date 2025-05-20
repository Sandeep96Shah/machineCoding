import { useState, useEffect } from "react";
import './trafficLight.css';

const Light = ({ backgroundColor }) => (
  <div className="traffic-light" style={{ backgroundColor }}></div>
);

export default function TrafficLight({
  config = {},
  isVertical,
  defaultColor = "green",
}) {
  const [light, setLight] = useState(defaultColor);

  useEffect(() => {
    const { next, duration } = config[light];
    const timer = setTimeout(() => {
      setLight(next);
    }, duration);

    return () => {
      clearTimeout(timer);
    };
  }, [light]);

  return (
    <div
      aria-live="polite"
      aria-label={`Current Signal: ${light}`}
      className={[
        "trafic-light-container",
        isVertical ? "traffic-light-vertical-container" : "",
      ]
        .filter((cls) => !!cls)
        .join(" ")}
    >
      {Object.keys(config).map((color) => (
        <Light
          key={color}
          backgroundColor={
            color === light ? config[color].backgroundColor : undefined
          }
        />
      ))}
    </div>
  );

  // const getInterval = () =>
  //   light === "green" ? 3000 : light === "yellow" ? 500 : 4000;

  // useEffect(() => {
  //   const intervalId = setInterval(() => {
  //     setLight((prevLight) =>
  //       prevLight === "green"
  //         ? "yellow"
  //         : prevLight === "yellow"
  //           ? "red"
  //           : "green",
  //     );
  //   }, getInterval());
  //   return () => {
  //     clearInterval(intervalId);
  //   };
  // }, [light]);

  // console.log(light);
  // return (
  //   <div className="trafic-light-container">
  //     <div className="trafic-light-vertical-container">
  //       <div className={`light-box ${light === "red" ? "red" : ""}`}></div>
  //       <div
  //         className={`light-box ${light === "yellow" ? "yellow" : ""}`}
  //       ></div>
  //       <div className={`light-box ${light === "green" ? "green" : ""}`}></div>
  //     </div>

  //     <div className="trafic-light-horizontal-container">
  //       <div className={`light-box ${light === "red" ? "red" : ""}`}></div>
  //       <div
  //         className={`light-box ${light === "yellow" ? "yellow" : ""}`}
  //       ></div>
  //       <div className={`light-box ${light === "green" ? "green" : ""}`}></div>
  //     </div>
  //   </div>
  // );
}
