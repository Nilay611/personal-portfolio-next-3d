import * as THREE from "three";
import { useProgress, Html } from "@react-three/drei";
import { Suspense, useState } from "react";
import { Cameras } from "@/components/ui/cameras";
import { Controls } from "@/components/ui/controls";
import { CameraControls } from "@/components/ui/camera-controls";
import { GamingRoom } from "@/components/ui/model";

const Loader = () => {
  const {
    progress,
    //active
  } = useProgress();
  return <Html center>{progress.toFixed(1)}%</Html>;
};

const ModelContainer = () => {
  const [cameraVector, setCameraVector] = useState<THREE.Vector3>(
    new THREE.Vector3(0, 0, 0)
  ); // Added for getting and updating the progress of the camera respective to the scroll

  return (
    <Suspense fallback={<Loader />}>
      <group>
        <Controls>
          <CameraControls setCameraVector={setCameraVector} />
          <Cameras cameraVector={cameraVector} />
          <GamingRoom />
        </Controls>
      </group>
    </Suspense>
  );
};

export default ModelContainer;
