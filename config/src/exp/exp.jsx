import {
  PresentationControls,
  Stage,
  MeshReflectorMaterial,
  Float,
  Stars,
  Sparkles,
  CameraShake,
  AdaptiveDpr,
  AdaptiveEvents,
} from "@react-three/drei";
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { Suspense } from "react";

function SparklesContainer({ sparkles }) {
  return (
    <>
      {sparkles.map((sparkle) => (
        <Sparkles
          key={sparkle.color}
          position={(0, 6, 0)}
          count={sparkle.count}
          size={3000}
          opacity={0.05}
          color={sparkle.color}
        />
      ))}
    </>
  );
}
const Experience = () => {
  const gltf = useLoader(GLTFLoader, "/model.glb");

  return (
    <>
      <PresentationControls
        speed={0.6}
        global
        zoom={0.5}
        polar={[-1, Math.PI / 4]}
      >
        <Stars
          radius={100}
          depth={50}
          count={2000}
          factor={4}
          saturation={5}
          fade
          speed={2}
        />
        <Stage environment={"forest"} intensity={0.6} contactShadow={false}>
          <mesh>
            <Float
              speed={1} // Animation speed, defaults to 1
              rotationIntensity={1} // XYZ rotation intensity, defaults to 1
              floatIntensity={1} // Up/down float intensity, works like a multiplier with floatingRange,defaults to 1
              floatingRange={[0.2, 0.4]} // Range of y-axis values the object will float within, defaults to [-0.1,0.1]
            >
              <SparklesContainer
                sparkles={[
                  { color: "rgb(0, 255, 76)", count: 3 },
                  { color: "rgb(245, 226, 17)", count: 7 },
                  { color: "rgb(222, 2, 2)", count: 9 },
                  { color: "rgb(214, 53, 9)", count: 1 },
                ]}
              />
              <Suspense fallback={null}>
                <primitive object={gltf.scene} scale={0.1} />
              </Suspense>
            </Float>
          </mesh>
        </Stage>
        {/* <mesh position={[0, -20, 0]} rotation={[-Math.PI / 2, 0, 0]}>
          <planeGeometry args={[170, 170]} />
          <MeshReflectorMaterial
            blur={[1000, 1000]}
            resolution={2048}
            mixBlur={1}
            mixStrength={40}
            roughness={0.1}
            depthScale={1.2}
            minDepthThreshold={0.4}
            maxDepthThreshold={1.4}
            color="#101010"
            metalness={0.5}
          />
        </mesh> */}
      </PresentationControls>
      <CameraShake
        maxYaw={0.1} // Max amount camera can yaw in either direction
        maxPitch={0.1} // Max amount camera can pitch in either direction
        maxRoll={0.1} // Max amount camera can roll in either direction
        yawFrequency={0.1} // Frequency of the the yaw rotation
        pitchFrequency={0.1} // Frequency of the pitch rotation
        rollFrequency={0.1} // Frequency of the roll rotation
        intensity={1} // initial intensity of the shake
        decayRate={0.65} // if decay = true this is the rate at which intensity will reduce at />
      />
      <AdaptiveDpr pixelated />
      <AdaptiveEvents />
    </>
  );
};
export default Experience;
