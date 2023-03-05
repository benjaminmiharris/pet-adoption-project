import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Navigationbar from "./components/navBar/Navbar";
import CreateAccount from "./views/CreateAccount";

import Error from "./views/Error/Error";
import Home from "./views/Home/Sections/Home";

import Search from "./views/SearchView/Search";
import Profile from "./views/Profile/Profile";
import PetDetails from "./views/PetDetails/PetDetails";

import MyPets from "./views/MyPets/MyPets";

import "./index.css";
import AddPetView from "./views/AddPets/AddPetView";
import UsersDashboard from "./views/Users/UsersDashboard";
import AllPets from "./views/AllPets/AllPets";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";
import { UserContext } from "./context/UserContext";

function App() {
  const { authToken } = useContext(AuthContext);
  const { userRole } = useContext(UserContext);
  return (
    <div className="main-body">
      <Router>
        <Navigationbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Home />} />
          <Route path="/create-account" element={<CreateAccount />} />
          <Route path="/search" element={<Search />} />
          <Route path="/pet/:id" element={<PetDetails />} />

          {authToken && (
            <>
              <Route path="/profile" element={<Profile />} />
              <Route path="/my-pets" element={<MyPets />} />
              <Route path="/pet/search" element={<Search />} />

              {userRole == "admin" && (
                <>
                  <Route path="/create-pet" element={<AddPetView />} />
                  <Route path="/create-pet/:id" element={<AddPetView />} />
                  <Route path="/users" element={<UsersDashboard />} />
                  <Route path="/all-pets" element={<AllPets />} />
                </>
              )}
            </>
          )}

          <Route path="*" element={<Error />} />
        </Routes>
      </Router>
      <div className="main-footer-container">
        <Footer />
      </div>
    </div>
  );
}

export default App;
