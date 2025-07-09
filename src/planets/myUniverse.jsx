import { Canvas, useFrame, useLoader, useThree } from "@react-three/fiber";
import { TextureLoader, CubeTextureLoader, AdditiveBlending} from "three";
import { useRef, useMemo, useEffect, useState } from "react";
import planetTextureSrc from "/images/Textures/2k_mars.png";
import moonTextureSrc from "/images/Textures/moon_texture.jpg";
import asteroidTextureSrc from "/images/Textures/2k_haumea_fictional.jpg"
import cloudSrc from "/images/Textures/2k_earth_clouds.jpg"
import { OrbitControls, Environment } from "@react-three/drei";
import * as THREE from "three";
import GlassCard from "../components/GlassCard";



function getSpeedFactor(speed){
  return (speed/50);
}

function RotatingPlanet({cardM, setCardM, cardR, setCardR, speed, phoneOn}) {
  const groupRef = useRef();
  const cloudsRef = useRef();


  const planet_texture = useLoader(TextureLoader, planetTextureSrc);
  const ast_texture = useLoader(TextureLoader, asteroidTextureSrc);
  const cloud_texture = useLoader(TextureLoader, cloudSrc);

  const asteroidCount = 250;
  const asteroidRadius = 2.0;
  const asteroids = useMemo(() => {
    const arr = [];
    for (let i = 0; i < asteroidCount; i++) {
      const angle = (i / asteroidCount) * 2 * Math.PI;
      const x = Math.cos(angle) * (asteroidRadius + Math.random() * 0.6); //spread along x axis
      const z = Math.sin(angle) * (asteroidRadius + Math.random() * 0.6); //spread along y axis
      const y = (Math.random() - 0.5) * 0.05; // slight vertical variation
      arr.push([x, y, z]);
    }
    return arr;
  }, []);


  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotateY(0.002 * getSpeedFactor(speed)); //self orbit
    }

    if(cloudsRef.current){
       cloudsRef.current.rotateY(0.001 * getSpeedFactor(speed)); //self orbit

    }
  });
  useEffect(() => {
    if (groupRef.current) {
      groupRef.current.rotation.z = (-23.4 * Math.PI) / 180; //planet tilt
    }
    if (cloudsRef.current) {
      cloudsRef.current.rotation.z = (-23.4 * Math.PI) / 180; //planet tilt
    }
  }, []);

  return (
    <>
     <mesh ref = {cloudsRef}>
        <sphereGeometry args = {[1.81, 32, 32]}/>
        <meshStandardMaterial
          map={cloud_texture}
          opacity = {1}
          transparent = {true}
          blending = {AdditiveBlending}
        />
      </mesh>

    <group ref={groupRef}>
      <mesh castShadow receiveShadow
        onClick = {() => setCardM(!cardM)}>
        <sphereGeometry args={[1.8, 32, 32]} />
        <meshStandardMaterial 
          map={planet_texture} 
          emissive={cardM && !phoneOn ? 'purple' : 'black'}
          emissiveIntensity={cardM && !phoneOn ? 0.1 : 0}/>
      </mesh>

      
      
      {asteroids.map((pos, i) => (
        <mesh castShadow receiveShadow key={i} position={pos}>
          <sphereGeometry
            args={[0.03 + Math.random() * 0.03, 8, Math.floor(5 + Math.random() * 5)]}
          />
          <meshStandardMaterial 
            map = {ast_texture}
            emissive={cardR && !phoneOn ? 'white' : 'black'}
            emissiveIntensity={cardR && !phoneOn ? 0.5 : 0}/>
        </mesh>
      ))}

      {/*Invisible Ring for the hover since the asteroids are hard to click on*/}
      <mesh rotation={[-Math.PI / 2, 0, 0]} onClick = {() => setCardR(!cardR)} castShadow={false}
            receiveShadow={false}> 
        <ringGeometry args={[2.1,2.8, 128]} />
        <meshBasicMaterial transparent opacity={0} color = "black"
      />
      </mesh>

    </group>

   
    </>
  );
}

function Moon({card, setCard, speed, phoneOn}) {
  const orbitRef = useRef();
  const moonRef = useRef();
  const texture = useLoader(TextureLoader, moonTextureSrc);

  useFrame(() => {
    if (orbitRef.current) {
      orbitRef.current.rotateY(0.01 * getSpeedFactor(speed)); //orbit around planet

      if (moonRef.current) {
        moonRef.current.rotateY(0.01 * getSpeedFactor(speed)); //self-orbit
      }
    }
  });
  useEffect(() => {
    if (orbitRef.current) {
      // Tilt planet to the right (around Z axis)
      orbitRef.current.rotation.z = (-23.4 * Math.PI) / 180;
    }
  }, []);

  return (
    <group ref={orbitRef}>
      <mesh castShadow receiveShadow ref={moonRef} position={[4, 0, 2]}
        onClick = {() => setCard(!card)}>
        <sphereGeometry args={[0.4, 38, 38]} />
        <meshStandardMaterial 
          map={texture} 
          color={card && !phoneOn ? 'white' : 'inherit'}
          emissive={card && !phoneOn ? 'white' : 'black'}
          emissiveIntensity={card && !phoneOn? 0.4 : 0}/>
      </mesh>
    </group>
  );
}

function CameraUpdater({ fov }) {
  const { camera } = useThree();

  useEffect(() => {
    camera.fov = fov;
    camera.updateProjectionMatrix();
  }, [fov]);

  return null;}


export default function MyUniverse({speed, setHideTT}) {
  const [Fov, setFov] = useState(getFOV());
  const [phone, setPhone] = useState(getPhone());
  const [showMaltiCard, setMaltiCard] = useState(false)
  const [showMarciaCard, setMarciaCard] = useState(false)
  const [showRedCard, setRedCard] = useState(false)

  function getFOV() {
    const width = window.innerWidth;
    if (width < 800) return 100;
    if (width < 1024) return 90;
    return 75;
  }

  function getPhone() {
    const width = window.innerWidth;
    if (width <800) return true;
    return false;
  }

  useEffect(() => 
    {
      const handleResize = () => {
        setFov(getFOV());
        setPhone(getPhone());
      };

      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }, []);

    useEffect(() => {
         setHideTT(!showMaltiCard && !showMarciaCard && !showRedCard)

      }, [showMaltiCard, showMarciaCard, showRedCard]);

  return (
    <div className="w-full h-[500px] md:h-screen">
      <Canvas shadows camera={{ fov: Fov, near: 0.1, far: 1000, position: [3, 3, 3] }}>
        <CameraUpdater fov={Fov} />
        <directionalLight  castShadow
            intensity={5}
            color="light blue"
            position={[-4, 4,1]}
            shadow-mapSize-width={1024}
            shadow-mapSize-height={1024}
            shadow-camera-far={50}
            shadow-camera-left={-10}
            shadow-camera-right={10}
            shadow-camera-top={10}
            shadow-camera-bottom={-10}
        />
        <Environment preset="sunset" />
        <RotatingPlanet cardM = {showMarciaCard} setCardM = {setMarciaCard} cardR = {showRedCard} setCardR = {setRedCard} speed = {speed} phoneOn = {phone}/>
        <Moon card = {showMaltiCard} setCard = {setMaltiCard} speed = {speed}  phoneOn = {phone}/>
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          minPolarAngle={Math.PI / 2}
          maxPolarAngle={Math.PI / 2}
        />
      </Canvas>

      {!phone && showMaltiCard && <GlassCard Title="Malti" 
                                  Alt_Title="(मालती)" 
                                  Text="The name Malti is a name of Indian origin that means small, fragrant flower. It could also mean Moonlight."  
                                  pos={['120px', 'auto', 'auto', '80px']}/>}
      {!phone && showMarciaCard && <GlassCard Title="Marcia" 
                                  Alt_Title="(Mārcia)" 
                                  Text="Marcia is the Latin equivalent to the title Marcus, which means “dedicated to Mars”, the god of war in Roman mythology."  
                                  pos={['auto', '120px', '100px', 'auto']}/>}
      {!phone && showRedCard && <GlassCard Title="Redeker" 
                                  Alt_Title="(Redeker)" 
                                  Text="The Redeker surname is a North German (Westphalia) variant of Rademaker or “wheel maker”."   
                                  pos={['130px', 'auto', '50px', 'auto']}/>}


    </div>
  );
}
