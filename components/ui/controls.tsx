import { ScrollControls, OrbitControls } from "@react-three/drei";
import { ReactNode } from "react";

export const Controls = ({ children }: Readonly<{ children: ReactNode }>) => {
  return (
    <>
      <OrbitControls enableDamping enableZoom={true} />
      <ScrollControls damping={0.25} pages={0}>
        {children}
      </ScrollControls>
    </>
  );
};
