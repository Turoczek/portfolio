import { useEffect, useState } from "react";

function getWindowHeight() {
  if (typeof window !== "undefined") {
    const { innerHeight: height } = window;
    return height;
  }
  return 600;
}

export const useWindowHeight = (): number => {
  const [winHeight, setWinHeight] = useState(getWindowHeight());

  useEffect(() => {
    function handleResize() {
      setWinHeight(getWindowHeight());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return winHeight;
};
