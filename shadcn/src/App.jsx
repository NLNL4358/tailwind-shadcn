import "./App.css";
import { Button } from "@/components/ui/button";

function App() {
  return (
    <div className="App flex gap-10">
      <div className="text-3xl font-bold underline">Hello shadcn</div>

      <div className="flex gap-4">
        <Button variant="default">Button</Button>
      </div>

      <h2 class="card-text">card text</h2>
    </div>
  );
}

export default App;
