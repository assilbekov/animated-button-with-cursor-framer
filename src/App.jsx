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

        await animate(
          "#cursor",
          {
            x: [10, 50],
            y: [30, 80],
          },
          { duration: 1 }
        );
      })();

      (async () => {
        await animate("#button", {
          boxShadow: "5px 5px 0 rgba(76, 5, 25, 0.9)",
        });

        await animate(
          "#button",
          {
            boxShadow: "2px 2px 0 rgba(76, 5, 25, 0.9)",
          },
          { delay: 0.5, repeat: 1, repeatType: "reverse" }
        );

        await animate("#button", {
          color: "#4c0519",
          border: "1px solid #4c0519",
          backgroundColor: "rgb(255 241 242)",
        });
      })();
    }
  }, [isInView, cursorLoaded]);

  return (
    <main
      className="w-full h-screen bg-slate-50 flex justify-center items-center relative"
      ref={scopeRef}
    >
      <button
        id="button"
        className="py-4 px-32 bg-rose-700 border-1 border-rose-950 rounded-md text-slate-50 text-2xl"
      >
        Click me!
      </button>
      <img
        src="/pointinghand.svg"
        alt="Pointing hand cursor"
        className="w-20 h-20 absolute"
        id="cursor"
        onLoad={() => setCursorLoaded(true)}
        style={{ display: cursorLoaded ? "block" : "none" }}
      />
    </main>
  );
}

export default App;
