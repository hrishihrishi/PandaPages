import { BrowserRouter, Outlet } from "react-router-dom";
import NavBar from "./components/NavBar";
function App() {

  return (
    <>
    {/* Navigation bar */}
      <NavBar />
      {/* Outlet to render child components */}
      <Outlet />
    </>
  )
}

export default App
