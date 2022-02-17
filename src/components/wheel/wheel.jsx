
export const Wheel = ({ position }) => {
  return (<mesh position={position} rotation={[0, 0, Math.PI / 2]}>
    <cylinderBufferGeometry attach="geometry" args={[0.25, 0.25, 0.10, 64]} />
    <meshStandardMaterial attach="material" color="blue" />
  </mesh>);
}