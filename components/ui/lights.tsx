import { Object3D, Object3DEventMap } from "three";
import { Bloom, EffectComposer } from "@react-three/postprocessing";

export const Lights = () => {
  const primObj = new Object3D<Object3DEventMap>();

  return (
    <>
      <primitive object={primObj} />
      <pointLight
        position={[-0.63, 0.55, -0.85]}
        intensity={0.1}
        color="#ab61ff"
      />
      <spotLight
        position={[0.1, 0.65, -0.8]}
        angle={1}
        intensity={0.1}
        penumbra={0.5}
        distance={10}
        color={"#ffffff"}
        castShadow
        shadow-normalBias={0.05}
        shadow-mapSize={[1024, 1024]}
        target={primObj}
      />
      <spotLight
        position={[-0.9, 1, 0.7]}
        angle={2}
        intensity={0.5}
        penumbra={0.5}
        distance={10}
        color={"#ffffff"}
        castShadow
        shadow-normalBias={0.05}
        shadow-mapSize={[1024, 1024]}
        target={primObj}
      />
      <spotLight
        position={[-0.82, 0.65, -0.43]}
        angle={2}
        intensity={0.02}
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

export const DarkLights = () => {
  const primObj = new Object3D<Object3DEventMap>();
  return (
    <>
      <primitive object={primObj} />
      <pointLight
        position={[0.46, 0.6, -0.73]}
        intensity={0.1}
        color="#ffbc89"
        castShadow
        shadow-camera-far={20}
        shadow-normalBias={0.05}
        shadow-mapSize={[2048, 2048]}
      />
      <pointLight
        position={[-0.7, 1.2, -0.7]}
        intensity={0.1}
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
          intensity={0.1}
        />
      </EffectComposer>
    </>
  );
};
