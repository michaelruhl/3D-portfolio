import React, { useRef, useEffect } from "react";

import birdScene from "../assets/3d/bird.glb";
import { useAnimations, useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

const Bird = () => {
  const birdRef = useRef();
  const { scene, animations } = useGLTF(birdScene);
  const { actions } = useAnimations(animations, birdRef);

  useEffect(() => {
    actions["Take 001"].play();
  }, []);

  useFrame(({clock, camera}) => {
    // Update the Y position to simluate bird-like motion using a sine wave
    birdRef.current.position.y = Math.sin(clock.elapsedTime) * 0.2+2

    // check if bird reached certain endpoint relative to camera
    if(birdRef.current.position.x > camera.position.x + 10) {
      // change direction backward and rotate bird 180 degrees on Y axis
      birdRef.current.rotation.y = Math.PI
    } else if (birdRef.current.position.x < camera.position.x - 10) {
      // change direction forward and rotate bird 180 degrees on Y axis
      birdRef.current.rotation.y = 0
    }

    // move bird forward or backward based on direction
    if (birdRef.current.rotation.y === 0 ) {
      // forward
      birdRef.current.position.x += 0.01
      birdRef.current.position.z -= 0.01

    } else {
      // backward
      birdRef.current.position.x -= 0.01
      birdRef.current.position.z += 0.01
    }
  })

  return (
    <mesh position={[-5, 2, 1]} scale={[0.003, 0.003, 0.003]} ref={birdRef}>
      <primitive object={scene} />
    </mesh>
  );
};

export default Bird;
