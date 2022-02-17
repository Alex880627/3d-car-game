
import { Wheel } from '../wheel/wheel.jsx'


export const Car = ({ position, rotation }) => {
  const wheels = [
    { key: 'wheel1', position: [-0.5, -0.75, -0.25] },
    { key: 'wheel2', position: [0.5, 0.75, -0.25] },
    { key: 'wheel3', position: [0.5, -0.75, -0.25] },
    { key: 'wheel4', position: [-0.5, 0.75, -0.25] },
  ]
  return (<group position={position} rotation={rotation}>
    <mesh >
      <boxBufferGeometry attach="geometry" args={[1, 2, 0.5]} />
      <meshStandardMaterial attach="material" color="lightgreen" />
    </mesh>
    <mesh position={[0, 0, 0.4]}>
      <boxBufferGeometry attach="geometry" args={[0.8, 1, 0.4]} />
      <meshStandardMaterial attach="material" color="green" />
    </mesh>
    {wheels.map(({ key, position }) => <Wheel key={key} position={position}></Wheel>)}
  </group>);
}