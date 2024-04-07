function App() {
  return (
    <main className="w-full h-screen bg-slate-50 flex justify-center items-center relative">
      <button className="py-4 px-32 bg-rose-700 border-1 border-rose-950 rounded-md text-slate-50 text-2xl">
        Click me!
      </button>
      <img
        src="/pointinghand.svg"
        alt="Pointing hand cursor"
        className="w-20 h-20 absolute"
      />
    </main>
  );
}

export default App;
