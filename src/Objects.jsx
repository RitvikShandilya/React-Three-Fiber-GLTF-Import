import './index.css'
import { Canvas } from "@react-three/fiber"
import Object from './Object'

export default function Objects() {
    return <>
        <Canvas>
            <Object />
        </Canvas>
    </>
}