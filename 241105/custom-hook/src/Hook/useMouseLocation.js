import { useEffect, useState } from "react";

const useMouseLocation = () => {
  const [mouseLocation, setMouseLocation] = useState({
    x: null,
    y: null,
  });

  useEffect(() => {
    window.addEventListener("mousemove", (event) => {
      //       console.log("마우스가 움직임!");
      setMouseLocation({
        x: event.x,
        y: event.y,
      });
    });
  }, []);

  return mouseLocation;
};

export default useMouseLocation;
