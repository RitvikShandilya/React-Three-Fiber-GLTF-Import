import { OrbitControls } from '@react-three/drei'
import { useRef } from 'react'
import { useLoader, useFrame } from "@react-three/fiber"
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

export default function Object() {

    const objectRef = useRef();

    useFrame(()=> {
        objectRef.current.rotation.y += 0.01;
    })

    const gltf = useLoader(GLTFLoader, '/modelTree.gltf')

    return <>
    <OrbitControls />
        <mesh position-x = {-2} scale = {1.2}>
            <torusKnotGeometry />
            <meshNormalMaterial />
        </mesh>
        <mesh ref = { objectRef } position-x = {2}>
            <torusKnotGeometry />
            <meshNormalMaterial />
        </mesh>
        <primitive object={gltf.scene} />
    </>
}