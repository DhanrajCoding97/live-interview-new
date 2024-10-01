import React, { useRef, useEffect } from "react";
import SiriWave from "siriwave";

const SiriWaveComponent = ({ width = 840, height = 168, freq, amp }) => {
  const containerRef = useRef(null);
  const siriWaveRef = useRef(null);

  useEffect(() => {
    if (containerRef.current && !siriWaveRef.current) {
      siriWaveRef.current = new SiriWave({
        container: containerRef.current,
        width: width,
        height: height,
        style: "ios9",
        amplitude: amp,
        speed: 0.2,
        frequency: freq,
        autostart: true,
      });
    }

    return () => {
      if (siriWaveRef.current) {
        siriWaveRef.current.dispose();
        siriWaveRef.current = null;
      }
    };
  }, [width, height]);

  return <div ref={containerRef} />;
};

export default SiriWaveComponent;
