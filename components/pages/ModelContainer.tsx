import { Canvas } from "@react-three/fiber";
import * as THREE from "three";
import { useProgress, Html } from "@react-three/drei";
import { Suspense, useEffect, useState } from "react";
import { Cameras } from "@/components/ui/cameras";
import { Controls } from "@/components/ui/controls";
import { CameraControls } from "@/components/ui/camera-controls";
import { GamingRoom } from "@/components/ui/model";
import { useLoadingState } from "@/providers/LoadingProvider";

const ModelContainer = () => {
  const { progress } = useProgress();
  const [cameraVector, setCameraVector] = useState<THREE.Vector3>(
    new THREE.Vector3(0, 0, 0)
  ); // Added for getting and updating the progress of the camera respective to the scroll
  const { setIsLoading } = useLoadingState();

  useEffect(() => {
    if (progress === 100) {
      setIsLoading(false);
    }
  }, [progress, setIsLoading]);

  return (
    <Canvas
      className="w-full h-full"
      gl={{ antialias: true }}
      dpr={[1, 1.5]}
      shadows="soft"
    >
      <Suspense fallback={<Html center>Loading...</Html>}>
        <group name="modelContainer">
          <Controls>
            <CameraControls setCameraVector={setCameraVector} />
            <Cameras cameraVector={cameraVector} />
            <GamingRoom />
          </Controls>
        </group>
      </Suspense>
    </Canvas>
  );
};

export default ModelContainer;
