import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { CarController } from '../../controllers/car-controller/car-controller.jsx';


export const AppCanvas = (props) => {
   return (
   <Canvas>
      <OrbitControls></OrbitControls>
      <CarController></CarController>
      <ambientLight intensity={0.5}/>
      <spotLight position={[10, 15,  20]} angle={0.3}/>
      {props.children}
   </Canvas>)
}