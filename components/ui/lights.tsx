import * as THREE from "three";
import { Bloom, EffectComposer } from "@react-three/postprocessing";

export const Lights = () => {
  const primObj = new THREE.Object3D<THREE.Object3DEventMap>();

  return (
    <>
      <primitive object={primObj} />
      <pointLight position={[-1.5, 2.5, -2.5]} intensity={2} color="#ab61ff" />
      <spotLight
        position={[0.75, 3, -3.5]}
        angle={1}
        intensity={10}
        penumbra={0.5}
        distance={10}
        color={"#ffffff"}
        castShadow
        shadow-normalBias={0.05}
        shadow-mapSize={[1024, 1024]}
        target={primObj}
      />
      <spotLight
        position={[-4, 3.75, 1]}
        angle={2}
        intensity={10}
        penumbra={0.5}
        distance={10}
        color={"#ffffff"}
        castShadow
        shadow-normalBias={0.05}
        shadow-mapSize={[1024, 1024]}
        target={primObj}
      />
    </>
  );
};

export const LightLights = () => {
  return (
    <>
      <directionalLight
        color="#f7efe0"
        position={[5, 7, 0]}
        intensity={2}
        castShadow
        shadow-mapSize={[2048, 2048]}
        shadow-camera-far={20}
        shadow-normalBias={0.05}
      />
      <ambientLight color="#f7efe0" intensity={1} />
    </>
  );
};

export const DarkLights = () => {
  const primObj = new THREE.Object3D<THREE.Object3DEventMap>();
  return (
    <>
      <primitive object={primObj} />
      <ambientLight color="#2c379c" intensity={0.1} />
      <spotLight
        position={[-4.1, 1, -4.1]}
        angle={1}
        intensity={5}
        penumbra={0.5}
        distance={10}
        color={"#ffffff"}
        castShadow
        shadow-normalBias={0.05}
        shadow-mapSize={[1024, 1024]}
        target={primObj}
      />
      <spotLight
        position={[4, 0.5, -4]}
        angle={1}
        intensity={5}
        penumbra={0.5}
        distance={10}
        color={"#ffffff"}
        castShadow
        shadow-normalBias={0.05}
        shadow-mapSize={[1024, 1024]}
        target={primObj}
      />
      <pointLight
        position={[2.5, 2.5, -3]}
        intensity={5}
        color="#ffbc89"
        castShadow
        shadow-camera-far={20}
        shadow-normalBias={0.05}
        shadow-mapSize={[2048, 2048]}
      />
      <pointLight
        position={[-3, 3.5, -3]}
        intensity={3}
        color="#9ed1ff"
        castShadow
        shadow-camera-far={20}
        shadow-normalBias={0.05}
        shadow-mapSize={[2048, 2048]}
      />
      <EffectComposer>
        <Bloom
          luminanceThreshold={0.3}
          luminanceSmoothing={0.9}
          intensity={0.5}
        />
      </EffectComposer>
    </>
  );
};
