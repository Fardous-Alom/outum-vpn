import { Outlet } from "react-router-dom";
import {Routes, Route} from 'react-router-dom'
import Home from "./pages/Home";
import SearchPage from "./pages/SearchPage";

 function App() {
  return (
    <Routes>
    <Route path="/" element={<Home/>}></Route>
    <Route path="search" element={<SearchPage/>}></Route>
    </Routes>
  );
}
export default App