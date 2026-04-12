"use client";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import {
  useEffect,
  useMemo,
  useRef,
  type MutableRefObject,
  type RefObject,
} from "react";
import * as THREE from "three";

const GOLD = "#c9943a";
const GOLD_WARM = "#d4a04a";
const RIM = "#f2e6d4";

function damp(current: number, target: number, lambda: number, delta: number) {
  return THREE.MathUtils.lerp(current, target, 1 - Math.exp(-lambda * delta));
}

export type SceneMouseRef = MutableRefObject<{ x: number; y: number }>;

function useCanvasPointerTarget(
  containerRef: RefObject<HTMLDivElement | null>,
  target: SceneMouseRef
) {
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const onMove = (e: PointerEvent) => {
      const r = el.getBoundingClientRect();
      if (r.width < 1 || r.height < 1) return;
      const nx = ((e.clientX - r.left) / r.width) * 2 - 1;
      const ny = -((e.clientY - r.top) / r.height) * 2 + 1;
      target.current.x = THREE.MathUtils.clamp(nx, -1, 1);
      target.current.y = THREE.MathUtils.clamp(ny, -1, 1);
    };

    const onLeave = () => {
      target.current.x = 0;
      target.current.y = 0;
    };

    el.addEventListener("pointermove", onMove);
    el.addEventListener("pointerleave", onLeave);
    el.addEventListener("pointercancel", onLeave);

    return () => {
      el.removeEventListener("pointermove", onMove);
      el.removeEventListener("pointerleave", onLeave);
      el.removeEventListener("pointercancel", onLeave);
    };
  }, [containerRef, target]);
}

function CameraRig({ mouse }: { mouse: SceneMouseRef }) {
  const { camera } = useThree();
  const base = useMemo(() => new THREE.Vector3(0.42, 1.52, 3.38), []);
  const smooth = useRef({ x: 0, y: 0 });

  useFrame((state, delta) => {
    const mt = mouse.current;
    smooth.current.x = damp(smooth.current.x, mt.x, 2.2, delta);
    smooth.current.y = damp(smooth.current.y, mt.y, 2.2, delta);

    const t = state.clock.elapsedTime;
    camera.position.set(
      base.x + smooth.current.x * 0.1 + Math.sin(t * 0.13) * 0.032,
      base.y + smooth.current.y * 0.058 + Math.cos(t * 0.16) * 0.028,
      base.z + Math.sin(t * 0.065) * 0.018
    );
    camera.lookAt(
      smooth.current.x * 0.032,
      0.1 + smooth.current.y * 0.024,
      0
    );
  });

  return null;
}

function GlowBackdrop() {
  const matRef = useRef<THREE.MeshBasicMaterial>(null);

  useFrame((state) => {
    const m = matRef.current;
    if (!m) return;
    const t = state.clock.elapsedTime;
    m.opacity = 0.1 + Math.sin(t * 0.75) * 0.025;
  });

  return (
    <mesh position={[0, 0.06, -1.34]} renderOrder={-2}>
      <planeGeometry args={[3.7, 3.7]} />
      <meshBasicMaterial
        ref={matRef}
        color={GOLD}
        transparent
        opacity={0.1}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </mesh>
  );
}

const BOTTLE_RADIAL = 40;

function PerfumeBottle({
  glass,
  capMetal,
}: {
  glass: THREE.MeshStandardMaterial;
  capMetal: THREE.MeshStandardMaterial;
}) {
  return (
    <group>
      {/* Foot + rounded base */}
      <mesh position={[0, -0.598, 0]} material={glass}>
        <cylinderGeometry args={[0.505, 0.505, 0.044, BOTTLE_RADIAL]} />
      </mesh>
      <mesh
        position={[0, -0.571, 0]}
        rotation={[Math.PI / 2, 0, 0]}
        material={glass}
      >
        <torusGeometry args={[0.476, 0.032, 10, BOTTLE_RADIAL]} />
      </mesh>
      {/* Tapered body */}
      <mesh position={[0, -0.395, 0]} material={glass}>
        <cylinderGeometry args={[0.465, 0.495, 0.34, BOTTLE_RADIAL]} />
      </mesh>
      <mesh position={[0, -0.082, 0]} material={glass}>
        <cylinderGeometry args={[0.42, 0.46, 0.32, BOTTLE_RADIAL]} />
      </mesh>
      {/* Shoulder fillet ring */}
      <mesh
        position={[0, 0.118, 0]}
        rotation={[Math.PI / 2, 0, 0]}
        material={glass}
      >
        <torusGeometry args={[0.208, 0.022, 8, BOTTLE_RADIAL]} />
      </mesh>
      {/* Shoulder → neck */}
      <mesh position={[0, 0.206, 0]} material={glass}>
        <cylinderGeometry args={[0.162, 0.412, 0.09, BOTTLE_RADIAL]} />
      </mesh>
      <mesh position={[0, 0.342, 0]} material={glass}>
        <cylinderGeometry args={[0.114, 0.156, 0.19, BOTTLE_RADIAL]} />
      </mesh>
      {/* Cap collar ring */}
      <mesh
        position={[0, 0.448, 0]}
        rotation={[Math.PI / 2, 0, 0]}
        material={capMetal}
      >
        <torusGeometry args={[0.128, 0.018, 8, BOTTLE_RADIAL]} />
      </mesh>
      {/* Cap stack */}
      <mesh position={[0, 0.534, 0]} material={capMetal}>
        <cylinderGeometry args={[0.132, 0.146, 0.1, BOTTLE_RADIAL]} />
      </mesh>
      <mesh position={[0, 0.612, 0]} scale={[1, 0.42, 1]} material={capMetal}>
        <sphereGeometry args={[0.1, 24, 18]} />
      </mesh>
    </group>
  );
}

function PremiumSubject({ mouse }: { mouse: SceneMouseRef }) {
  const groupRef = useRef<THREE.Group>(null);
  const bottleRef = useRef<THREE.Group>(null);
  const smooth = useRef({ x: 0, y: 0 });

  const glass = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color: new THREE.Color("#0e0c0a"),
        metalness: 0.91,
        roughness: 0.2,
        emissive: new THREE.Color(GOLD),
        emissiveIntensity: 0.048,
      }),
    []
  );

  const capMetal = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color: new THREE.Color("#16120e"),
        metalness: 0.96,
        roughness: 0.24,
        emissive: new THREE.Color(GOLD),
        emissiveIntensity: 0.1,
      }),
    []
  );

  useEffect(() => {
    return () => {
      glass.dispose();
      capMetal.dispose();
    };
  }, [glass, capMetal]);

  useFrame((state, delta) => {
    const mt = mouse.current;
    smooth.current.x = damp(smooth.current.x, mt.x, 3, delta);
    smooth.current.y = damp(smooth.current.y, mt.y, 3, delta);

    const t = state.clock.elapsedTime;

    if (groupRef.current) {
      groupRef.current.position.y = 0.04 + Math.sin(t * 0.95) * 0.034;
    }

    if (bottleRef.current) {
      const idleY = t * 0.12;
      bottleRef.current.rotation.y = idleY + smooth.current.x * 0.38;
      bottleRef.current.rotation.x =
        smooth.current.y * 0.18 + Math.sin(t * 0.32) * 0.012;
    }
  });

  return (
    <group ref={groupRef}>
      <group ref={bottleRef}>
        <PerfumeBottle glass={glass} capMetal={capMetal} />
      </group>
    </group>
  );
}

function SceneContent({ mouse }: { mouse: SceneMouseRef }) {
  return (
    <>
      <CameraRig mouse={mouse} />
      <ambientLight intensity={0.2} color="#a89888" />
      <directionalLight
        position={[4.2, 6.8, 3.2]}
        intensity={0.62}
        color="#ffefe0"
      />
      <pointLight
        position={[1.05, 0.42, 2]}
        intensity={0.42}
        color="#fff6ee"
        distance={14}
        decay={2}
      />
      <pointLight
        position={[-0.4, 0.22, 1.15]}
        intensity={0.48}
        color={GOLD_WARM}
        distance={9}
        decay={2}
      />
      <pointLight
        position={[0.15, 0.35, -1.55]}
        intensity={0.78}
        color="#b8822e"
        distance={6}
        decay={2}
      />
      <directionalLight
        position={[0.2, 0.9, -3.8]}
        intensity={0.26}
        color={RIM}
      />
      <GlowBackdrop />
      <PremiumSubject mouse={mouse} />
    </>
  );
}

export default function ThreeScene() {
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseTarget = useRef({ x: 0, y: 0 });

  useCanvasPointerTarget(containerRef, mouseTarget);

  return (
    <div
      ref={containerRef}
      className="h-full w-full min-h-0 [&_canvas]:block [&_canvas]:h-full [&_canvas]:w-full"
    >
      <Canvas
        camera={{ position: [0.42, 1.52, 3.38], fov: 37, near: 0.1, far: 100 }}
        gl={{
          alpha: true,
          antialias: true,
          powerPreference: "high-performance",
          stencil: false,
        }}
        onCreated={({ gl }) => {
          gl.setClearColor(0x000000, 0);
          gl.toneMapping = THREE.ACESFilmicToneMapping;
          gl.toneMappingExposure = 0.92;
        }}
        style={{ width: "100%", height: "100%", display: "block" }}
        dpr={[1, 1.5]}
      >
        <SceneContent mouse={mouseTarget} />
      </Canvas>
    </div>
  );
}
