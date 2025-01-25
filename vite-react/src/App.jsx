import { Canvas, useFrame} from '@react-three/fiber';
import { OrbitControls, Sparkles } from '@react-three/drei';
import { useRef } from 'react';

/**
 * A rotating cube mesh.
 * @returns A rotating cube mesh.
 */
const RotatingCube = () => {
    const meshRef = useRef();

    useFrame(() => {
      if(meshRef.current){
        meshRef.current.rotation.y += 0.01;
        meshRef.current.rotation.x += 0.01;
      }
    })

    return (
      <mesh ref={meshRef}>
        <cylinderGeometry args={[1,1,1]} />
        <meshLambertMaterial color="#468585" emissive="#468585" />
      </mesh>
    )
}

/**
 * App component renders a full screen canvas element and sets up a basic 3D scene.
 * The scene contains a rotating cube and a sparkles effect.
 * The user can control the camera with the mouse and keyboard.
 * @returns {JSX.Element} The App component.
 */
const App = () => {

  return (
    <Canvas style={{ height: '100vh', width: '100vw', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
      <OrbitControls enableZoom enablePan enableRotate enableDamping/>

      <directionalLight position={[1,1,1]} intensity={10} color={0x9CDBA6} />

      <color attach='background' args={['#000']} />

      <Sparkles count={100} scale={1} size={6} speed={0.002} noise={0.2} color="orange" />

      <RotatingCube />
    </Canvas>
  )
}

export default App;