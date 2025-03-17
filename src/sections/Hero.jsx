import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import MyPC from "../components/MyPC";
import CanvasLoader from "../components/Loader";
import { Suspense } from "react";
import { useMediaQuery } from 'react-responsive';
import { calculateSizes } from "../constants/index.js";
import { Leva, useControls } from "leva";

const Hero = () => {
    // Use media queries to determine screen size
    /* const controls = useControls('MyPC', {
        xPos: { value: 0, min: -10, max: 10 },
        yPos: { value: 0, min: -10, max: 10 },
        zPos: { value: 0, min: -10, max: 10 },
    }) */
    const isSmall = useMediaQuery({ maxWidth: 440 });
    const isMobile = useMediaQuery({ maxWidth: 768 });
    const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });

    const sizes = calculateSizes(isSmall, isMobile, isTablet);

    return (
        <section className="min-h-screen border-2 w-full flex flex-col relative">
            <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3">
                <p className="sm:text-4xl text-2xl font-medium text-white text-center font-generalsans typewriter">Hi, I am Maria </p>
                <p className="hero_tag text-gradient"> Game Dev Enthusiast & CS Student </p>
            </div>

            <div className="w-full h-full absolute inset-0">
                <Leva hidden />
                <Canvas className="w-full h-full">

                    <Suspense fallback={<CanvasLoader />}>
                        <PerspectiveCamera makeDefault position={[0, 0, 5]} />
                        <ambientLight intensity={1} />
                        <directionalLight position={[10, -10, 5]} intensity={1} />
                        <OrbitControls />
                        <MyPC
                            scale={sizes.pcScale}
                            position={sizes.pcPos}
                            rotation={[0, Math.PI / 4, 0]} />

                    </Suspense>
                </Canvas>
            </div>



        </section>
    );
}

export default Hero