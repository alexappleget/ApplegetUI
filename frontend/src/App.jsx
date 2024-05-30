import Eyes from "components/Eyes";
import Ninja from "components/Ninja";
import Bacon from "components/Bacon";

function App() {
  return (
    <div className="h-screen w-screen p-8 border-2 border-black flex flex-col gap-2">
      <Eyes />
      <Ninja />
      <Bacon />
    </div>
  );
}

export default App;
