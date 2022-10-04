import Home from "./Home";
import Navbar from "./Navbar";

function App() {
  const title = "welcome to the new blog";

  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Home />
      </div>
    </div>
  );
}

export default App;