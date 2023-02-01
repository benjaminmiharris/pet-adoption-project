import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Navigationbar from "./components/Navbar";
import CreateAccount from "./views/CreateAccount";

import Error from "./views/Error/Error";
import Home from "./views/Home/Sections/Home";

import Search from "./views/SearchView/Search";
import Profile from "./views/Profile/Profile";
import PetDetails from "./views/PetDetails/PetDetails";

import MyPets from "./views/MyPets/MyPets";

import "./index.css";
import AddPetView from "./views/AddPets/AddPetView";

function App() {
  return (
    <>
      <Router>
        <Navigationbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/my-pets" element={<MyPets />} />
          <Route path="/create-pet" element={<AddPetView />} />

          <Route path="/search" element={<Search />} />
          <Route path="/create-account" element={<CreateAccount />} />
          <Route path="/pet/:id" element={<PetDetails />} />

          <Route path="*" element={<Error />} />
        </Routes>
        {/* <Footer /> */}
      </Router>
    </>
  );
}

export default App;
