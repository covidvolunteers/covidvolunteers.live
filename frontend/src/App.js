import Titlebar from "./components/Titlebar/Titlebar";
import { Homepage } from "./pages/Home";

function App() {
  return (
    <div style={{ backgroundColor: "#9CA3AE", minHeight: "100vh", height: "100%" }}>
      <Titlebar />
      <Homepage />
    </div>
  );
}
// "#f7f7f9"
// "#9CA3AE"
export default App;
