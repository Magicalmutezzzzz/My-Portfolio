
import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

function RobotCore() {
  const robotRef = useRef<THREE.Group>(null);
  const ringsRef = useRef<THREE.Group>(null);
  const eyesRef = useRef<THREE.Group>(null);

  useFrame((state, delta) => {
    if (!robotRef.current) return;

    const t = state.clock.elapsedTime;
    const pointer = state.pointer;

    robotRef.current.position.y = Math.sin(t * 1.3) * 0.08;
    robotRef.current.rotation.y += delta * 0.16;
    robotRef.current.rotation.x = THREE.MathUtils.lerp(
      robotRef.current.rotation.x,
      pointer.y * 0.18,
      0.045
    );
    robotRef.current.rotation.z = THREE.MathUtils.lerp(
      robotRef.current.rotation.z,
      -pointer.x * 0.16,
      0.045
    );

    if (ringsRef.current) {
      ringsRef.current.rotation.y = t * 0.22;
      ringsRef.current.rotation.x = Math.sin(t * 0.3) * 0.15;
    }

    if (eyesRef.current) {
      eyesRef.current.scale.y = 0.92 + Math.sin(t * 2.5) * 0.08;
    }
  });

  return (
      <group ref={robotRef} scale={1.05}>
        {/* Main armored head */}
        <mesh>
          <icosahedronGeometry args={[1.05, 2]} />
          <meshStandardMaterial
            color="#10243a"
            metalness={0.95}
            roughness={0.2}
          />
        </mesh>

        {/* Inner core */}
        <mesh scale={0.88}>
          <icosahedronGeometry args={[1.05, 1]} />
          <meshStandardMaterial
            color="#06101b"
            metalness={0.8}
            roughness={0.25}
          />
        </mesh>

        {/* Front faceplate */}
        <mesh position={[0, 0, 0.87]} scale={[0.78, 0.52, 0.16]}>
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial
            color="#030914"
            metalness={0.95}
            roughness={0.15}
          />
        </mesh>

        {/* Cyan optical eyes */}
        <group ref={eyesRef} position={[0, 0.08, 1.07]}>
          {[-0.35, 0.35].map((x) => (
            <group key={x} position={[x, 0, 0]}>
              <mesh>
                <boxGeometry args={[0.24, 0.075, 0.04]} />
                <meshStandardMaterial
                  color="#00e5ff"
                  emissive="#00e5ff"
                  emissiveIntensity={5}
                  toneMapped={false}
                />
              </mesh>
            </group>
          ))}
        </group>

        {/* Forehead reactor */}
        <mesh position={[0, 0.49, 0.78]}>
          <sphereGeometry args={[0.13, 32, 32]} />
          <meshStandardMaterial
            color="#ff7138"
            emissive="#ff4d16"
            emissiveIntensity={3}
            metalness={0.7}
          />
        </mesh>

        {/* Side mechanical armor */}
        {[-1, 1].map((side) => (
          <group key={side} position={[side * 1.02, 0, 0]}>
            <mesh rotation={[0, 0, Math.PI / 2]}>
              <cylinderGeometry args={[0.27, 0.27, 0.22, 12]} />
              <meshStandardMaterial
                color="#087b91"
                metalness={0.95}
                roughness={0.18}
              />
            </mesh>

            <mesh position={[side * 0.15, 0, 0]}>
              <torusGeometry args={[0.24, 0.045, 12, 32]} />
              <meshStandardMaterial
                color="#00e5ff"
                emissive="#00aacc"
                emissiveIntensity={2}
              />
            </mesh>

            {/* Side reactor */}
            <mesh position={[side * 0.15, 0, 0]}>
              <sphereGeometry args={[0.12, 20, 20]} />
              <meshStandardMaterial
                color="#ff7138"
                emissive="#ff4d16"
                emissiveIntensity={1.8}
              />
            </mesh>
          </group>
        ))}

        {/* Lower jaw */}
        <mesh
          position={[0, -0.67, 0.72]}
          scale={[0.48, 0.12, 0.15]}
        >
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial
            color="#ff7138"
            metalness={0.9}
            roughness={0.2}
          />
        </mesh>

        {/* Floating energy rings */}
        <group ref={ringsRef}>
          {[1.5, 1.8, 2.05].map((radius, index) => (
            <mesh
              key={radius}
              rotation={[Math.PI / 2 + index * 0.2, 0.2, 0]}
            >
              <torusGeometry args={[radius, 0.008, 8, 120]} />
              <meshStandardMaterial
                color={index === 1 ? "#536dfe" : "#00e5ff"}
                emissive={index === 1 ? "#536dfe" : "#00e5ff"}
                emissiveIntensity={2}
                transparent
                opacity={0.7}
              />
            </mesh>
          ))}
        </group>

        {/* Armor detail panels */}
        {[-1, 1].map((side) => (
          <mesh
            key={side}
            position={[side * 0.48, -0.42, 0.72]}
            rotation={[0, 0, side * -0.3]}
          >
            <boxGeometry args={[0.12, 0.24, 0.05]} />
            <meshStandardMaterial
              color="#00bcd4"
              emissive="#007f99"
              emissiveIntensity={0.7}
              metalness={0.9}
            />
          </mesh>
        ))}
      </group>
  );
}

export default function RobotScene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 6], fov: 42 }}
      dpr={[1, 1]}
      frameloop="always"
      performance={{ min: 0.5 }}
      gl={{ antialias: false, alpha: true, powerPreference: "low-power" }}
    >
      <ambientLight intensity={0.8} />

      <directionalLight
        position={[4, 5, 5]}
        intensity={2}
        color="#bdeeff"
      />

      <RobotCore />
    </Canvas>
  );
}
