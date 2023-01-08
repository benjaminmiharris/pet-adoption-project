import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigationbar from "./components/Navbar";
import CreateAccount from "./views/CreateAccount";

import Error from "./views/Error";
import Home from "./views/Home";
import Search from "./views/Search";

function App() {
  return (
    <Router>
      <Navigationbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/create-account" element={<CreateAccount />} />

        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  );
}

export default App;
