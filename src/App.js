import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import AddPackages from "./components/AddPackages/AddPackages";
import Header from "./components/Home/Header/Header";
import Home from "./components/Home/Home/Home";
import Login from "./components/Login/Login";
import ManageAllBooking from "./components/ManageAllBooking/ManageAllBooking";
import NotFound from "./components/NotFound/NotFound";
import Order from "./components/Order/Order";
import PlaceOrder from "./components/PlaceOrder/PlaceOrder";
import UserOrder from "./components/UserOrder/UserOrder";
import AuthProvider from "./contexts/AuthProvider";
import PrivateRoute from "./PrivateRoute/PrivateRoute";

function App() {
  return (
    <div className="">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>

            <Route exact path="/">
              <Home></Home>
            </Route>

            <Route path="/home">
              <Home></Home>
            </Route>

            <Route path="/login">
              <Login></Login>
            </Route>

            <Route path="/add-packages">
              <AddPackages></AddPackages>
            </Route>

            <Route path="/manage-all-booking">
              <ManageAllBooking></ManageAllBooking>
            </Route>

            <PrivateRoute path="/userr-order">
              <Order></Order>
            </PrivateRoute>

            <PrivateRoute path="/user-order/:packageId">
              <UserOrder></UserOrder>
            </PrivateRoute>

            <PrivateRoute path="/place-order">
              <PlaceOrder></PlaceOrder>
            </PrivateRoute>

            <Route path="*">
              <NotFound></NotFound>
            </Route>

          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
