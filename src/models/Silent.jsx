import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

export default function Silent(props) {
  const ref = useRef();
  useFrame(() => (ref.current.rotation.y += 0.005));

  const { nodes, materials } = useGLTF("/models/Silent/scene.gltf");
  return (
    <mesh ref={ref}>
    <group {...props} dispose={null} scale={2.5} position={[0,0,0]}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={0.4}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group position={[0, 0, 0]}>
            <mesh geometry={nodes.Object_4.geometry} material={materials.Bunny} />
            <mesh geometry={nodes.Object_5.geometry} material={materials.Skateboard} />
          </group>
        </group>
      </group>
    </group>
    </mesh>
  );
}
