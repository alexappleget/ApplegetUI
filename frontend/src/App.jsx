import Eyes from "./components/Eyes";
import Ninja from "./components/Ninja";

function App() {
  return (
    <div className="h-screen w-screen p-8 border-2 border-black flex flex-col gap-2">
      <Eyes />
      <Ninja />
    </div>
  );
}

export default App;
