import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Pages/login";
import MainPage from "./Pages/MainPage";
import { ShoppingCartProvider } from "./components/partials/main/shoppingCartContext";
import SignUp from "./Pages/signUp";
import { UserProvider } from "./components/partials/main/userContext";

function App() {
  return (
    <section className="App">
      <UserProvider>
        <Router>
          <Routes>
            <Route
              path="/"
              element={
                <ShoppingCartProvider>
                  <MainPage />
                </ShoppingCartProvider>
              }
            />
            <Route path="/SignUp" element={<SignUp />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </Router>
      </UserProvider>
    </section>
  );
}

export default App;
