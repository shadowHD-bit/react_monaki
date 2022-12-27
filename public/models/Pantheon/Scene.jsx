/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.0.9 scene.gltf
Author: 3DSCANFR (sdrn) (https://sketchfab.com/3DSCANFR)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/paris-pantheon-mascaron-n2-f6ef919ae3f64072883d78ec0f5696f2
Title: Paris Panthéon Mascaron n°2
*/

import React from 'react'
import { useGLTF } from '@react-three/drei'

export function Pantheon(props) {
  const { nodes, materials } = useGLTF('./scene.gltf')
  return (
    <group {...props} dispose={null}>
      <group position={[0, 11.19, 20.53]} rotation={[3.13, 0, 0]}>
        <mesh geometry={nodes.Object_2.geometry} material={materials.luxembourghead_6KdefaultMat} />
        <mesh geometry={nodes.Object_4.geometry} material={materials.luxembourghead_6KdefaultMat} />
      </group>
    </group>
  )
}

useGLTF.preload('./scene.gltf')
