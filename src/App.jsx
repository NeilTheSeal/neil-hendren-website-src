import "./App.css";
import ContentList from "./components/ContentList/ContentList";
import Footer from "./components/Footer/Footer";
import NavBar from "./components/NavBar/NavBar";

function App() {
  return (
    <div id="app">
      <NavBar />
      <ContentList />
      <Footer />
    </div>
  );
}

export default App;
