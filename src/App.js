import "./App.css";
import "./index.css";
import SearchBar from "./components/SearchBar/SearchBar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import BankDetails from "./components/Banks/BankDetails";
function App() {
  return (
    <>
      <h1 className="text-center my-3">
        {" "}
        Groww Assignment - Find Your Bank 
      </h1>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/all-banks" element={<SearchBar />}></Route>
          <Route path="/bank-details/:ifsc" element={<BankDetails /> }></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
