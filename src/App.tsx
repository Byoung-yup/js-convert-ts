import Toast from "./Toast";
import { showToast } from "./showToast";

function App() {
  return (
    <div className="App">
      <h1>React Event Bus Toast Example</h1>
      <button onClick={() => showToast("This is a toast message!")}>
        Show Toast
      </button>
      <Toast />
    </div>
  );
}

export default App;
