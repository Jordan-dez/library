import Footer from "./components/Footer/Footer";
import NavBar from "./components/NavBar/NavBar";
import AddBooks from "./containers/AddBooks/AddBooks";
import SearchBooks from "./containers/SeachBooks/SearchBooks";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom"



function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<AddBooks />} />
        <Route  path="/search" element={<SearchBooks />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
