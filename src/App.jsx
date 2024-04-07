import { useAnimate, useInView } from "framer-motion";
import { useEffect, useState } from "react";

function App() {
  const [scopeRef, animate] = useAnimate();
  const isInView = useInView(scopeRef);
  const [cursorLoaded, setCursorLoaded] = useState(false);

  useEffect(() => {
    if (isInView && cursorLoaded) {
      (async () => {
        await animate(
          "#cursor",
          {
            opacity: [0, 1],
            x: [100, 10],
            y: [80, 30],
          },
          {
            duration: 1,
          }
        );

        await animate(
          "#cursor",
          {
            scale: 0.9,
          },
          {
            delay: 0.05,
            duration: 0.3,
            repeat: 1,
            repeatType: "reverse",
          }
        );
      })();
    }
  }, [isInView, cursorLoaded]);

  return (
    <main
      className="w-full h-screen bg-slate-50 flex justify-center items-center relative"
      ref={scopeRef}
    >
      <button className="py-4 px-32 bg-rose-700 border-1 border-rose-950 rounded-md text-slate-50 text-2xl">
        Click me!
      </button>
      <img
        src="/pointinghand.svg"
        alt="Pointing hand cursor"
        className="w-20 h-20 absolute"
        id="cursor"
        onLoad={() => setCursorLoaded(true)}
      />
    </main>
  );
}

export default App;
