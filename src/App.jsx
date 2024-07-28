import { useEffect } from "react";
import "./App.css";
import ContentList from "./components/ContentList/ContentList";
import Footer from "./components/Footer/Footer";

function App() {
  useEffect(() => {
    if (location.protocol !== "https:" && location.hostname !== "localhost") {
      location.replace(
        `https:${location.href.substring(location.protocol.length)}`
      );
    }
  }, []);

  return (
    <div id="app">
      <ContentList />
      <Footer />
    </div>
  );
}

export default App;
