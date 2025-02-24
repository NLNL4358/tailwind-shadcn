import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="text-3xl font-bold underline">Hello TailWind</div>

      <div className="flex gap-4">
        <div className="flex justify-center rounded-lg p-8 w-14 flex-none bg-blue-500">
          14
        </div>
        <div className="flex justify-center rounded-lg p-8 w-64 flex-3 bg-cyan-500">
          64
        </div>
        <div className="flex justify-center rounded-lg p-8 w-32 flex-2 bg-pink-500">
          32
        </div>
      </div>
    </div>
  );
}

export default App;
