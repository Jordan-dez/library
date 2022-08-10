import Footer from "./components/Footer/Footer";
import NavBar from "./components/NavBar/NavBar";
import AddBooks from "./containers/AddBooks/AddBooks";


function App() {
  return (
    <div className="App">
      <NavBar/>
        <AddBooks/>
      <Footer/>
    </div>
  );
}

export default App;
