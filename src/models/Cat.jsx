import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

export default function Cat(props) {
  const ref = useRef();
  useFrame(() => (ref.current.rotation.y += 0.005));

  const { nodes, materials } = useGLTF("/models/Cat/scene.gltf");
  return (
    <mesh ref={ref}>
      <group {...props} dispose={null} scale={8.8}>
        <group rotation={[-Math.PI / 2, 0, 0]} scale={0.28}>
          <mesh
            geometry={nodes.defaultMaterial.geometry}
            material={materials.DefaultMaterial}
            rotation={[Math.PI / 2, 0, 0]}
          />
        </group>
      </group>
    </mesh>
  );
}
