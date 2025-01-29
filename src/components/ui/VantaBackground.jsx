import { useEffect, useRef } from "react";
import * as THREE from "three";
import HALO from "vanta/dist/vanta.halo.min.js";

const VantaBackground = () => {
    const vantaRef = useRef(null);

    useEffect(() => {
        const effect = HALO({
            el: vantaRef.current,
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
        });

        return () => {
            if (effect) effect.destroy();
        };
    }, []);

    return <div ref={vantaRef} className="w-full h-screen" />;
};

export default VantaBackground;
