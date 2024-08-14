import Home from "./Components/Home/Home";
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
import SearchResults from "./Components/SearchResults/SearchResults";
import Bookings from "./Components/Bookings/Bookings";
import "./App.css";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<SearchResults />} />
        <Route path="/bookings" element={<Bookings/>}/>
      </Routes>
    </Router>
  );
}

export default App;
