export const Ground = () => {
  return (<mesh position={[0, 0, 0]}>
    <planeBufferGeometry attach="geometry" args={[100, 100]}/>
    <meshLambertMaterial attach="material" color="lightblue"/>
  </mesh>);
}