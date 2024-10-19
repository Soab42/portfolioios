import { Canvas } from "@react-three/fiber";
import { Center, Text3D } from "@react-three/drei";
import { Suspense } from "react";
import { OrbitControls } from "@react-three/drei"; // For controlling the camera view
import font from "../../../data/MesloLGS NF_Regular.json";
import font2 from "../../../data/Londrina Sketch_Regular.json";

function ThreeDText(props) {
  const text = props.text;
  const splittedText = text.split(" ");

  return (
    <Canvas {...props}>
      <Suspense fallback={null}>
        {splittedText.map((word, index) => (
          <Text3D
            key={index}
            font={font2} // Path to the font file
            size={1} // Size of the text
            height={0.5} // Thickness of the text (extrusion depth)
            curveSegments={12} // Segments for the text curves
            bevelEnabled // Enable bevel effect
            bevelThickness={0.1} // Thickness of the bevel
            bevelSize={0.05} // Size of the bevel
            rotateX={Math.PI / 4} // Rotate the text
            bevelOffset={0} // Offset of the bevel
            bevelSegments={5} // Segments for the bevel
            position={[-2, -index, -index]} // Adjust position for each word (1.5 is the space between lines)
            anchorX="center" // Center the text horizontally
            anchorY="middle" // Center the text vertically
            castShadow
            scale={1.5}
            receiveShadow
          >
            {word}
            <meshNormalMaterial />
          </Text3D>
        ))}
        <OrbitControls autoRotate /> {/* Allows you to move the camera */}
      </Suspense>
    </Canvas>
  );
}

export default ThreeDText;
