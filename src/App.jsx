import { Outlet } from "react-router-dom";
import PCHeader from "@components/PCHeader/index";

function App() {
  return (
    <div className="app">
      <PCHeader />
      <div className="app-content">
      <Outlet />
      </div>
      
    </div>
  );
}

export default App;
