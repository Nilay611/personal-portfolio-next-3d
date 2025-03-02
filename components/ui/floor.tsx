export const Floor = () => {
  return (
    <mesh
      name="floorMesh"
      position={[0, -0.5, 0]}
      rotation={[-Math.PI / 2, 0, 0]}
      scale={[5, 5, 5]}
      receiveShadow
    >
      <circleGeometry args={[5, 64]} />
      <meshStandardMaterial color={"#fdfef0"} />
    </mesh>
  );
};
