import "./App.css";
import Header from "./components/Layout/Header";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MovieTop from "./components/Top";

function App() {
  return (
    <>
      <Header text={"Find Your Favorite Movie"} />
      {/* // react-router-domがVersion 6になって書き方が変わったので注意 */}
      <Router>
        <Routes>
          <Route path="/" element={<MovieTop />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
