import "./App.css";
import { Canvas } from "@react-three/fiber";
import Experience from "./exp/exp";
import { Suspense } from "react";
import { Html, useProgress } from "@react-three/drei";

function Loader() {
  const { progress } = useProgress();
  return (
    <Html center>
      <h1>{progress} % loaded</h1>
    </Html>
  );
}
function App() {
  return (
    <div className="App">
      <Canvas camera={{ position: [0, 0, 1] }}>
        <color attach="background" args={["#101010"]} />
        <Suspense fallback={<Loader />}>
          <Experience />
        </Suspense>
      </Canvas>
    </div>
  );
}

export default App;
