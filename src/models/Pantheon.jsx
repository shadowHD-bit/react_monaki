import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import React, { useRef } from "react";

export default function Pantheon(props) {
  const ref = useRef();
  useFrame(() => (ref.current.rotation.y += 0.005));

  const { nodes, materials } = useGLTF("/models/Monkey/scene.gltf");
  return (
    <mesh ref={ref}>
      <group {...props} dispose={null}>
        <group rotation={[-Math.PI / 2, 0, Math.PI / 2]} animations>
          <group rotation={[Math.PI / 2, 0, 0]} scale={0.02}>
            <group
              position={[11.69, 0, 11.87]}
              rotation={[-Math.PI / 2, 0, -Math.PI]}
              scale={80}
            >
              <mesh
                geometry={nodes.Cube_Material_0.geometry}
                material={materials.Material}
              />
              <mesh
                geometry={nodes.Cube_Materiais001_0.geometry}
                material={materials["Materiais.001"]}
              />
              <mesh
                geometry={nodes.Cube_Materiais_0.geometry}
                material={materials.Materiais}
              />
              <mesh
                geometry={nodes.Cube_Materiais006_0.geometry}
                material={materials["Materiais.006"]}
              />
              <mesh
                geometry={nodes.Cube_Materiais005_0.geometry}
                material={materials["Materiais.005"]}
              />
            </group>
            <mesh
              geometry={nodes.Texto_Materiais_0.geometry}
              material={materials.Materiais}
              position={[-0.1, -102.61, 1.48]}
              rotation={[3.14, -1.57, 3.14]}
              scale={6.68}
            />
          </group>
        </group>
      </group>
    </mesh>
  );
}
