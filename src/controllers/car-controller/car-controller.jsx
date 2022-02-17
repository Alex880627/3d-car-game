import { Car } from "../../components/car/car";
import { useEffect, useState, } from 'react';
import { fromEvent } from 'rxjs';
import { useFrame } from "react-three-fiber";

const handleEvent = (keyCode, rotation) => {
  console.log(keyCode);
  if (keyCode === 37) {
    return rotation - 5
  } else if (keyCode === 39) {
    return rotation + 5
  } else {
    return rotation;
  }
}

export const CarController = () => {
  const [rotation, setRotation] = useState(0);
  const [coordinates, setCoordinates] = useState({ x: 0, y: 0, speed: 0.05 });

  useEffect(() => {
    const keyDownSubscription = fromEvent(document, 'keydown',).subscribe(event => {
      setRotation(handleEvent(event.keyCode, rotation))
    });
    return () => keyDownSubscription.unsubscribe()
  }, [rotation])


  const sinus = Math.sin(rotation * (Math.PI / 180)) * coordinates.speed;
  const cosinus = Math.cos(rotation * (Math.PI / 180)) * coordinates.speed;

  useFrame(() => {
    setCoordinates({ x: coordinates.x + sinus, y: coordinates.y + cosinus, speed: coordinates.speed });
  });

  const position = [coordinates.x, coordinates.y, 0.5];
  return (<Car position={position} rotation={[0, 0, (Math.PI / 180) * -rotation]} />)
}