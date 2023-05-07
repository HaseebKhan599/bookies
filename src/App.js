import Styles from "./App.module.css";
import Logo from "./components/Logo/Logo";
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";

function App() {
  return (
    <div>
      <div className="row g-0">
        <div className="col-lg-2">
          <Logo />
        </div>
        <div className="col-lg-10">
          <Navbar />
        </div>
      </div>
      <div className="row g-0">
        <div className="col-lg-2">
          <Sidebar />
        </div>
        <div className="col-lg-10"></div>
      </div>
    </div>
  );
}

export default App;
